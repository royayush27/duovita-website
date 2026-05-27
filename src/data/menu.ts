import matchaCoffeeImg from '../assets/images/duo_cup_coffee_matcha_1779329655007.png';
import milkteaCollagenImg from '../assets/images/duo_cup_milktea_collagen_1779329673545.png';
import kombuchaSmoothieImg from '../assets/images/duo_cup_kombucha_smoothie_1779329691723.png';
import cacaoGoldenImg from '../assets/images/duo_cup_cacao_golden_1779329731426.png';
import dragonCitrusImg from '../assets/images/duo_cup_dragonfruit_citrus_1779329748981.png';

export type ProductAddon = {
  name: string;
  price: number;
};

export type ProductInside = {
  title: string;
  body: string;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  detailDescription: string;
  tag: string;
  image: string;
  category: string;
  badges: string[];
  milkLabel: string;
  milkOptions: string[];
  addons: ProductAddon[];
  inside: ProductInside[];
};

export type MenuCategory = {
  name: string;
  emoji: string;
  description: string;
  items: MenuItem[];
};

const defaultMilkOptions = ['Oat Milk', 'Whole Milk', 'Almond Milk'];

export const menuCategories: MenuCategory[] = [
  {
    name: 'Focus & Calm',
    emoji: '☽',
    description: 'Balance sharp mental clarity with grounded, jitter-free calm.',
    items: [
      {
        id: 'the-clarity-duo',
        name: 'The Clarity Duo',
        price: 8500,
        description: 'Single-origin Ethiopian Cold Brew with Lion\'s Mane for sharp focus, paired with ceremonial iced matcha and L-Theanine for grounded calm.',
        detailDescription: 'Why choose when you can experience both? The left compartment holds our slow-dripped Ethiopian Cold Brew, infused with Lion\'s Mane for sharp focus. The right compartment offers Ceremonial Grade Matcha enriched with L-Theanine for a jitter-free, grounded calm. Sip alternately to find your ultimate flow state.',
        tag: 'FOCUS + CALM',
        image: matchaCoffeeImg,
        category: 'Focus & Calm',
        badges: ['Lion\'s Mane', 'L-Theanine'],
        milkLabel: 'MILK PREFERENCE (MATCHA SIDE)',
        milkOptions: defaultMilkOptions,
        addons: [
          { name: 'Extra Shot Espresso', price: 1000 },
          { name: 'Extra Ceremonial Matcha', price: 2000 },
        ],
        inside: [
          {
            title: 'Lion\'s Mane Extract (Espresso Side)',
            body: 'A powerful adaptogenic mushroom known for supporting memory, focus, and sustained cognitive energy.',
          },
          {
            title: 'L-Theanine & Matcha (Right Side)',
            body: 'Matcha naturally contains L-Theanine, an amino acid associated with calm focus and smoother energy.',
          },
        ],
      },
      {
        id: 'the-zen-balance',
        name: 'The Zen Balance',
        price: 7500,
        description: 'Earthy roasted Hojicha tea meets lavender-infused crystal lemonade with ashwagandha adaptogens. The perfect afternoon reset.',
        detailDescription: 'Roasted Hojicha brings a soft, nutty tea base while lavender crystal lemonade adds a bright lift. Ashwagandha rounds out the duo for a calm afternoon reset that still feels like a cafe treat.',
        tag: 'RELAX + FOCUS',
        image: matchaCoffeeImg,
        category: 'Focus & Calm',
        badges: ['Ashwagandha', 'Zero Sugar'],
        milkLabel: 'MILK PREFERENCE (HOJICHA SIDE)',
        milkOptions: defaultMilkOptions,
        addons: [
          { name: 'Extra Hojicha', price: 1500 },
          { name: 'Lavender Boost', price: 1000 },
        ],
        inside: [
          {
            title: 'Roasted Hojicha',
            body: 'A mellow roasted green tea with low bitterness and a grounding, nutty finish.',
          },
          {
            title: 'Ashwagandha Lemonade',
            body: 'A lavender lemonade side with adaptogens selected for a smooth, relaxed ritual.',
          },
        ],
      },
    ],
  },
  {
    name: 'Energy & Glow',
    emoji: '✦',
    description: 'Nourish your skin from the inside while fueling your day.',
    items: [
      {
        id: 'the-seoul-blossom',
        name: 'The Seoul Blossom',
        price: 9000,
        description: 'Creamy Earl Grey milk tea with honey boba paired with wild rose sparkling collagen water. Beauty from within, sip by sip.',
        detailDescription: 'Creamy Earl Grey milk tea and honey boba deliver the cafe indulgence, while wild rose sparkling collagen water keeps the second side light, floral, and beauty-focused.',
        tag: 'INDULGE + GLOW',
        image: milkteaCollagenImg,
        category: 'Energy & Glow',
        badges: ['Marine Collagen', 'Boba'],
        milkLabel: 'MILK PREFERENCE (MILK TEA SIDE)',
        milkOptions: defaultMilkOptions,
        addons: [
          { name: 'Extra Honey Boba', price: 1000 },
          { name: 'Collagen Boost', price: 1500 },
        ],
        inside: [
          {
            title: 'Earl Grey Milk Tea',
            body: 'A bergamot-scented tea base with creamy milk and honey boba for a polished cafe profile.',
          },
          {
            title: 'Wild Rose Collagen Water',
            body: 'A sparkling floral side built around marine collagen and a clean, refreshing finish.',
          },
        ],
      },
      {
        id: 'the-radiance-split',
        name: 'The Radiance Split',
        price: 8500,
        description: 'Fizzy golden ginger kombucha for gut health meets antioxidant-rich acai berry smoothie. Vitality you can taste.',
        detailDescription: 'Golden ginger kombucha brings probiotic sparkle and a clean bite, balanced by an acai berry smoothie side with a lush antioxidant profile.',
        tag: 'VITALITY + SHINE',
        image: kombuchaSmoothieImg,
        category: 'Energy & Glow',
        badges: ['Probiotics', 'Antioxidants'],
        milkLabel: 'SMOOTHIE BASE',
        milkOptions: ['Coconut Water', 'Oat Milk', 'Almond Milk'],
        addons: [
          { name: 'Ginger Shot', price: 1000 },
          { name: 'Vitamin C Boost', price: 1200 },
        ],
        inside: [
          {
            title: 'Golden Ginger Kombucha',
            body: 'A bright fermented tea side with lively ginger and probiotic character.',
          },
          {
            title: 'Acai Berry Smoothie',
            body: 'A cool berry side with antioxidant-rich acai and a smooth, rounded texture.',
          },
        ],
      },
    ],
  },
  {
    name: 'Indulgence & Wellness',
    emoji: '◈',
    description: 'Decadent flavors expertly paired with healing properties.',
    items: [
      {
        id: 'the-cacao-vitality',
        name: 'The Cacao Vitality',
        price: 8000,
        description: 'Iced dark chocolate cacao milk with sea salt meets turmeric and ginger golden spice latte. Treat yourself to something that loves you back.',
        detailDescription: 'A dark cacao milk side gives this duo a dessert-like depth, while turmeric and ginger golden spice latte adds warmth, spice, and a wellness-forward finish.',
        tag: 'TREAT + HEAL',
        image: cacaoGoldenImg,
        category: 'Indulgence & Wellness',
        badges: ['Turmeric', 'Sea Salt'],
        milkLabel: 'MILK PREFERENCE',
        milkOptions: defaultMilkOptions,
        addons: [
          { name: 'Cacao Nib Crunch', price: 1000 },
          { name: 'Golden Spice Boost', price: 1200 },
        ],
        inside: [
          {
            title: 'Dark Cacao Milk',
            body: 'A chilled cacao side with sea salt for depth, contrast, and a clean chocolate finish.',
          },
          {
            title: 'Turmeric Ginger Latte',
            body: 'A golden spice side with turmeric and ginger for warmth and a rounded cafe body.',
          },
        ],
      },
      {
        id: 'the-dessert-duo',
        name: 'The Dessert Duo',
        price: 8500,
        description: 'Sweet taro root cream milk meets vanilla bean whey protein shake. Recover and restore - deliciously.',
        detailDescription: 'Sweet taro root cream milk gives this duo its nostalgic dessert character, paired with a vanilla bean whey protein shake designed for post-work recovery.',
        tag: 'SWEET + RECOVER',
        image: milkteaCollagenImg,
        category: 'Indulgence & Wellness',
        badges: ['Whey Protein', 'Taro'],
        milkLabel: 'MILK PREFERENCE',
        milkOptions: defaultMilkOptions,
        addons: [
          { name: 'Extra Taro Cream', price: 1200 },
          { name: 'Protein Boost', price: 1800 },
        ],
        inside: [
          {
            title: 'Taro Root Cream Milk',
            body: 'A creamy taro side with soft sweetness and a plush dessert texture.',
          },
          {
            title: 'Vanilla Bean Whey Shake',
            body: 'A protein-rich shake side with vanilla bean notes and a smooth finish.',
          },
        ],
      },
    ],
  },
  {
    name: 'Refresh & Revive',
    emoji: '◯',
    description: 'Bright, sparkling, and deeply hydrating combinations.',
    items: [
      {
        id: 'the-citrus-oasis',
        name: 'The Citrus Oasis',
        price: 7000,
        description: 'Bright pink dragonfruit lemonade meets sparkling yuzu citrus with electrolytes. Hydrate beautifully, awaken effortlessly.',
        detailDescription: 'Pink dragonfruit lemonade brings vivid fruit and tart sweetness, while sparkling yuzu citrus adds electrolytes and a crisp, hydrating finish.',
        tag: 'HYDRATE + AWAKEN',
        image: dragonCitrusImg,
        category: 'Refresh & Revive',
        badges: ['Electrolytes', 'Yuzu'],
        milkLabel: 'SPARKLE LEVEL',
        milkOptions: ['Still', 'Light Sparkle', 'Full Sparkle'],
        addons: [
          { name: 'Electrolyte Boost', price: 1000 },
          { name: 'Extra Yuzu', price: 1000 },
        ],
        inside: [
          {
            title: 'Dragonfruit Lemonade',
            body: 'A bright fruit side with pink dragonfruit, lemon, and a clean tart edge.',
          },
          {
            title: 'Sparkling Yuzu Citrus',
            body: 'A crisp yuzu side with electrolytes for a refreshing finish.',
          },
        ],
      },
    ],
  },
];

export const seasonalMenuItem: MenuItem = {
  id: 'the-kombucha-glow-duo',
  name: 'The Kombucha Glow Duo',
  price: 9500,
  description: 'Summer\'s exclusive: Golden ginger kombucha meets antioxidant acai smoothie with vitamin C boost. Available until August 31st.',
  detailDescription: 'This seasonal duo pairs golden ginger kombucha with an antioxidant-rich acai smoothie and a vitamin C boost. It is bright, fizzy, and built for warm-weather energy.',
  tag: 'LIMITED TIME',
  image: kombuchaSmoothieImg,
  category: 'Seasonal Special',
  badges: ['Probiotics', 'Vitamin C'],
  milkLabel: 'SMOOTHIE BASE',
  milkOptions: ['Coconut Water', 'Oat Milk', 'Almond Milk'],
  addons: [
    { name: 'Ginger Shot', price: 1000 },
    { name: 'Vitamin C Boost', price: 1200 },
  ],
  inside: [
    {
      title: 'Golden Ginger Kombucha',
      body: 'A lively fermented tea side with ginger brightness and probiotic character.',
    },
    {
      title: 'Acai Smoothie',
      body: 'A berry-rich smoothie side with vitamin C and a cooling seasonal finish.',
    },
  ],
};

export const menuItems = [
  seasonalMenuItem,
  ...menuCategories.flatMap((category) => category.items),
];

export function getProductById(id: string | undefined) {
  return menuItems.find((item) => item.id === id);
}
