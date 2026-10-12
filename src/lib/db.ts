import { neon } from '@neondatabase/serverless';

export interface InquiryRecord {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  service_type: string;
  guest_count?: number;
  event_date?: string;
  notes?: string;
  created_at?: string;
}

// In-memory fallback for instant local preview if DATABASE_URL is not yet provided
const demoInquiries: InquiryRecord[] = [
  {
    id: 1,
    name: "Greg Thompson",
    phone: "0418 234 567",
    email: "greg.t@Benalla.com.au",
    service_type: "Fish & Chips Club Catering",
    guest_count: 40,
    event_date: "2026-10-24",
    notes: "Large battered flake & chips trays, 40 potato cakes and 30 steamed dim sims for Benalla footy club event.",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 2,
    name: "Lisa Chen",
    phone: "0432 109 876",
    email: "lisa.c@outlook.com",
    service_type: "Chinese Buffet Trays",
    guest_count: 25,
    event_date: "2026-11-02",
    notes: "Sweet & sour pork, honey chicken, special fried rice and Singapore noodle party trays.",
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 3,
    name: "Mark Wilson",
    phone: "0429 887 654",
    email: "mark.wilson@vicnet.au",
    service_type: "Burgers & Lunch Packs",
    guest_count: 18,
    event_date: "2026-10-18",
    notes: "Assorted hamburgers with the lot, steak sandwiches, and large chips for Carrier St trade crew lunch.",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  }
];

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.includes('your_password') || connectionString.includes('placeholder')) {
    return null;
  }
  return neon(connectionString);
}

export async function initDb() {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS kebab_boyz_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        service_type VARCHAR(100) NOT NULL,
        guest_count INT,
        event_date VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return true;
  } catch (err) {
    console.error('Failed to initialize Neon database table:', err);
    return false;
  }
}

export async function saveInquiry(inquiry: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<InquiryRecord> {
  const sql = getDb();

  if (!sql) {
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: demoInquiries.length + 1,
      created_at: new Date().toISOString()
    };
    demoInquiries.unshift(newRecord);
    return newRecord;
  }

  await initDb();

  const result = await sql`
    INSERT INTO kebab_boyz_inquiries (name, phone, email, service_type, guest_count, event_date, notes)
    VALUES (
      ${inquiry.name},
      ${inquiry.phone},
      ${inquiry.email || null},
      ${inquiry.service_type},
      ${inquiry.guest_count || null},
      ${inquiry.event_date || null},
      ${inquiry.notes || null}
    )
    RETURNING id, name, phone, email, service_type, guest_count, event_date, notes, created_at;
  `;

  return result[0] as unknown as InquiryRecord;
}

export async function getInquiries(): Promise<{ inquiries: InquiryRecord[]; isLiveDb: boolean }> {
  const sql = getDb();

  if (!sql) {
    return { inquiries: demoInquiries, isLiveDb: false };
  }

  try {
    await initDb();
    const rows = await sql`
      SELECT id, name, phone, email, service_type, guest_count, event_date, notes, created_at
      FROM kebab_boyz_inquiries
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return { inquiries: rows as unknown as InquiryRecord[], isLiveDb: true };
  } catch (err) {
    console.error('Error fetching from Neon database:', err);
    return { inquiries: demoInquiries, isLiveDb: false };
  }
}
