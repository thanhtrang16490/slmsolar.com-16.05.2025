import React from 'react';
import type { FC } from 'react';
import type { BlogCategory } from '../../interfaces/blogs';

interface MenuBlogProps {
  categories: BlogCategory[];
  selectedCategory: string | null;
  onCategoryChange?: (categoryId: string | null) => void;
}

const MenuBlog: FC<MenuBlogProps> = ({ categories, selectedCategory: initialSelectedCategory, onCategoryChange }) => {
  // State to maintain selected category locally
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(initialSelectedCategory);

  // Function to handle category change
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    
    // If callback exists, use it (for backward compatibility)
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
    
    // Dispatch custom event for other components to listen
    const event = new CustomEvent('categoryChange', { 
      detail: { categoryId } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="lg:w-1/4">
      <div className="sticky top-28">
        <div className="bg-white/30 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Chuyên mục
          </h3>
          <nav className="flex flex-col gap-2">
            <a
              href="/blog"
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(null);
              }}
              className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedCategory === null
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-green-50 text-gray-700'
              }`}
            >
              Tất cả
            </a>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/blog/${category.attributes.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category.id.toString());
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.id.toString()
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-green-50 text-gray-700'
                }`}
              >
                {category.attributes.Title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuBlog;
