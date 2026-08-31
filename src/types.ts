export interface Keynote {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  takeaways: string[];
  duration: string;
  targetAudience: string;
  placeholderId: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  videoDuration?: string;
  videoThumbPlaceholder: string;
  avatarPlaceholder: string;
  rating: number;
  featured?: boolean;
}

export interface BootcampModule {
  day: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface StatMetric {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface GHLSectionGuide {
  sectionId: string;
  title: string;
  ghlLayout: string;
  background: string;
  components: string[];
  cssCustomHook: string;
}
