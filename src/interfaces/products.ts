export default interface Products {
  id: number;
  attributes: {
    title: string;
    price: number;
    he: string;
    pha: string;
    highlight: Array<{
      title: string;
      value: string;
    }>;
    youtube_id: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    categories: string | string[];
    thuonghieu?: string;
    cong_suat?: string;
    brand?: {
      data?: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
          formats: {
            medium: {
              url: string;
            };
            small: {
              url: string;
            };
            large: {
              url: string;
            };
          };
        };
      };
    };
  };
}
