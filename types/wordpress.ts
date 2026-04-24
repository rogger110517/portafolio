/**
 * TypeScript types for WordPress REST API responses.
 * These match the shape of data returned by the WP JSON API.
 */

export interface WPRendered {
  rendered: string;
  protected?: boolean;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail?: { source_url: string; width: number; height: number };
      medium?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
    };
  };
}

export interface WPProject {
  id: number;
  slug: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
  acf?: {
    project_category?: string;
    project_url?: string;
    project_image?: string;
  };
  /** Derived fields — populated by our fetch helper */
  imageUrl?: string;
  category?: string;
  projectUrl?: string;
}

export interface WPTestimonial {
  id: number;
  slug: string;
  title: WPRendered;
  content: WPRendered;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
  };
  acf?: {
    client_name?: string;
    client_role?: string;
    client_quote?: string;
    client_photo?: string;
  };
  /** Derived fields */
  clientName?: string;
  clientRole?: string;
  clientQuote?: string;
  clientPhoto?: string;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[];
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
  };
  /** Derived fields */
  imageUrl?: string;
  authorName?: string;
  formattedDate?: string;
}

export interface WPError {
  code: string;
  message: string;
  data: { status: number };
}
