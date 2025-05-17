import React from 'react';
import { Carousel } from 'antd';

interface SlideContent {
  image: string;
  title: string;
  description: string;
}

const slideContents: SlideContent[] = [
  {
    image: "/images/home/du-an-vcci.jpeg",
    title: "\nTận Dụng Nắng, Kiến Tạo Tương Lai",
    description: "Chúng tôi giúp bạn khai thác nguồn năng lượng vô tận từ mặt trời, mang lại hiệu quả kinh tế và môi trường bền vững."
  },
  {
    image: "/images/home/du-an-274.jpeg",
    title: "Phủ Xanh Mái Nhà Việt Nam",
    description: "Chúng tôi cam kết mang nguồn năng lượng sạch đến mọi mái nhà, góp phần kiến tạo tương lai bền vững cho thế hệ sau."
  },
  {
    image: "/images/home/du-an-604-thanh-hoa.jpeg",
    title: "Hành Trình 1 Triệu m² Năng Lượng Sạch",
    description: "Mục tiêu đến năm 2030, SolarMax sẽ lắp đặt 1 triệu m² tấm pin năng lượng mặt trời, biến từng mái nhà thành một nguồn điện xanh."
  },
  {
    image: "/images/home/du-an-888-phu-tho.jpeg",
    title: "Đồng Hành Vì Một Việt Nam Không Phát Thải",
    description: "Chúng tôi không chỉ cung cấp giải pháp năng lượng mặt trời, mà còn góp phần vào hành trình giảm khí thải, bảo vệ môi trường sống."
  },
  {
    image: "/images/home/du-an-gteco.jpeg",
    title: "Biến Ánh Nắng Thành Giá Trị Bền Vững",
    description: "Mỗi tấm pin được lắp đặt không chỉ tạo ra điện, mà còn là sự đầu tư cho tương lai, tiết kiệm chi phí và bảo vệ hành tinh."
  },
 
];

const Slider: React.FC = () => {
  return (
    <div className="bg-black hidden sm:block">
      <div className="mx-auto">
        <Carousel
          autoplay
          effect="fade"
          autoplaySpeed={3000}
          pauseOnHover
          dots={{ className: 'custom-dots' }}
          className="h-[800px]"
        >
          {slideContents.map((slide, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  className="w-full h-[800px] object-cover"
                  src={slide.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              
              </div>
              
              <div className="absolute inset-0 bg-black/20 flex items-center justify-start">
                <div className="text-white text-left container mx-auto w-full">
                  <button className="bg-white text-black px-6 py-3 rounded-full mb-4 flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-6 h-6 animate-spin-slow"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
                      />
                    </svg>
                    <span className="font-bold">
                      <img src="/images/logo-solarmax.svg" alt="SolarMax" className="h-4" />
                    </span>
                  </button>
                  <h1 className="text-5xl font-bold mb-4">
                    {slide.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < slide.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                  <div>
                    <div className="flex items-start gap-4 pt-10">
                      <button className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                      <p className="text-lg w-1/2">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;