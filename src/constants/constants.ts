import butterChicken from '../assets/butter-chicken-4.jpg';
import palakPaneer from '../assets/Saag-Paneer-1.jpg';
import biryani from '../assets/hyderabadibiryani.jpg';
import masalaDosa from '../assets/masala-dosa.jpg';
import choleBhature from '../assets/chole-bhature.jpg';
import rajmaChawal from '../assets/rajma-chawal-1.jpg';
import paneerTikka from '../assets/paneer-tika.webp';
import gulabJamun from '../assets/gulab-jamun.webp';
import pooriSabji from '../assets/poori-sabji.webp';
import roganJosh from '../assets/rogan-josh.jpg';

export const popularDishes = [
    {
      id: 1,
      image: butterChicken,
      name: 'Butter Chicken',
      numberOfOrders: 250,
    },
    {
      id: 2,
      image: palakPaneer,
      name: 'Palak Paneer',
      numberOfOrders: 190,
    },
    {
      id: 3,
      image: biryani,
      name: 'Hyderabadi Biryani',
      numberOfOrders: 300,
    },
    {
      id: 4,
      image: masalaDosa,
      name: 'Masala Dosa',
      numberOfOrders: 220,
    },
    {
      id: 5,
      image: choleBhature,
      name: 'Chole Bhature',
      numberOfOrders: 270,
    },
    {
      id: 6,
      image: rajmaChawal,
      name: 'Rajma Chawal',
      numberOfOrders: 180,
    },
    {
      id: 7,
      image: paneerTikka,
      name: 'Paneer Tikka',
      numberOfOrders: 210,
    },
    {
      id: 8,
      image: gulabJamun,
      name: 'Gulab Jamun',
      numberOfOrders: 310,
    },
    {
      id: 9,
      image: pooriSabji,
      name: 'Poori Sabji',
      numberOfOrders: 140,
    },
    {
      id: 10,
      image: roganJosh,
      name: 'Rogan Josh',
      numberOfOrders: 160,
    },
  ];


export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 },
    { id: 16, name: "Table 16", status: "Available", initial: "ZY", seats: 4 },
    { id: 17, name: "Table 17", status: "Booked", initial: "FD", seats: 5 },
    { id: 18, name: "Table 18", status: "Available", initial: "VK", seats: 3 },
    { id: 19, name: "Table 19", status: "Booked", initial: "NM", seats: 6 },
    { id: 20, name: "Table 20", status: "Available", initial: "XJ", seats: 4 },
    { id: 21, name: "Table 21", status: "Booked", initial: "OP", seats: 2 },
    { id: 22, name: "Table 22", status: "Available", initial: "WE", seats: 4 },
    { id: 23, name: "Table 23", status: "Booked", initial: "YU", seats: 5 },
    { id: 24, name: "Table 24", status: "Available", initial: "AZ", seats: 3 },
    { id: 25, name: "Table 25", status: "Booked", initial: "BN", seats: 6 },
    { id: 26, name: "Table 26", status: "Available", initial: "CM", seats: 4 },
    { id: 27, name: "Table 27", status: "Booked", initial: "DF", seats: 5 },
    { id: 28, name: "Table 28", status: "Available", initial: "GH", seats: 2 },
    { id: 29, name: "Table 29", status: "Booked", initial: "JK", seats: 4 },
    { id: 30, name: "Table 30", status: "Available", initial: "LM", seats: 3 },
    { id: 31, name: "Table 31", status: "Booked", initial: "NP", seats: 6 },
    { id: 32, name: "Table 32", status: "Available", initial: "QR", seats: 4 },
    { id: 33, name: "Table 33", status: "Booked", initial: "ST", seats: 5 },
    { id: 34, name: "Table 34", status: "Available", initial: "UV", seats: 3 },
    { id: 35, name: "Table 35", status: "Booked", initial: "WX", seats: 6 },
    { id: 36, name: "Table 36", status: "Available", initial: "YZ", seats: 4 },
    { id: 37, name: "Table 37", status: "Booked", initial: "AB", seats: 5 },
    { id: 38, name: "Table 38", status: "Available", initial: "CD", seats: 2 },
    { id: 39, name: "Table 39", status: "Booked", initial: "EF", seats: 4 },
    { id: 40, name: "Table 40", status: "Available", initial: "GH", seats: 3 },
  ];
  
export const startersItem = [
    {
      id: 1,
      name: "Paneer Tikka",
      price: 250,
      category: "Vegetarian"
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: 300,
      category: "Non-Vegetarian"
    },
    {
      id: 3,
      name: "Tandoori Chicken",
      price: 350,
      category: "Non-Vegetarian"
    },
    {
      id: 4,
      name: "Samosa",
      price: 100,
      category: "Vegetarian"
    },
    {
      id: 5,
      name: "Aloo Tikki",
      price: 120,
      category: "Vegetarian"
    },
    {
      id: 6,
      name: "Hara Bhara Kebab",
      price: 220,
      category: "Vegetarian"
    }
  ];
  
export const mainCourse = [
  {
    id: 1,
    name: "Butter Chicken",
    price: 400,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 450,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: 180,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Kadai Paneer",
    price: 300,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Rogan Josh",
    price: 500,
    category: "Non-Vegetarian"
  }
];

export const beverages = [
  {
    id: 1,
    name: "Masala Chai",
    price: 50,
    category: "Hot"
  },
  {
    id: 2,
    name: "Lemon Soda",
    price: 80,
    category: "Cold"
  },
  {
    id: 3,
    name: "Mango Lassi",
    price: 120,
    category: "Cold"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: 150,
    category: "Cold"
  },
  {
    id: 5,
    name: "Fresh Lime Water",
    price: 60,
    category: "Cold"
  },
  {
    id: 6,
    name: "Iced Tea",
    price: 100,
    category: "Cold"
  }
];

export const soups = [
  {
    id: 1,
    name: "Tomato Soup",
    price: 120,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Sweet Corn Soup",
    price: 130,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Hot & Sour Soup",
    price: 140,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Clear Soup",
    price: 160,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Mushroom Soup",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Lemon Coriander Soup",
    price: 110,
    category: "Vegetarian"
  }
];

export const desserts = [
  {
    id: 1,
    name: "Gulab Jamun",
    price: 100,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Kulfi",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 250,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Ras Malai",
    price: 180,
    category: "Vegetarian"
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 350,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Veg Supreme Pizza",
    price: 400,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    price: 450,
    category: "Non-Vegetarian"
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 200,
    category: "Alcoholic"
  },
  {
    id: 2,
    name: "Whiskey",
    price: 500,
    category: "Alcoholic"
  },
  {
    id: 3,
    name: "Vodka",
    price: 450,
    category: "Alcoholic"
  },
  {
    id: 4,
    name: "Rum",
    price: 350,
    category: "Alcoholic"
  },
  {
    id: 5,
    name: "Tequila",
    price: 600,
    category: "Alcoholic"
  },
  {
    id: 6,
    name: "Cocktail",
    price: 400,
    category: "Alcoholic"
  }
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 200,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 250,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Fruit Salad",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Salad",
    price: 300,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Tuna Salad",
    price: 350,
  
  }
];


export const menus = [
  { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
  { id: 4, name: "Soups", bgColor: "#735f32" ,icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430" ,icon: "🍕", items: pizzas },
  { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e" ,icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Salads", bgColor: "#5b45b0" ,icon: "🥗", items: salads }
]


export const orders = [
  { id: 1, customer: 'Nganga Njuguna', status: 'ready', items: 8, table: 3, amount: 250.00, date: 'January 18, 2025 • 08:32 PM' },
  { id: 2, customer: 'John Doe', status: 'in-progress', items: 5, table: 2, amount: 150.00, date: 'January 19, 2025 • 01:12 PM' },
  { id: 3, customer: 'Alice Smith', status: 'completed', items: 3, table: 1, amount: 80.00, date: 'January 20, 2025 • 03:05 PM' },
  { id: 4, customer: 'Bob Johnson', status: 'ready', items: 6, table: 4, amount: 200.00, date: 'January 21, 2025 • 06:45 PM' },
  { id: 5, customer: 'Emma Davis', status: 'in-progress', items: 4, table: 5, amount: 120.00, date: 'January 22, 2025 • 02:30 PM' },
  { id: 6, customer: 'Chris Lee', status: 'completed', items: 7, table: 6, amount: 210.00, date: 'January 23, 2025 • 05:00 PM' },
  { id: 7, customer: 'Olivia Brown', status: 'ready', items: 2, table: 7, amount: 60.00, date: 'January 24, 2025 • 12:00 PM' },
  { id: 8, customer: 'Daniel Harris', status: 'in-progress', items: 9, table: 8, amount: 270.00, date: 'January 25, 2025 • 09:15 AM' },
  { id: 9, customer: 'Sophia Williams', status: 'completed', items: 1, table: 9, amount: 30.00, date: 'January 26, 2025 • 04:25 PM' },
  { id: 10, customer: 'Jackson Clark', status: 'ready', items: 3, table: 10, amount: 90.00, date: 'January 27, 2025 • 07:30 PM' },
  { id: 11, customer: 'Ethan Martinez', status: 'in-progress', items: 5, table: 11, amount: 150.00, date: 'January 28, 2025 • 03:15 PM' },
  { id: 12, customer: 'Mia Wilson', status: 'completed', items: 8, table: 12, amount: 240.00, date: 'January 29, 2025 • 11:45 AM' },
  { id: 13, customer: 'James Garcia', status: 'ready', items: 6, table: 13, amount: 180.00, date: 'January 30, 2025 • 10:20 AM' },
  { id: 14, customer: 'Lily Young', status: 'in-progress', items: 4, table: 14, amount: 120.00, date: 'February 1, 2025 • 02:00 PM' },
  { id: 15, customer: 'Noah Walker', status: 'completed', items: 7, table: 15, amount: 210.00, date: 'February 2, 2025 • 06:00 PM' },
  { id: 16, customer: 'Ava Allen', status: 'ready', items: 9, table: 16, amount: 270.00, date: 'February 3, 2025 • 01:30 PM' },
  { id: 17, customer: 'Oliver King', status: 'in-progress', items: 5, table: 17, amount: 150.00, date: 'February 4, 2025 • 09:10 AM' },
  { id: 18, customer: 'Charlotte Scott', status: 'completed', items: 3, table: 18, amount: 90.00, date: 'February 5, 2025 • 04:15 PM' },
  { id: 19, customer: 'Amelia Green', status: 'ready', items: 6, table: 19, amount: 180.00, date: 'February 6, 2025 • 05:45 PM' },
  { id: 20, customer: 'Benjamin Adams', status: 'in-progress', items: 4, table: 20, amount: 120.00, date: 'February 7, 2025 • 10:10 AM' },
  { id: 21, customer: 'Eleanor Nelson', status: 'completed', items: 5, table: 21, amount: 150.00, date: 'February 8, 2025 • 12:30 PM' },
  { id: 22, customer: 'Samuel Carter', status: 'ready', items: 2, table: 22, amount: 60.00, date: 'February 9, 2025 • 03:40 PM' },
  { id: 23, customer: 'Harper Murphy', status: 'in-progress', items: 3, table: 23, amount: 90.00, date: 'February 10, 2025 • 08:00 PM' },
  { id: 24, customer: 'Jack Turner', status: 'completed', items: 8, table: 24, amount: 240.00, date: 'February 11, 2025 • 07:00 AM' },
  { id: 25, customer: 'Zoe Evans', status: 'ready', items: 7, table: 25, amount: 210.00, date: 'February 12, 2025 • 10:20 PM' },
  { id: 26, customer: 'Daniel Thomas', status: 'in-progress', items: 6, table: 26, amount: 180.00, date: 'February 13, 2025 • 01:05 PM' },
  { id: 27, customer: 'Liam Harris', status: 'completed', items: 4, table: 27, amount: 120.00, date: 'February 14, 2025 • 03:00 PM' },
  { id: 28, customer: 'Evelyn Wilson', status: 'ready', items: 9, table: 28, amount: 270.00, date: 'February 15, 2025 • 06:10 AM' },
  { id: 29, customer: 'Lucas Young', status: 'in-progress', items: 5, table: 29, amount: 150.00, date: 'February 16, 2025 • 11:30 AM' },
  { id: 30, customer: 'Chloe White', status: 'completed', items: 7, table: 30, amount: 210.00, date: 'February 17, 2025 • 07:50 PM' },
  { id: 31, customer: 'Mason King', status: 'ready', items: 8, table: 31, amount: 240.00, date: 'February 18, 2025 • 12:40 PM' },
  { id: 32, customer: 'Scarlett Lee', status: 'in-progress', items: 3, table: 32, amount: 90.00, date: 'February 19, 202en5 • 04:50 PM' },
  { id: 33, customer: 'Jacob Perez', status: 'completed', items: 5, table: 33, amount: 150.00, date: 'February 20, 2025 • 09:30 AM' },
  { id: 34, customer: 'Amos Walker', status: 'ready', items: 4, table: 34, amount: 120.00, date: 'February 21, 2025 • 02:15 PM' },
  { id: 35, customer: 'Ivy Martinez', status: 'in-progress', items: 6, table: 35, amount: 180.00, date: 'February 22, 2025 • 01:00 PM' },
  { id: 36, customer: 'William Scott', status: 'completed', items: 7, table: 36, amount: 210.00, date: 'February 23, 2025 • 04:30 PM' },
  { id: 37, customer: 'Victoria Thomas', status: 'ready', items: 5, table: 37, amount: 150.00, date: 'February 24, 2025 • 08:50 AM' },
  { id: 38, customer: 'David Evans', status: 'in-progress', items: 4, table: 38, amount: 120.00, date: 'February 25, 2025 • 07:40 PM' },
  { id: 39, customer: 'Ella Brown', status: 'completed', items: 8, table: 39, amount: 240.00, date: 'February 26, 2025 • 03:25 PM' },
  { id: 40, customer: 'Lily Green', status: 'ready', items: 6, table: 40, amount: 180.00, date: 'February 27, 2025 • 10:00 PM' }
];


export const rooms = [
  { id: 1, name: "Room 1", status: "Booked", initial: "AM", packs: 4 },
  { id: 2, name: "Room 2", status: "Available", initial: "MB", packs: 6 },
  { id: 3, name: "Room 3", status: "vc", initial: "JS", packs: 2 },
  { id: 4, name: "Room 4", status: "vnr", initial: "HR", packs: 4 },
  { id: 5, name: "Room 5", status: "Booked", initial: "PL", packs: 3 },
  { id: 6, name: "Room 6", status: "vc", initial: "RT", packs: 4 },
  { id: 7, name: "Room 7", status: "oo", initial: "LC", packs: 5 },
  { id: 8, name: "Room 8", status: "vnr", initial: "DP", packs: 5 },
  { id: 9, name: "Room 9", status: "Booked", initial: "NK", packs: 6 },
  { id: 10, name: "Room 10", status: "vc", initial: "SB", packs: 6 },
  { id: 11, name: "Room 11", status: "vnr", initial: "GT", packs: 4 },
  { id: 12, name: "Room 12", status: "oo", initial: "JS", packs: 6 },
  { id: 13, name: "Room 13", status: "Booked", initial: "EK", packs: 2 },
  { id: 14, name: "Room 14", status: "vnr", initial: "QN", packs: 6 },
  { id: 15, name: "Room 15", status: "oo", initial: "TW", packs: 3 },
  { id: 16, name: "Room 16", status: "vc", initial: "ZY", packs: 4 },
  { id: 17, name: "Room 17", status: "Booked", initial: "FD", packs: 5 },
  { id: 18, name: "Room 18", status: "vnr", initial: "VK", packs: 3 },
  { id: 19, name: "Room 19", status: "vc", initial: "NM", packs: 6 },
  { id: 20, name: "Room 20", status: "oo", initial: "XJ", packs: 4 },
  { id: 21, name: "Room 21", status: "Booked", initial: "OP", packs: 2 },
  { id: 22, name: "Room 22", status: "Available", initial: "WE", packs: 4 },
  { id: 23, name: "Room 23", status: "vc", initial: "YU", packs: 5 },
  { id: 24, name: "Room 24", status: "vnr", initial: "AZ", packs: 3 },
  { id: 25, name: "Room 25", status: "oo", initial: "BN", packs: 6 },
  { id: 26, name: "Room 26", status: "Available", initial: "CM", packs: 4 },
  { id: 27, name: "Room 27", status: "Booked", initial: "DF", packs: 5 },
  { id: 28, name: "Room 28", status: "vc", initial: "GH", packs: 2 },
  { id: 29, name: "Room 29", status: "oo", initial: "JK", packs: 4 },
  { id: 30, name: "Room 30", status: "Available", initial: "LM", packs: 3 },
  { id: 31, name: "Room 31", status: "Booked", initial: "NP", packs: 6 },
  { id: 32, name: "Room 32", status: "vnr", initial: "QR", packs: 4 },
  { id: 33, name: "Room 33", status: "oo", initial: "ST", packs: 5 },
  { id: 34, name: "Room 34", status: "Available", initial: "UV", packs: 3 },
  { id: 35, name: "Room 35", status: "vnr", initial: "WX", packs: 6 },
  { id: 36, name: "Room 36", status: "oo", initial: "YZ", packs: 4 },
  { id: 37, name: "Room 37", status: "Booked", initial: "AB", packs: 5 },
  { id: 38, name: "Room 38", status: "vc", initial: "CD", packs: 2 },
  { id: 39, name: "Room 39", status: "oo", initial: "EF", packs: 4 },
  { id: 40, name: "Room 40", status: "vnr", initial: "GH", packs: 3 },
];