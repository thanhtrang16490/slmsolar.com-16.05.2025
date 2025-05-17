export interface GiaiPhapMaiProps {
  pageContent: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
  };
  mainImage: {
    src: string;
    alt: string;
  };
  components: Array<{
    title: string;
    description: string;
  }>;
  steps: Array<{
    title: string;
    description: string;
    img: string;
  }>;
  advantages: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  sampleImages: Array<{
    src: string;
    alt: string;
  }>;
  systemName: string;
  headerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
} 