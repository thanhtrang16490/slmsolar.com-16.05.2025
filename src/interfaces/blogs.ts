export interface BlogCategory {
  id: number;
  attributes: {
    Title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export default interface Blog {
  id: number;
  attributes: {
    title: string;
    Content: string | null;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    youtube_id: string;
    blog_category: {
      data: {
        id: number;
        attributes: {
          title: string;
        };
      };
    };
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            large: ImageFormat;
            small: ImageFormat;
            medium: ImageFormat;
            thumbnail: ImageFormat;
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
