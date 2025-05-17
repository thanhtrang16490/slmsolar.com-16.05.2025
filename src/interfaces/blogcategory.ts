export interface BlogCategory {
  id: number;
  attributes: {
    title: string;
    description?: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BlogType {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
          formats: {
            thumbnail: { url: string };
            small: { url: string };
            medium: { url: string };
            large: { url: string };
          };
        };
      };
    };
    blog_category: {
      data: BlogCategory;
    };
  };
}
