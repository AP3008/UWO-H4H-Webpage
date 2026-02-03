import type {
  NavLink,
  StatItem,
  NewsItem,
  Event,
  PhotoItem,
  TeamMember,
  ValueItem,
  TimelineItem,
  CarouselImage,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
];

export const EXTERNAL_LINKS = {
  instagram: "https://www.instagram.com/h4hwesternuniversity/",
  membership:
    "https://westernusc.store/product/habitat-for-humanity-western/",
} as const;

export const STATS: StatItem[] = [
  { value: "500+", label: "Volunteer Hours", icon: "Clock" },
  { value: "50+", label: "Active Members", icon: "Users" },
  { value: "10+", label: "Builds Completed", icon: "Hammer" },
  { value: "5", label: "Years at Western", icon: "Calendar" },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title: "Spring Build Day Recap",
    excerpt:
      "Our volunteers came together for an incredible day of building and community impact in London, Ontario.",
    date: "2025-03-15",
    imageUrl: "/images/news-1.jpg",
    slug: "spring-build-day-recap",
  },
  {
    id: "2",
    title: "Annual Fundraiser Success",
    excerpt:
      "Thanks to our generous donors and dedicated members, we raised over $5,000 for affordable housing initiatives.",
    date: "2025-02-20",
    imageUrl: "/images/news-2.jpg",
    slug: "annual-fundraiser-success",
  },
  {
    id: "3",
    title: "New Partnership Announcement",
    excerpt:
      "We are excited to announce a new partnership with local businesses to expand our reach in the London community.",
    date: "2025-01-10",
    imageUrl: "/images/news-3.jpg",
    slug: "new-partnership-announcement",
  },
];

export const UPCOMING_EVENTS: Event[] = [];

export const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    id: "1",
    src: "/images/carousel/slide-1.jpg",
    alt: "Volunteers at a build site",
    caption: "Building together for our community",
  },
  {
    id: "2",
    src: "/images/carousel/slide-2.jpg",
    alt: "Team photo after a successful build day",
    caption: "Our incredible team of volunteers",
  },
  {
    id: "3",
    src: "/images/carousel/slide-3.jpg",
    alt: "Habitat for Humanity fundraiser event",
    caption: "Raising funds for affordable housing",
  },
  {
    id: "4",
    src: "/images/carousel/slide-4.jpg",
    alt: "Students volunteering during orientation week",
    caption: "Welcoming new members every year",
  },
  {
    id: "5",
    src: "/images/carousel/slide-5.jpg",
    alt: "Community members at a house dedication",
    caption: "Celebrating a completed home",
  },
  {
    id: "6",
    src: "/images/carousel/slide-6.jpg",
    alt: "Painting day with volunteers",
    caption: "Every brushstroke makes a difference",
  },
  {
    id: "7",
    src: "/images/carousel/slide-7.jpg",
    alt: "Club social event",
    caption: "Building friendships along the way",
  },
];

export const PHOTO_GALLERY: PhotoItem[] = [
  {
    id: "1",
    src: "/images/gallery-1.jpg",
    alt: "Volunteers framing a wall at the build site",
    width: 600,
    height: 400,
    eventName: "Fall Build 2025",
    date: "2025-10-15",
  },
  {
    id: "2",
    src: "/images/gallery-2.jpg",
    alt: "Team photo at the completed house",
    width: 600,
    height: 800,
    eventName: "Spring Build 2025",
    date: "2025-04-20",
  },
  {
    id: "3",
    src: "/images/gallery-3.jpg",
    alt: "Painting day with volunteers",
    width: 800,
    height: 600,
    eventName: "Paint Day 2025",
    date: "2025-03-10",
  },
  {
    id: "4",
    src: "/images/gallery-4.jpg",
    alt: "Fundraiser event group photo",
    width: 600,
    height: 400,
    eventName: "Annual Gala 2025",
    date: "2025-02-14",
  },
  {
    id: "5",
    src: "/images/gallery-5.jpg",
    alt: "Volunteers installing roofing materials",
    width: 600,
    height: 900,
    eventName: "Summer Build 2024",
    date: "2024-07-22",
  },
  {
    id: "6",
    src: "/images/gallery-6.jpg",
    alt: "Community members at the house dedication ceremony",
    width: 800,
    height: 500,
    eventName: "House Dedication 2024",
    date: "2024-09-05",
  },
  {
    id: "7",
    src: "/images/gallery-7.jpg",
    alt: "Students volunteering during orientation week",
    width: 600,
    height: 400,
    eventName: "O-Week Build 2024",
    date: "2024-09-01",
  },
  {
    id: "8",
    src: "/images/gallery-8.jpg",
    alt: "Winter volunteering event with hot chocolate",
    width: 500,
    height: 700,
    eventName: "Winter Social 2024",
    date: "2024-01-20",
  },
  {
    id: "9",
    src: "/images/gallery-9.jpg",
    alt: "Landscaping work at the build site",
    width: 800,
    height: 600,
    eventName: "Fall Build 2024",
    date: "2024-10-30",
  },
  {
    id: "10",
    src: "/images/gallery-10.jpg",
    alt: "Tool safety training session",
    width: 600,
    height: 400,
    eventName: "Training Day 2024",
    date: "2024-02-15",
  },
  {
    id: "11",
    src: "/images/gallery-11.jpg",
    alt: "Volunteers smiling during a build break",
    width: 600,
    height: 800,
    eventName: "Spring Build 2024",
    date: "2024-04-10",
  },
  {
    id: "12",
    src: "/images/gallery-12.jpg",
    alt: "Club members at the Habitat for Humanity national conference",
    width: 800,
    height: 500,
    eventName: "National Conference 2024",
    date: "2024-06-15",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Executive VPs
  {
    id: "1",
    name: "Member Name",
    role: "President",
    level: "vp",
    bio: "Passionate about affordable housing and community engagement at Western University.",
    imageUrl: "/images/headshot-1.jpg",
    department: "Executive",
  },
  {
    id: "2",
    name: "Member Name",
    role: "VP Operations",
    level: "vp",
    bio: "Oversees all operational aspects of the chapter including builds and logistics.",
    imageUrl: "/images/headshot-2.jpg",
    department: "Executive",
  },
  {
    id: "3",
    name: "Member Name",
    role: "VP Finance",
    level: "vp",
    bio: "Manages the chapter budget, fundraising initiatives, and financial reporting.",
    imageUrl: "/images/headshot-3.jpg",
    department: "Executive",
  },
  {
    id: "4",
    name: "Member Name",
    role: "VP Marketing",
    level: "vp",
    bio: "Leads branding, social media strategy, and community outreach communications.",
    imageUrl: "/images/headshot-4.jpg",
    department: "Executive",
  },
  {
    id: "5",
    name: "Member Name",
    role: "VP Events",
    level: "vp",
    bio: "Plans and coordinates all chapter events, builds, and volunteer experiences.",
    imageUrl: "/images/headshot-5.jpg",
    department: "Executive",
  },
  {
    id: "6",
    name: "Member Name",
    role: "VP Outreach",
    level: "vp",
    bio: "Builds partnerships with local organizations and expands the chapter's community impact.",
    imageUrl: "/images/headshot-6.jpg",
    department: "Executive",
  },
  // Directors - Operations
  {
    id: "7",
    name: "Member Name",
    role: "Director of Logistics",
    level: "director",
    imageUrl: "/images/headshot-7.jpg",
    department: "Operations",
  },
  {
    id: "8",
    name: "Member Name",
    role: "Director of Volunteer Coordination",
    level: "director",
    imageUrl: "/images/headshot-8.jpg",
    department: "Operations",
  },
  {
    id: "9",
    name: "Member Name",
    role: "Director of Safety",
    level: "director",
    imageUrl: "/images/headshot-9.jpg",
    department: "Operations",
  },
  {
    id: "10",
    name: "Member Name",
    role: "Director of Build Projects",
    level: "director",
    imageUrl: "/images/headshot-10.jpg",
    department: "Operations",
  },
  // Directors - Finance
  {
    id: "11",
    name: "Member Name",
    role: "Director of Fundraising",
    level: "director",
    imageUrl: "/images/headshot-11.jpg",
    department: "Finance",
  },
  {
    id: "12",
    name: "Member Name",
    role: "Director of Sponsorships",
    level: "director",
    imageUrl: "/images/headshot-12.jpg",
    department: "Finance",
  },
  {
    id: "13",
    name: "Member Name",
    role: "Director of Grants",
    level: "director",
    imageUrl: "/images/headshot-13.jpg",
    department: "Finance",
  },
  // Directors - Marketing
  {
    id: "14",
    name: "Member Name",
    role: "Director of Social Media",
    level: "director",
    imageUrl: "/images/headshot-14.jpg",
    department: "Marketing",
  },
  {
    id: "15",
    name: "Member Name",
    role: "Director of Content",
    level: "director",
    imageUrl: "/images/headshot-15.jpg",
    department: "Marketing",
  },
  {
    id: "16",
    name: "Member Name",
    role: "Director of Design",
    level: "director",
    imageUrl: "/images/headshot-16.jpg",
    department: "Marketing",
  },
  {
    id: "17",
    name: "Member Name",
    role: "Director of Photography",
    level: "director",
    imageUrl: "/images/headshot-17.jpg",
    department: "Marketing",
  },
  // Directors - Events
  {
    id: "18",
    name: "Member Name",
    role: "Director of Build Events",
    level: "director",
    imageUrl: "/images/headshot-18.jpg",
    department: "Events",
  },
  {
    id: "19",
    name: "Member Name",
    role: "Director of Social Events",
    level: "director",
    imageUrl: "/images/headshot-19.jpg",
    department: "Events",
  },
  {
    id: "20",
    name: "Member Name",
    role: "Director of Workshops",
    level: "director",
    imageUrl: "/images/headshot-20.jpg",
    department: "Events",
  },
  {
    id: "21",
    name: "Member Name",
    role: "Director of Orientation",
    level: "director",
    imageUrl: "/images/headshot-21.jpg",
    department: "Events",
  },
  // Directors - Outreach
  {
    id: "22",
    name: "Member Name",
    role: "Director of Community Partnerships",
    level: "director",
    imageUrl: "/images/headshot-22.jpg",
    department: "Outreach",
  },
  {
    id: "23",
    name: "Member Name",
    role: "Director of Campus Relations",
    level: "director",
    imageUrl: "/images/headshot-23.jpg",
    department: "Outreach",
  },
  {
    id: "24",
    name: "Member Name",
    role: "Director of Recruitment",
    level: "director",
    imageUrl: "/images/headshot-24.jpg",
    department: "Outreach",
  },
  {
    id: "25",
    name: "Member Name",
    role: "Director of Alumni Relations",
    level: "director",
    imageUrl: "/images/headshot-25.jpg",
    department: "Outreach",
  },
  // Additional Directors
  {
    id: "26",
    name: "Member Name",
    role: "Director of Technology",
    level: "director",
    imageUrl: "/images/headshot-26.jpg",
    department: "Operations",
  },
  {
    id: "27",
    name: "Member Name",
    role: "Director of Internal Affairs",
    level: "director",
    imageUrl: "/images/headshot-27.jpg",
    department: "Executive",
  },
  {
    id: "28",
    name: "Member Name",
    role: "Director of Advocacy",
    level: "director",
    imageUrl: "/images/headshot-28.jpg",
    department: "Outreach",
  },
  {
    id: "29",
    name: "Member Name",
    role: "Director of Merchandise",
    level: "director",
    imageUrl: "/images/headshot-29.jpg",
    department: "Finance",
  },
  {
    id: "30",
    name: "Member Name",
    role: "Director of Newsletter",
    level: "director",
    imageUrl: "/images/headshot-30.jpg",
    department: "Marketing",
  },
  {
    id: "31",
    name: "Member Name",
    role: "Director of Accessibility",
    level: "director",
    imageUrl: "/images/headshot-31.jpg",
    department: "Operations",
  },
  {
    id: "32",
    name: "Member Name",
    role: "Director of Special Projects",
    level: "director",
    imageUrl: "/images/headshot-32.jpg",
    department: "Events",
  },
  {
    id: "33",
    name: "Member Name",
    role: "Director of Training",
    level: "director",
    imageUrl: "/images/headshot-33.jpg",
    department: "Operations",
  },
  {
    id: "34",
    name: "Member Name",
    role: "Director of Community Engagement",
    level: "director",
    imageUrl: "/images/headshot-34.jpg",
    department: "Outreach",
  },
  {
    id: "35",
    name: "Member Name",
    role: "Director of Sustainability",
    level: "director",
    imageUrl: "/images/headshot-35.jpg",
    department: "Operations",
  },
];

export const VALUES: ValueItem[] = [
  {
    title: "Community",
    description:
      "We believe in the power of people coming together. Every nail driven, every wall raised is a step toward stronger, more connected communities.",
    icon: "Heart",
  },
  {
    title: "Service",
    description:
      "Serving others is at the core of everything we do. We volunteer our time and skills to help families achieve the dream of homeownership.",
    icon: "HandHelping",
  },
  {
    title: "Equity",
    description:
      "Everyone deserves a safe, affordable place to call home. We work toward a world where housing is a right, not a privilege.",
    icon: "Scale",
  },
  {
    title: "Sustainability",
    description:
      "We build homes that last, using sustainable practices and materials to create lasting impact for families and the environment.",
    icon: "Leaf",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    title: "Chapter Founded",
    description:
      "A group of passionate Western students established the university's chapter of Habitat for Humanity, bringing affordable housing advocacy to campus.",
  },
  {
    year: "2022",
    title: "First Build Day",
    description:
      "Our chapter participated in its first official build day with Habitat for Humanity Heartland Ontario, bringing 20 volunteers to the site.",
  },
  {
    year: "2023",
    title: "Membership Growth",
    description:
      "The chapter grew to over 30 active members and hosted its first independent fundraiser, raising $3,000 for local housing projects.",
  },
  {
    year: "2024",
    title: "Community Recognition",
    description:
      "Recognized by the USC for outstanding community impact. Expanded partnerships with local businesses and organizations.",
  },
  {
    year: "2025",
    title: "Milestone Year",
    description:
      "Surpassed 500 total volunteer hours, completed our 10th build day, and launched new outreach programs to engage more students.",
  },
];
