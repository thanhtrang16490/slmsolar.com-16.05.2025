import React from 'react';
import { Carousel } from 'antd';

const Slider: React.FC = () => {
  // Tạo mảng dữ liệu cho các ảnh
  const imageData = [
    { src: "/images/thiet-bi/thiet-bi-banner-1.jpg", alt: "Thiết bị 1" },
    { src: "/images/thiet-bi/thiet-bi-banner-2.jpg", alt: "Thiết bị 2" },
    
  ];

  // Chia mảng thành các nhóm 2 ảnh cho mỗi slide
  const groupedImages = [];
  for (let i = 0; i < imageData.length; i += 2) {
    groupedImages.push(imageData.slice(i, i + 2));
  }

  return (
    <div className="slider-container">
      <div className="container mx-auto">
        <div className="hidden sm:block mx-auto">
          <div className="mx-auto">
            <Carousel
              autoplay
              effect="scrollx"
              autoplaySpeed={3000}
              pauseOnHover
              dots={false}
              className="h-[230px]"
            >
              {groupedImages.map((group, groupIndex) => (
                <div key={`group-${groupIndex}`}>
                  <div className="carousel-item">
                    <div className='pt-6'>
                      <div className="flex gap-4">
                        {group.map((image, index) => (
                          <div key={`image-${groupIndex}-${index}`} className="flex-1 aspect-[595/284] overflow-hidden rounded-md">
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;