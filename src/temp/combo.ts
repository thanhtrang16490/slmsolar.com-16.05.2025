interface TierItem {
  name: string;
  id: number;
  href: string;
  price: string;
  priceNumeric: number;
  priceSuffix: string;
  hoiVon: string;
  hieuQua: string;
  description: string;
  features: string[];
  mostPopular: boolean;
  type?: 'on-grid' | 'hybrid';
  isApCao: boolean;
  subtitle?: string;
  image?: string;
  equipments?: Array<{
    id: number;
    title: string;
    logo: string;
    logoAlt: string;
    quantity: string;
    image: string;
    mainimage?: string;
    featured?: boolean;
  }>;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
  specs?: Array<{
    value: string;
    label: string;
  }>;
  highlights?: string[];
  reviews?: {
    average: number;
    totalCount: number;
    counts: Array<{
      rating: number;
      count: number;
    }>;
    featured: Array<{
      id: number;
      rating: number;
      content: string;
      author: string;
      avatarSrc: string;
    }>;
  };
  aqitems?: Array<{
    imgSrc: string;
    imgAlt: string;
    heading: string;
    buttonLink: string;
    savingsPerMonth: string;
    area: string;
  }>;
}

const solarPackages: TierItem[] = [
  {
    name: '5.2 kW',
    id: 1,
    href: '/goi-san-pham/he-gia-dinh/on-grid/on-grid-1p-ja-55-invt-5',
    price: '48.900.000',
    priceNumeric: 48900000,
    priceSuffix: 'đ',
    hoiVon: 'Hoàn vốn: 5 năm',
    hieuQua: 'Hiệu quả/tháng: 800.000đ',
    description: 'On-Grid | 1 pha | JA 52 | Invt 50',
    features: [
      'Công suất: 5.2 kW',
      'Hệ điện: 1 pha',
      'Sản lượng: 500-600 kwh/tháng',
      'Diện tích lắp đặt: 23,3 m2'
    ],
    mostPopular: false,
    type: 'on-grid',
    isApCao: false,
    subtitle: "Sản lượng trung bình: 400 - 600 số/tháng",
    image: "/images/combo/ongrid/on-grid-1p-ja-55-invt-5/anh-chi-tiet/anh-1.jpg",
    equipments: [
      {
        id: 1,
        title: "Tấm quang năng - N-Type",
        logo: "/images/brand-ja-solar-logo.svg",
        logoAlt: "JA Solar",
        quantity: "9 tấm",
        image: "/images/solar-jasolar.png",
        mainimage: "/images/combo/ongrid/on-grid-1p-ja-55-invt-5/anh-chi-tiet/anh-6-pin-quang-nang.jpg",
        featured: true
      },
      {
        id: 2,
        title: "Biến tần On-Grid 5 kW - 1 pha",
        logo: "/images/brand-invt-logo.png",
        logoAlt: "INVT",
        quantity: "01 bộ",
        image: "/images/inverter-invt.png",
        mainimage: "/images/combo/ongrid/on-grid-1p-ja-55-invt-5/anh-chi-tiet/anh-2-bien-tan.jpg",
        featured: true
      },
      {
        id: 5,
        title: "Hệ ray nhôm đỡ tấm quang năng",
        logo: "/images/logo-solarmax.png",
        logoAlt: "Solar Max",
        quantity: "01 bộ",
        mainimage: "/images/combo/ongrid/on-grid-1p-ja-55-invt-5/anh-chi-tiet/anh-6-pin-quang-nang.jpg",
        image: "https://image.made-in-china.com/202f0j00QqncubeGhToZ/Wholesaler-Aluminium-Frame-PV-Panel-Stand-Adjustable-Front-Rear-Leg-Mount-Flat-Roof-Solar-Panel-System-Mounting-Bracket.webp"
      },
      {
        id: 6,
        title: "Bộ tủ điện Năng lượng mặt trời",
        logo: "/images/logo-solarmax.png",
        logoAlt: "Solar Max",
        quantity: "01 bộ",
        mainimage: "/images/combo/ongrid/on-grid-1p-ja-55-invt-5/anh-chi-tiet/anh-5-tu-dien.jpg",
        image: "/images/bo-tu-dien-solarmax.png"
      }
    ],
    galleryImages: [
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00001.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00002.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00003.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00004.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00005.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00006.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00007.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      },
      {
        src: '/images/combo/ongrid/on-grid-1p-ja-55-invt-5/on-grid-1p-ja-55-invt-5-anh-00008.jpeg',
        alt: 'Hệ thống điện mặt trời mái nhà 5kWp'
      }
    ],
    specs: [
      {
        value: "5.2 kWp",
        label: "Công suất"
      },
      {
        value: "45-50m²",
        label: "Diện tích mái"
      },
      {
        value: "22-25 kWh",
        label: "Sản lượng/ngày"
      },
      {
        value: "4-5 năm",
        label: "Hoàn vốn"
      }
    ],
    highlights: [
      'Hoàn vốn trong vòng 4-5 năm',
      'Hỗ trợ kỹ thuật 24/7',
      'Lắp đặt chuyên nghiệp trong 2-3 ngày',
    ],
    aqitems: [
      {
        imgSrc: "/images/13_ongridvsoffgrid-Cover.jpg",
        imgAlt: "DA377: Quốc Oai - Hà Nội",
        heading: "DA377: Quốc Oai - Hà Nội",
        buttonLink: "https://youtu.be/JXQ3A8eFYmc?si=VyPKSXhA0KrHZoCK",
        savingsPerMonth: "2.5tr/tháng",
        area: "45m²"
      },
      {
        imgSrc: "/images/16_cocheHD-Cover.jpg",
        imgAlt: "DA393: Thái Bình",
        heading: "DA393: Thái Bình",
        buttonLink: "https://youtu.be/-eBkEvXXRaw?si=Mhp38M-qpUUfrhIV",
        savingsPerMonth: "2.8tr/tháng",
        area: "50m²"
      },
      {
        imgSrc: "/images/7_Sosanh2he-Cover.jpg",
        imgAlt: "DA208: Ứng Hoà - Hà Nội",
        heading: "DA208: Ứng Hoà - Hà Nội",
        buttonLink: "https://youtu.be/iIu3RhKuI_8?si=Ac7Y54OIvjeXlZ8i",
        savingsPerMonth: "2.2tr/tháng",
        area: "40m²"
      }
    ],
    reviews: {
      average: 4,
      totalCount: 1624,
      counts: [
        { rating: 5, count: 1019 },
        { rating: 4, count: 162 },
        { rating: 3, count: 97 },
        { rating: 2, count: 199 },
        { rating: 1, count: 147 }
      ],
      featured: [
        {
          id: 1,
          rating: 5,
          content: `Hệ thống hoạt động rất hiệu quả, đội ngũ lắp đặt chuyên nghiệp. Sau khi lắp đặt, hóa đơn tiền điện giảm đáng kể. Rất hài lòng với dịch vụ.`,
          author: 'Nguyễn Văn Anh',
          avatarSrc: ''
        },
        {
          id: 2,
          rating: 4,
          content: `Tư vấn nhiệt tình, giải thích rõ ràng về các thông số kỹ thuật. Chất lượng sản phẩm tốt, giá cả hợp lý. Tuy nhiên thời gian lắp đặt hơi lâu.`,
          author: 'Trần Minh Hoàng',
          avatarSrc: ''
        },
        {
          id: 3,
          rating: 5,
          content: `Đã sử dụng hệ thống được 6 tháng, hiệu quả vượt mong đợi. Tiết kiệm được khoảng 40% tiền điện hàng tháng. Dịch vụ hậu mãi tốt, kỹ thuật viên hỗ trợ nhanh chóng khi cần.`,
          author: 'Lê Thị Bình',
          avatarSrc: ''
        }
      ]
    }
  }
];

export default solarPackages;