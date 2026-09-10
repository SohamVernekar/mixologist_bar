// Asset Imports
import heroImg from '../assets/photos/HERO.jpg';
import barSetupImg from '../assets/photos/Event Bar Setup.jpg';

import cocktailEspresso from '../assets/photos/SIGNATURE COCKTAILS/Espresso-style cocktail.jpg';
import cocktailBolder from '../assets/photos/SIGNATURE COCKTAILS/SOMETHING BOLDER.jpg';
import cocktailClassics from '../assets/photos/SIGNATURE COCKTAILS/THE CLASSICS, REIMAGINED.jpg';

import spikedCaviarsImg from '../assets/photos/MORE THAN A BAR/Spiked Caviars.jpg';
import jelloShotsImg from '../assets/photos/MORE THAN A BAR/jello shots.jpg';

import outdoorCreateImg from '../assets/photos/Destination  Outdoor Events/WHAT WE CREATE.jpg';
import outdoorBeachImg from '../assets/photos/Destination  Outdoor Events/outdoor.jpg';

import videoTrick1 from '../assets/photos/Live Mixology videos/trick 1.mp4';
import videoTrick2 from '../assets/photos/Live Mixology videos/trick 2.mp4';

import gallery1 from '../assets/photos/gallery/1.jpg';
import gallery2 from '../assets/photos/gallery/2.jpg';

export const ASSETS = {
  hero: heroImg,
  barSetup: barSetupImg,
  cocktails: {
    espresso: cocktailEspresso,
    bolder: cocktailBolder,
    classics: cocktailClassics,
  },
  experiences: {
    caviars: spikedCaviarsImg,
    jello: jelloShotsImg,
  },
  destination: {
    create: outdoorCreateImg,
    outdoor: outdoorBeachImg,
  },
  videoBackground: videoTrick1, // Muted background video reel
  videoFeatured: videoTrick2,   // Main live mixology reel with audio
  gallery: [
    {
      id: 'g-1',
      title: 'Theatrical Mixology & Live Pour',
      category: 'Live Bar',
      src: gallery1,
      aspectRatio: '3/4',
    },
    {
      id: 'g-2',
      title: 'Signature Cocktail Styling & Detail',
      category: 'Signature Drinks',
      src: gallery2,
      aspectRatio: '4/3',
    },
    {
      id: 'g-3',
      title: 'Complete Event Bar Architecture',
      category: 'Bar Setup',
      src: barSetupImg,
      aspectRatio: '3/4',
    },
    {
      id: 'g-4',
      title: 'Bespoke Spirit Infusion & Garnish',
      category: 'Barcraft',
      src: cocktailBolder,
      aspectRatio: '3/4',
    },
    {
      id: 'g-5',
      title: 'Spiked Cocktail Caviars',
      category: 'Sensory',
      src: spikedCaviarsImg,
      aspectRatio: '4/3',
    },
    {
      id: 'g-6',
      title: 'Artisan Layered Jello Creations',
      category: 'Interactive',
      src: jelloShotsImg,
      aspectRatio: '4/3',
    },
    {
      id: 'g-7',
      title: 'Destination Beachside Bar Setup',
      category: 'Outdoor Events',
      src: outdoorBeachImg,
      aspectRatio: '16/9',
    },
    {
      id: 'g-8',
      title: 'Outdoor Mixology in Action',
      category: 'Destination',
      src: outdoorCreateImg,
      aspectRatio: '3/4',
    },
  ],
};

export const SITE_INFO = {
  name: 'MIXOLOGIST BARZ',
  tagline: "We don't just serve drinks. We create experiences.",
  heroEyebrow: 'PREMIUM MIXOLOGY • BESPOKE EVENTS • LUXURY HOSPITALITY',
  heroHeadline: 'CRAFTED TO IMPRESS.\nSERVED TO REMEMBER.',
  heroDescription:
    'Bespoke cocktails, elevated bar experiences and professional mixology crafted for celebrations worth remembering.',
  contactEmail: 'Mixologistbarz@gmail.com',
  year: 2026,
};

export const SERVICES_LIST = [
  {
    id: 'bar-setup',
    number: '01',
    title: 'EVENT BAR SETUPS',
    description:
      'Beautifully designed and professionally equipped bars tailored to the atmosphere, aesthetic, and flow of your event.',
    image: barSetupImg,
    aspectRatio: '3/4',
    highlights: ['Custom Bar Facades', 'Premium Ice & Crystal Glassware', 'Complete Station Barcraft'],
  },
  {
    id: 'signature-cocktails',
    number: '02',
    title: 'SIGNATURE COCKTAILS',
    description:
      'Custom cocktail menus curated around the event theme, guest preferences, and refined flavor balances.',
    image: cocktailClassics,
    aspectRatio: '3/4',
    highlights: ['Artisanal Infusions', 'Hand-crafted Cordials', 'Bespoke Menu Design'],
  },
  {
    id: 'live-mixology',
    number: '03',
    title: 'LIVE MIXOLOGY & FLAIR',
    description:
      'Interactive preparation, theatrical presentation, and skilled bartending that turns cocktail crafting into high entertainment.',
    image: heroImg,
    aspectRatio: '3/4',
    highlights: ['Theatrical Pours', 'Smoked Botanical Infusions', 'Interactive Guest Engagement'],
  },
  {
    id: 'interactive-experiences',
    number: '04',
    title: 'INTERACTIVE EXPERIENCES',
    description:
      'Jello shots, spiked caviars, and creative culinary additions designed to leave a lasting impression on your guests.',
    image: spikedCaviarsImg,
    aspectRatio: '4/3',
    highlights: ['Spiked Cocktail Caviars', 'Artisan Jello Shots', 'Sensory Garnish Stations'],
  },
  {
    id: 'destination-events',
    number: '05',
    title: 'DESTINATION & OUTDOOR',
    description:
      'Bringing the complete luxury bar experience to weddings, resorts, beachfronts, and remote celebrations globally.',
    image: outdoorBeachImg,
    aspectRatio: '16/9',
    highlights: ['All-Terrain Setups', 'Mobile Bar Logistics', 'Bespoke Destination Themes'],
  },
];

export const SIGNATURE_COCKTAILS_LIST = [
  {
    id: 'c-1',
    number: '01',
    title: 'THE CLASSICS, REIMAGINED',
    subtitle: 'A signature creation crafted for the moment.',
    image: cocktailClassics,
    vibe: 'Timeless Elegance',
    note: 'Balanced with precision, botanical nuances, and crystal-clear ice.',
  },
  {
    id: 'c-2',
    number: '02',
    title: 'SOMETHING BOLDER',
    subtitle: 'A signature creation crafted for the moment.',
    image: cocktailBolder,
    vibe: 'Intense & Smoky',
    note: 'Bold spirit-forward character elevated with bespoke aromatic garnishes.',
  },
  {
    id: 'c-3',
    number: '03',
    title: 'ESPRESSO-STYLE CREATION',
    subtitle: 'A signature creation crafted for the moment.',
    image: cocktailEspresso,
    vibe: 'Velvety & Rich',
    note: 'Silky crema, deep roasted notes, and an indulgent, lingering finish.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'TELL US ABOUT YOUR EVENT',
    description: 'Share your date, location, guest count and occasion through our dedicated enquiry system.',
  },
  {
    number: '02',
    title: 'CRAFT THE EXPERIENCE',
    description: 'We understand your unique requirements and build the right cocktail menu, bar styling, and presentation.',
  },
  {
    number: '03',
    title: 'BRING IT TO LIFE',
    description: 'Our professional team arrives, equips the bar, and delivers an unforgettable, seamless event service.',
  },
];

export const EVENT_TYPES = [
  { title: 'Luxury Weddings', desc: 'Regal bar setups and high-touch hospitality for grand celebrations.' },
  { title: 'Engagements & Soirées', desc: 'Intimate, elevated mixology customized for romantic milestones.' },
  { title: 'Private Parties', desc: 'Exclusive home, villa, and penthouse bar experiences.' },
  { title: 'Milestone Birthdays', desc: 'Playful interactive mixology, flair bartending, and signature drinks.' },
  { title: 'Corporate Galas', desc: 'Sleek, high-capacity bar execution for luxury brand launches & summits.' },
  { title: 'Destination Events', desc: 'Flawless bar setups on beaches, palaces, vineyards, and private islands.' },
];

export const FORM_OPTIONS = {
  cities: [
    'Mumbai',
    'Delhi NCR',
    'Bengaluru',
    'Goa',
    'Jaipur',
    'Udaipur',
    'Hyderabad',
    'Kolkata',
    'Pune',
    'Chennai',
    'Chandigarh',
    'Ahmedabad',
    'Destination / Other City',
  ],
  guestCounts: [
    'Under 50',
    '50–100',
    '100–200',
    '200–500',
    '500+',
    'Not sure yet',
  ],
  occasions: [
    'Wedding',
    'Engagement',
    'Birthday',
    'Anniversary',
    'Corporate Event',
    'Private Party',
    'Destination Event',
    'Other',
  ],
  venues: [
    'Hotel',
    'Resort',
    'Banquet Hall',
    'Villa',
    'Beach',
    'Restaurant',
    'Private Residence',
    'Outdoor Venue',
    'Other',
  ],
};
