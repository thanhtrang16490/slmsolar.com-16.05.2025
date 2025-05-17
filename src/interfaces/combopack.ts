export default interface Combopacks {
  id: number;
  attributes: {
    title: string;
    price: string;
    description: string | null;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    hoanvon: string | null;
    hieuqua: string | null;
    mostPopular: boolean;
    type: string | null;
    isApCao: boolean;
    subtitle: string;
    highlights: Array<{
      id: number;
      title: string;
    }>;
    specifications: Array<{
      id: number;
      value: string;
      title: string;
    }>;
    productlist: Array<{
      id: number;
      soluong: number;
      title: string;
    }>;
    image: {
      data: {
        id: number;
        attributes: {
          url?: string;
          name?: string;
          alternativeText?: null;
          caption?: null;
          width?: number;
          height?: number;
          formats?: {
            large?: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            small?: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            medium?: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            thumbnail?: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
          };
        };
      };
    };
  };
}
