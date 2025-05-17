import  { useState, useEffect } from 'react';

const WhyChooseSolarmax = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % productLinks.length);
    }, 5000); // Chuyển tab sau mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

  const productLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      text: "Tư Vấn & Khảo Sát miễn Phí",
      href: "#",
      background: "images/home/tai-sao-chon-solarmax-1.jpg",
      content: {
        title: "Tư Vấn & Khảo Sát Hoàn Toàn Miễn Phí",
        description: "Đội ngũ kỹ thuật chuyên nghiệp của SolarMax sẽ đo đạc chi tiết – đánh giá kết cấu mái – kiểm tra hệ thống điện hiện có để đưa ra phương án thi công an toàn – hiệu quả – tiết kiệm nhất.",
        features: [
          "Phân tích & tối ưu chi phí điện hàng tháng",
          "Khảo sát tận nơi – tư vấn giải pháp phù hợp",
          "Đánh giá vị trí lắp đặt để tối ưu hiệu suất",
          "Dự toán chi phí đầu tư & thời gian hoàn vốn nhanh chóng"
        ],
        image: "images/home/tai-sao-chon-solarmax-1.jpg"
      }
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      text: "Lắp Đặt Trọn Gói",
      href: "#",
      background: "images/home/tai-sao-chon-solarmax-2.jpg",
      content: {
        title: "Lắp Đặt Trọn Gói – Đảm Bảo Tiêu Chuẩn Quốc Tế",
        description: "SolarMax là tổng thầu EPC chuyên nghiệp, thực hiện thi công trọn gói cho các dự án điện mặt trời với mọi quy mô:",
        features: [
          "Hệ gia đình: 3kW - 50kW",
          "Hệ công nghiệp: 100kW - 5MW",
          "Thiết bị chính hãng 100% – Đội ngũ kỹ thuật giàu kinh nghiệm",
          "Lắp đặt nhanh chóng, tối ưu hiệu suất vận hành",
          "Cam kết mang đến giải pháp đầu tư thông minh, sinh lời bền vững"
        ],
        image: "images/home/tai-sao-chon-solarmax-2.jpg"
      }
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        </svg>
      ),
      text: "Bảo Hành & Hỗ Trợ 24/7",
      href: "#",
      background: "images/home/tai-sao-chon-solarmax-3.jpg",
      content: {
        title: "Bảo Hành & Hỗ Trợ 24/7 – Đồng Hành Lâu Dài",
        description: "Với SolarMax, bạn không chỉ đầu tư vào điện mặt trời – bạn đầu tư vào một tương lai bền vững!",
        features: [
          "Bảo hành sản phẩm lên đến 25 năm",
          "Hỗ trợ kỹ thuật 24/7 – Giám sát hệ thống từ xa",
          "Bảo trì định kỳ miễn phí",
          "Phản hồi sự cố trong vòng 24h",
          "Đồng hành cùng khách hàng trong suốt vòng đời sản phẩm"
        ],
        image: "images/home/tai-sao-chon-solarmax-3.jpg"
      }
    }
  ];

  return (
    <div className="relative hidden md:block">
      <div 
        className="absolute inset-0 w-full h-[1000px] md:h-[800px] transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(246, 246, 246, 0.75), rgba(246, 246, 246, 0.95)), url(${productLinks[activeTab].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative bg-transparent py-12 sm:py-24">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1B1B1B] mb-3">TẠI SAO BẠN NÊN CHỌN SOLARMAX?</h2>
          <p className="text-base sm:text-lg text-[#1B1B1B]">🌞 Giải pháp điện mặt trời toàn diện – Chuyên nghiệp – Hiệu quả 🌞</p>
          <p className="text-base sm:text-lg text-[#1B1B1B] mt-4">
            SolarMax không chỉ cung cấp hệ thống điện mặt trời mà còn mang đến giải pháp tối ưu hóa năng lượng, giúp bạn tiết kiệm chi phí – nâng cao hiệu suất – bảo vệ môi trường.
          </p>
        </div>

        <div className="mx-auto container px-4 lg:px-8 mt-12">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1B1B1B] mb-6">
                  {productLinks[activeTab].content.title}
                </h3>
                <p className="text-base text-[#1B1B1B] mb-4">
                  {productLinks[activeTab].content.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {productLinks[activeTab].content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href="tel:0964920242" className="inline-flex items-center bg-[#4CAF50] text-white px-5 py-2 rounded-full hover:bg-[#45a049] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Liên hệ tư vấn
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="https://zalo.me/0964920242" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border-2 border-[#4CAF50] text-[#4CAF50] px-5 py-2 rounded-full hover:bg-[#4CAF50] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    Nhận báo giá
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative aspect-[3/2] order-first md:order-last">
                <img 
                  src={productLinks[activeTab].content.image}
                  alt={productLinks[activeTab].content.title}
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide pb-4 md:pb-0">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 md:gap-x-16 mt-8 md:mt-12 bg-white min-w-max md:w-1/2 mx-auto md:rounded-full p-4 md:p-2 md:h-12 shadow-md">
            {productLinks.map((link, index) => (
              <button 
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
                className={`flex items-center gap-2 whitespace-nowrap px-4 text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'text-[#4CAF50] transform scale-105' 
                    : 'text-[#1B1B1B] hover:text-[#4CAF50]'
                }`}
              >
                <span className="w-5 h-5 md:w-6 md:h-6">{link.icon}</span>
                {link.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSolarmax;