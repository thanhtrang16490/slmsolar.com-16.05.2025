export interface Equipment {
  id: number;
  title: string;
  logo: string;
  logoAlt: string;
  quantity: string;
  image: string;
  featured?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface AQItem {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  buttonLink: string;
  savingsPerMonth: string;
  area: string;
}

export interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
  avatarSrc: string;
}

export interface Reviews {
  average: number;
  totalCount: number;
  counts: Array<{
    rating: number;
    count: number;
  }>;
  featured: Review[];
}

export interface Spec {
  value: string;
  label: string;
}

export interface ComboPage {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  equipments: Equipment[];
  galleryImages: GalleryImage[];
  aqitems: AQItem[];
  reviews: Reviews;
  specs: Spec[];
  highlights: string[];
} 