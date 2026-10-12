export type MenuCategory = 'kebabs' | 'hsps' | 'pides' | 'sides' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description?: string;
  tags?: string[];
  popular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Eats', icon: '🌯' },
  { id: 'kebabs', label: 'Handcrafted Kebabs', icon: '🥙' },
  { id: 'hsps', label: 'Halal Snack Packs (HSPs)', icon: '🍟' },
  { id: 'pides', label: 'Turkish Pides & Gözleme', icon: '🍕' },
  { id: 'sides', label: 'Loaded Sides & Dips', icon: '🥗' },
  { id: 'drinks', label: 'Cold Drinks', icon: '🥤' },
] as const;

export const MENU_TAGS = ['All', 'Popular', 'Late Night', 'Best Seller', 'Boyz Signature'] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Kebabs
  {
    id: 'kebab-regular',
    name: 'The Boyz Classic Kebab (Regular)',
    price: 15.00,
    category: 'kebabs',
    description: 'Fresh toasted flatbread, thinly sliced marinated meat (Lamb, Chicken, or Mixed), fresh lettuce, tomato, onion, and your choice of 2 sauces.',
    tags: ['Popular', 'Best Seller'],
    popular: true
  },
  {
    id: 'kebab-jumbo',
    name: 'The Big Boyz Kebab (Jumbo Double Meat)',
    price: 19.50,
    category: 'kebabs',
    description: 'Double serving of hot spit-roasted meat, melted cheese, jalapenos, and all the salads and signature garlic sauce.',
    tags: ['Popular', 'Boyz Signature'],
    popular: true
  },
  {
    id: 'kebab-falafel',
    name: 'Crunchy Veggie Falafel Kebab',
    price: 14.50,
    category: 'kebabs',
    description: 'House-made crispy chickpea falafel patties, fresh tabouli, lettuce, tomato, hummus, and tahini sauce.',
    tags: ['Best Seller']
  },

  // HSPs
  {
    id: 'hsp-regular',
    name: 'Classic Halal Snack Pack (Medium)',
    price: 17.50,
    category: 'hsps',
    description: 'Crispy hot beer-battered chips, melted shredded cheese, loaded with spit-roasted lamb, chicken or mixed, topped with the Holy Trinity (Garlic, BBQ & Chilli sauces).',
    tags: ['Popular', 'Best Seller'],
    popular: true
  },
  {
    id: 'hsp-large',
    name: 'Monster Snack Pack (Large Feast)',
    price: 22.50,
    category: 'hsps',
    description: 'Heavyweight container filled with golden seasoned chips, double melted cheese, mountains of succulent meat, and trio sauces.',
    tags: ['Popular', 'Boyz Signature'],
    popular: true
  },

  // Pides
  {
    id: 'pide-spinach',
    name: 'Spinach & Feta Traditional Pide',
    price: 16.00,
    category: 'pides',
    description: 'Stone-baked Turkish pastry boat filled with seasoned baby spinach, creamy crumbled feta, and mozzarella.'
  },
  {
    id: 'pide-sucuk',
    name: 'Spicy Turkish Sausage & Cheese Pide',
    price: 17.50,
    category: 'pides',
    description: 'Sliced spicy beef sucuk sausage, roasted capsicum, and melted mozzarella cheese.'
  },

  // Sides
  {
    id: 'side-chips',
    name: 'Large Seasoned Hot Chips',
    price: 8.50,
    category: 'sides',
    description: 'Crispy fried chips dusted in savory kebab salt.',
    popular: true
  },
  {
    id: 'side-dim-sims',
    name: 'Fried South Melbourne Dim Sims (3 Pack)',
    price: 7.50,
    category: 'sides',
    description: 'Crispy deep-fried dimmies with soy sauce.'
  },
  {
    id: 'side-baklava',
    name: 'Handcrafted Turkish Walnut Baklava (2 Pieces)',
    price: 6.00,
    category: 'sides',
    description: 'Flaky layers of filo pastry drenched in sweet rosewater honey syrup and crushed walnuts.'
  },

  // Drinks
  {
    id: 'drink-can',
    name: 'Chilled 375ml Drink Can',
    price: 3.50,
    category: 'drinks',
    description: 'Coke, Coke Zero, Solo, Fanta, Sprite.'
  },
  {
    id: 'drink-ayran',
    name: 'Authentic Turkish Ayran Yogurt Drink',
    price: 4.50,
    category: 'drinks',
    description: 'Traditional refreshing salted yogurt drink, perfect with spicy kebabs.'
  }
];
