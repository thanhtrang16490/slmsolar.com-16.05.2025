import type { FC } from 'react';
import type { default as BlogType, BlogCategory } from '../../interfaces/blogs';
import { useState, useEffect } from 'react';

interface BlogListProps {
  blogs?: BlogType[];
  categories?: BlogCategory[];
}

const BlogComponent: FC<BlogListProps> = ({ blogs = [], categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Add useEffect to listen for custom events from MenuBlog
  useEffect(() => {
    const handleCategoryChange = (e: CustomEvent) => {
      setSelectedCategory(e.detail.categoryId);
    };
    
    // Add event listener
    window.addEventListener('categoryChange', handleCategoryChange as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('categoryChange', handleCategoryChange as EventListener);
    };
  }, []);

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => 
        blog.attributes?.blog_category?.data?.id.toString() === selectedCategory
      )
    : blogs;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredBlogs.map((blog, index) => {
        const imageUrl = blog.attributes?.image?.data?.attributes?.formats?.medium?.url;
        
        return (
          <div 
            key={blog.attributes?.slug || index}
            className="bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg overflow-hidden flex-shrink-0 w-[75vw] md:w-auto snap-start relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
          >
            {/* Glass border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[1px]" />
            
            {/* Main content with glass background */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-xl h-full">
              <div className="relative pt-[177.78%] group -mt-5">
                {imageUrl ? (
                  <img
                    src={`https://app.slmsolar.com${imageUrl}`}
                    alt={blog.attributes?.title || ''}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img
                    src="/images/du-an/du-an-999-gia-lam.jpg"
                    alt={blog.attributes?.title || ''}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
              
              <div className="p-3 md:p-4">
                <div className="flex flex-col gap-2">
                  {blog.attributes?.blog_category?.data && (
                    <span className="text-sm text-green-600 font-medium">
                      {blog.attributes.blog_category.data.attributes.title}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {blog.attributes?.slug ? (
                      <a 
                        href={`/blog/${blog.attributes.slug}/`}
                        className="hover:text-green-600 transition-colors duration-200"
                      >
                        {blog.attributes.title}
                      </a>
                    ) : (
                      <span>{blog.attributes?.title || 'Untitled'}</span>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { BlogComponent };
export default BlogComponent;