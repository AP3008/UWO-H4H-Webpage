export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  registrationUrl?: string;
  isPast: boolean;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  eventName?: string;
  date?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  level: "vp" | "director";
  bio?: string;
  imageUrl: string;
  linkedIn?: string;
  email?: string;
  department?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
