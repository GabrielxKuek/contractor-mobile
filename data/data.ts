export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: string;
  nickname: string;
  image: string | null;
}

export interface Contractor {
  id: string;
  image: string;
  name: string;
  title: string;
  rate: string;
  rateUnit: string;
  location: string;
  postedDate: string;
  user: User;
  category: Category;
  tags: Tag[];
  savedCount: number;
  rating: number;
  reviewCount: number;
  description: string;
  yearsExp: number;
  completedJobs: number;
}

export interface Message {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  contextTitle: string;
}

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Plumbing' },
  { id: 2, name: 'Electrical' },
  { id: 3, name: 'Painting' },
  { id: 4, name: 'Carpentry' },
  { id: 5, name: 'Cleaning' },
  { id: 6, name: 'Landscaping' },
  { id: 7, name: 'Renovation' },
  { id: 8, name: 'Air-Con' },
];

export const CONTRACTORS: Contractor[] = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/contractor1/400/300',
    name: 'Ahmad Plumbing Services',
    title: 'Licensed Plumber',
    rate: '$80',
    rateUnit: '/hr',
    location: 'Tampines',
    postedDate: '2 hours ago',
    user: { id: 'u1', nickname: 'Ahmad R.', image: null },
    category: { id: 1, name: 'Plumbing' },
    tags: [
      { id: 1, name: 'Emergency' },
      { id: 2, name: 'HDB' },
      { id: 3, name: 'Licensed' },
    ],
    savedCount: 34,
    rating: 4.9,
    reviewCount: 87,
    description: 'Over 15 years of experience in residential and commercial plumbing. Specializing in pipe repair, installation, and emergency leak fixes. BCA licensed.',
    yearsExp: 15,
    completedJobs: 420,
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/contractor2/400/300',
    name: 'BrightSpark Electrical',
    title: 'Certified Electrician',
    rate: '$90',
    rateUnit: '/hr',
    location: 'Jurong',
    postedDate: '4 hours ago',
    user: { id: 'u2', nickname: 'David L.', image: null },
    category: { id: 2, name: 'Electrical' },
    tags: [
      { id: 4, name: 'EMA Licensed' },
      { id: 5, name: 'Commercial' },
    ],
    savedCount: 28,
    rating: 4.8,
    reviewCount: 63,
    description: 'Full range of electrical services from wiring to power point installation. EMA licensed electrician with specialization in smart home setups.',
    yearsExp: 12,
    completedJobs: 310,
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/contractor3/400/300',
    name: 'Perfect Coat Painting',
    title: 'Professional Painter',
    rate: '$60',
    rateUnit: '/hr',
    location: 'Bishan',
    postedDate: '1 day ago',
    user: { id: 'u3', nickname: 'Jason T.', image: null },
    category: { id: 3, name: 'Painting' },
    tags: [
      { id: 6, name: 'Interior' },
      { id: 7, name: 'Exterior' },
      { id: 8, name: 'Condo' },
    ],
    savedCount: 19,
    rating: 4.7,
    reviewCount: 45,
    description: 'Specializing in HDB and condo painting. Clean workmanship with premium Nippon and Dulux paints. Free color consultation included.',
    yearsExp: 8,
    completedJobs: 250,
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/contractor4/400/300',
    name: 'CraftWood Carpentry',
    title: 'Custom Carpenter',
    rate: '$100',
    rateUnit: '/hr',
    location: 'Clementi',
    postedDate: '5 hours ago',
    user: { id: 'u4', nickname: 'Michael W.', image: null },
    category: { id: 4, name: 'Carpentry' },
    tags: [
      { id: 9, name: 'Custom' },
      { id: 10, name: 'Built-in' },
    ],
    savedCount: 41,
    rating: 5.0,
    reviewCount: 32,
    description: 'Custom-built furniture and carpentry solutions. Wardrobes, shelving, kitchen cabinets, and TV consoles. 3D rendering provided before work begins.',
    yearsExp: 10,
    completedJobs: 180,
  },
  {
    id: '5',
    image: 'https://picsum.photos/seed/contractor5/400/300',
    name: 'Sparkle Clean Pro',
    title: 'Cleaning Specialist',
    rate: '$35',
    rateUnit: '/hr',
    location: 'Orchard',
    postedDate: '3 hours ago',
    user: { id: 'u5', nickname: 'Sarah K.', image: null },
    category: { id: 5, name: 'Cleaning' },
    tags: [
      { id: 11, name: 'Deep Clean' },
      { id: 12, name: 'Move-in' },
      { id: 13, name: 'Office' },
      { id: 14, name: 'Weekly' },
    ],
    savedCount: 56,
    rating: 4.6,
    reviewCount: 124,
    description: 'Professional cleaning for homes and offices. Deep cleaning, move-in/move-out, post-renovation cleanup. Eco-friendly products used.',
    yearsExp: 6,
    completedJobs: 890,
  },
  {
    id: '6',
    image: 'https://picsum.photos/seed/contractor6/400/300',
    name: 'GreenScape Solutions',
    title: 'Landscape Designer',
    rate: '$75',
    rateUnit: '/hr',
    location: 'East Coast',
    postedDate: '1 day ago',
    user: { id: 'u6', nickname: 'Kevin C.', image: null },
    category: { id: 6, name: 'Landscaping' },
    tags: [
      { id: 15, name: 'Garden' },
      { id: 16, name: 'Maintenance' },
    ],
    savedCount: 13,
    rating: 4.5,
    reviewCount: 28,
    description: 'Full landscaping services including garden design, turfing, planting, and ongoing maintenance. Specializing in tropical gardens and rooftop greenery.',
    yearsExp: 9,
    completedJobs: 145,
  },
  {
    id: '7',
    image: 'https://picsum.photos/seed/contractor7/400/300',
    name: 'RenovateSG',
    title: 'Renovation Contractor',
    rate: '$120',
    rateUnit: '/hr',
    location: 'Ang Mo Kio',
    postedDate: '6 hours ago',
    user: { id: 'u7', nickname: 'Raymond N.', image: null },
    category: { id: 7, name: 'Renovation' },
    tags: [
      { id: 17, name: 'Full Reno' },
      { id: 18, name: 'BTO' },
      { id: 19, name: 'Resale' },
    ],
    savedCount: 72,
    rating: 4.8,
    reviewCount: 96,
    description: 'End-to-end renovation for BTO, resale, and condo. In-house ID team, transparent pricing with no hidden costs. HDB and BCA registered.',
    yearsExp: 18,
    completedJobs: 520,
  },
  {
    id: '8',
    image: 'https://picsum.photos/seed/contractor8/400/300',
    name: 'CoolBreeze Aircon',
    title: 'Aircon Technician',
    rate: '$50',
    rateUnit: '/unit',
    location: 'Toa Payoh',
    postedDate: '8 hours ago',
    user: { id: 'u8', nickname: 'William T.', image: null },
    category: { id: 8, name: 'Air-Con' },
    tags: [
      { id: 20, name: 'Servicing' },
      { id: 21, name: 'Chemical Wash' },
      { id: 22, name: 'Install' },
    ],
    savedCount: 45,
    rating: 4.7,
    reviewCount: 156,
    description: 'Aircon servicing, chemical wash, gas top-up, and new unit installation. Same-day service available. All major brands supported.',
    yearsExp: 11,
    completedJobs: 1200,
  },
  {
    id: '9',
    image: 'https://picsum.photos/seed/contractor9/400/300',
    name: 'HandyFix SG',
    title: 'General Handyman',
    rate: '$55',
    rateUnit: '/hr',
    location: 'Pasir Ris',
    postedDate: '12 hours ago',
    user: { id: 'u9', nickname: 'Tony L.', image: null },
    category: { id: 1, name: 'Plumbing' },
    tags: [
      { id: 23, name: 'Handyman' },
      { id: 24, name: 'Repairs' },
      { id: 25, name: 'Assembly' },
    ],
    savedCount: 31,
    rating: 4.4,
    reviewCount: 72,
    description: 'General handyman services. Furniture assembly, wall mounting, door repair, minor plumbing and electrical works. Fast and reliable.',
    yearsExp: 7,
    completedJobs: 640,
  },
  {
    id: '10',
    image: 'https://picsum.photos/seed/contractor10/400/300',
    name: 'ProTile Works',
    title: 'Tiling Specialist',
    rate: '$85',
    rateUnit: '/hr',
    location: 'Woodlands',
    postedDate: '2 days ago',
    user: { id: 'u10', nickname: 'Ravi M.', image: null },
    category: { id: 7, name: 'Renovation' },
    tags: [
      { id: 26, name: 'Tiling' },
      { id: 27, name: 'Bathroom' },
    ],
    savedCount: 17,
    rating: 4.6,
    reviewCount: 41,
    description: 'Expert tiling services for floors, walls, and bathrooms. Overlay and hacking available. Precise workmanship with waterproofing included.',
    yearsExp: 14,
    completedJobs: 330,
  },
  {
    id: '11',
    image: 'https://picsum.photos/seed/contractor11/400/300',
    name: 'SmartHome Install',
    title: 'Smart Home Installer',
    rate: '$95',
    rateUnit: '/hr',
    location: 'Marina Bay',
    postedDate: '1 day ago',
    user: { id: 'u11', nickname: 'Daniel H.', image: null },
    category: { id: 2, name: 'Electrical' },
    tags: [
      { id: 28, name: 'Smart Home' },
      { id: 29, name: 'IoT' },
      { id: 30, name: 'Automation' },
    ],
    savedCount: 23,
    rating: 4.9,
    reviewCount: 19,
    description: 'Smart home setup and automation. Smart lighting, automated blinds, security systems, and whole-home integration with Google/Alexa.',
    yearsExp: 5,
    completedJobs: 95,
  },
  {
    id: '12',
    image: 'https://picsum.photos/seed/contractor12/400/300',
    name: 'WaterSeal Pro',
    title: 'Waterproofing Expert',
    rate: '$70',
    rateUnit: '/hr',
    location: 'Bukit Timah',
    postedDate: '3 days ago',
    user: { id: 'u12', nickname: 'Alex G.', image: null },
    category: { id: 7, name: 'Renovation' },
    tags: [
      { id: 31, name: 'Waterproof' },
      { id: 32, name: 'Leak Repair' },
    ],
    savedCount: 15,
    rating: 4.5,
    reviewCount: 37,
    description: 'Bathroom and roof waterproofing specialist. PUB-approved methods. Warranty provided for all waterproofing works. Free inspection.',
    yearsExp: 13,
    completedJobs: 280,
  },
];

export const MESSAGES: Message[] = [
  {
    id: 'm1',
    user: { id: 'u1', nickname: 'Ahmad R.', image: null },
    lastMessage: 'Hi! I can come by tomorrow morning to check the leak.',
    timestamp: '2 min ago',
    unreadCount: 2,
    contextTitle: 'Plumbing Job',
  },
  {
    id: 'm2',
    user: { id: 'u4', nickname: 'Michael W.', image: null },
    lastMessage: 'The 3D rendering for your wardrobe is ready. Take a look!',
    timestamp: '15 min ago',
    unreadCount: 1,
    contextTitle: 'Custom Wardrobe',
  },
  {
    id: 'm3',
    user: { id: 'u7', nickname: 'Raymond N.', image: null },
    lastMessage: 'Quotation has been updated. Let me know if you have questions.',
    timestamp: '1 hour ago',
    unreadCount: 0,
    contextTitle: 'BTO Renovation',
  },
  {
    id: 'm4',
    user: { id: 'u8', nickname: 'William T.', image: null },
    lastMessage: 'All 4 units serviced. Chemical wash done for the master bedroom unit.',
    timestamp: '3 hours ago',
    unreadCount: 0,
    contextTitle: 'Aircon Servicing',
  },
  {
    id: 'm5',
    user: { id: 'u5', nickname: 'Sarah K.', image: null },
    lastMessage: 'Confirmed for this Saturday 9am. See you then!',
    timestamp: 'Yesterday',
    unreadCount: 3,
    contextTitle: 'Deep Cleaning',
  },
  {
    id: 'm6',
    user: { id: 'u2', nickname: 'David L.', image: null },
    lastMessage: 'The new power points have been installed. Please test them out.',
    timestamp: 'Yesterday',
    unreadCount: 0,
    contextTitle: 'Electrical Works',
  },
];
