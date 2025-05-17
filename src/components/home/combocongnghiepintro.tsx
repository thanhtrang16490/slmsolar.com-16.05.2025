'use client'
import VideoSolar from '../hecongnghiep/video'

import { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import { 
  BoltIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  BanknotesIcon,
  Square3Stack3DIcon,
  Battery100Icon,
  ArrowTrendingUpIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  FireIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import type { TabsProps } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

const frequencies = [
  { value: 'ongrid', label: 'Hệ Bám Tải', priceSuffix: 'đ' },
  { value: 'hybrid', label: 'Hệ Hybrid', priceSuffix: 'đ' },
] as const

const ongridTiers = [
  {
    name: '22 kW',
    id: 'tier-22',
    href: '#',
    price: '172.000.180',
    hoiVon: 'Hoàn vốn: 36 tháng',
    hieuQua: 'Hiệu quả/tháng: 4.830.000đ',
    description: 'On-Grid | 3 pha | JA Solar 36 tấm | Sungrow 22kW',
    features: [
      'Công suất: 22 kWp',
      'Số lượng tấm pin: 36 tấm',
      'Sản lượng: 1.900-2.300 kWh/tháng'
    ],
    mostPopular: false,
  },
  {
    name: '33 kW',
    id: 'tier-33',
    href: '#',
    price: '246.000.700',
    hoiVon: 'Hoàn vốn: 34 tháng',
    hieuQua: 'Hiệu quả/tháng: 7.245.000đ',
    description: 'On-Grid | 3 pha | JA Solar 54 tấm | Sungrow 33kW',
    features: [
      'Công suất: 33 kWp',
      'Số lượng tấm pin: 54 tấm',
      'Sản lượng: 2.900-3.400 kWh/tháng'
    ],
    mostPopular: false,
  },
  {
    name: '45 kW',
    id: 'tier-45',
    href: '#',
    price: '318.802.000',
    hoiVon: 'Hoàn vốn: 32 tháng',
    hieuQua: 'Hiệu quả/tháng: 10.005.000đ',
    description: 'On-Grid | 3 pha | JA Solar 74 tấm | Sungrow 45kW',
    features: [
      'Công suất: 45 kWp',
      'Số lượng tấm pin: 74 tấm',
      'Sản lượng: 4.000-4.700 kWh/tháng'
    ],
    mostPopular: true,
  },
  {
    name: '66 kW',
    id: 'tier-66',
    href: '#',
    price: '461.000.100',
    hoiVon: 'Hoàn vốn: 32 tháng',
    hieuQua: 'Hiệu quả/tháng: 14.720.000đ',
    description: 'On-Grid | 3 pha | JA Solar 108 tấm | Sungrow 66kW',
    features: [
      'Công suất: 66 kWp',
      'Số lượng tấm pin: 108 tấm',
      'Sản lượng: 5.900-6.900 kWh/tháng'
    ],
    mostPopular: false,
  },
]

const hybridTiers = [
  {
    name: '22 kW',
    id: 'tier-22',
    href: '#',
    price: '272.000.300',
    hoiVon: 'Hoàn vốn: 49 tháng',
    hieuQua: 'Hiệu quả/tháng: 5.635.000đ',
    description: 'Hybrid | 3 pha | JA Solar 36 tấm | Sungrow 22kW | Pin EASYWAY',
    features: [
      'Công suất: 22 kWp',
      'Số lượng tấm pin: 36 tấm',
      'Sản lượng: 2.300-2.600 kWh/tháng',
      'Pin lưu trữ: 10,65 kWh'
    ],
    mostPopular: false,
  },
  {
    name: '33 kW',
    id: 'tier-33',
    href: '#',
    price: '345.500.100',
    hoiVon: 'Hoàn vốn: 42 tháng',
    hieuQua: 'Hiệu quả/tháng: 8.395.000đ',
    description: 'Hybrid | 3 pha | JA Solar 54 tấm | Sungrow 33kW | Pin EASYWAY',
    features: [
      'Công suất: 33 kWp',
      'Số lượng tấm pin: 54 tấm',
      'Sản lượng: 3.400-3.900 kWh/tháng',
      'Pin lưu trữ: 10,65 kWh'
    ],
    mostPopular: false,
  },
  {
    name: '45 kW',
    id: 'tier-45',
    href: '#',
    price: '529.510.300',
    hoiVon: 'Hoàn vốn: 46 tháng',
    hieuQua: 'Hiệu quả/tháng: 11.615.000đ',
    description: 'Hybrid | 3 pha | JA Solar 74 tấm | Sungrow 45kW | Pin EASYWAY',
    features: [
      'Công suất: 45 kWp',
      'Số lượng tấm pin: 74 tấm',
      'Sản lượng: 4.700-5.400 kWh/tháng',
      'Pin lưu trữ: 15,36 kWh'
    ],
    mostPopular: true,
  },
  {
    name: '66 kW',
    id: 'tier-66',
    href: '#',
    price: '681.208.000',
    hoiVon: 'Hoàn vốn: 41 tháng',
    hieuQua: 'Hiệu quả/tháng: 17.020.000đ',
    description: 'Hybrid | 3 pha | JA Solar 108 tấm | Sungrow 66kW | Pin EASYWAY',
    features: [
      'Công suất: 66 kWp',
      'Số lượng tấm pin: 108 tấm',
      'Sản lượng: 6.900-7.900 kWh/tháng',
      'Pin lưu trữ: 20,48 kWh'
    ],
    mostPopular: false,
  },
]

const descriptions = {
  ongrid: {
    title: "Hệ thống điện mặt trời bám tải (On-Grid) 3 pha",
    content: "Hệ thống điện mặt trời On-Grid cho doanh nghiệp, là hệ thống vận hành kết hợp giữa nguồn điện mặt trời và nguồn điện lưới, không bao gồm Pin lưu trữ. Phù hợp với các doanh nghiệp hoạt động ban ngày, có mức tiêu thụ điện cao.",
    image: "/images/so-do-he-thong-dien-mat-troi.png"
  },
  hybrid: {
    title: "Hệ thống điện mặt trời độc lập (Hybrid) 3 pha áp cao",
    content: "Hệ thống điện mặt trời Hybrid cho doanh nghiệp, có tích hợp Pin lưu trữ EASYWAY, cho phép vận hành độc lập với lưới điện. Phù hợp với các doanh nghiệp cần nguồn điện ổn định 24/7, hoặc hoạt động cả ban đêm.",
    image: "/images/so-do-he-thong-dien-mat-troi.png"
  }
} as const

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

type Frequency = typeof frequencies[number]

export default function Example() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0])
  const currentDate = new Date()
  const priceMonth = currentDate.toLocaleString('vi-VN', { month: 'numeric', year: 'numeric' })

  useEffect(() => {
    if (window.innerWidth > 640) {
      let isHovering = false;
      
      const cards = document.querySelectorAll('.card-container');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          isHovering = true;
        });
        card.addEventListener('mouseleave', () => {
          isHovering = false;
        });
      });

      const interval = setInterval(() => {
        if (!isHovering) {
          setFrequency(current => {
            const currentIndex = frequencies.findIndex(f => f.value === current.value)
            return frequencies[(currentIndex + 1) % frequencies.length]
          })
        }
      }, 5000)

      return () => {
        clearInterval(interval);
        cards.forEach(card => {
          card.removeEventListener('mouseenter', () => {
            isHovering = true;
          });
          card.removeEventListener('mouseleave', () => {
            isHovering = false;
          });
        });
      }
    }
  }, [])

  return (
    <div className="bg-white py-2 sm:py-4 hidden md:block">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Điện Mặt Trời Công Nghiệp
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Giải pháp năng lượng xanh tối ưu cho doanh nghiệp! Với hệ thống công suất lớn, điện mặt trời giúp doanh nghiệp:
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Tiết kiệm hàng tỷ đồng tiền điện mỗi năm, tối ưu hóa chi phí vận hành
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Hoàn vốn chỉ từ 3 năm, sinh lời bền vững, tăng tính cạnh tranh
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Chủ động nguồn điện, giảm phụ thuộc vào điện lưới, hạn chế gián đoạn sản xuất
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Giảm phát thải CO₂, nâng cao trách nhiệm môi trường, đáp ứng tiêu chuẩn ESG
              </p>
            </div>
            <p className="mt-4 text-base font-semibold text-green-600">
              👉 Giải pháp bền vững - Tăng trưởng mạnh mẽ - Dẫn đầu xu hướng!
            </p>
          </div>
          <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <VideoSolar/>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-between items-center">
          <div className="flex gap-x-3">
            {frequencies.map((freq) => (
              <button
                key={freq.value}
                onClick={() => setFrequency(freq)}
                className={classNames(
                  'rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200',
                  freq.value === frequency.value
                    ? freq.value === 'ongrid'
                      ? 'bg-red-600 text-white shadow-md hover:bg-red-500'
                      : 'bg-green-600 text-white shadow-md hover:bg-green-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                )}
              >
                {freq.label}
              </button>
            ))}
          </div>

          <a
            href="/he-cong-nghiep"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all duration-200"
          >
            Xem tất cả sản phẩm
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>

        {/* Hide grid on mobile, show on larger screens */}
        <div className="hidden sm:block">
          <div className="isolate mx-auto mt-4 sm:mt-6 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {(frequency.value === 'ongrid' ? ongridTiers : hybridTiers).map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  'card-container',
                  tier.mostPopular 
                    ? `ring-2 ${
                        frequency.value === 'ongrid' 
                          ? 'ring-red-600 bg-red-50' 
                          : 'ring-green-600 bg-green-50'
                      } shadow-xl relative` 
                    : `ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ${
                        frequency.value === 'ongrid'
                          ? 'hover:ring-red-200'
                          : 'hover:ring-green-200'
                      }`,
                  'rounded-3xl px-4 py-3 h-full flex flex-col',
                )}
              >
                {tier.mostPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap ${
                    frequency.value === 'ongrid' ? 'bg-red-600' : 'bg-green-600'
                  } text-white`}>
                    <FireIcon className="h-4 w-4" />
                    Bán chạy
                  </div>
                )}
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600' : 'text-gray-900',
                    'text-base/7 font-semibold py-2 text-center'  ,
                  )}
                >
                 
                  {frequency.value === 'ongrid' ? 'Hệ On-Grid' : 'Hệ Hybrid'} {tier.name}
                </h3>
                <div className="mt-2 flex gap-x-2">
                  <button 
                    className={classNames(
                      'flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      frequency.value === 'ongrid' 
                        ? 'bg-red-50 hover:bg-red-100' 
                        : 'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <ClockIcon 
                      className={`h-5 w-5 ${
                        frequency.value === 'ongrid' ? 'text-red-500' : 'text-green-500'
                      }`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hoàn vốn</span>
                      <p className={`text-sm font-semibold ${
                        frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {tier.hoiVon.replace('Hoàn vốn: ', '')}
                      </p>
                    </div>
                  </button>
                  
                  <button 
                    className={classNames(
                      'flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      frequency.value === 'ongrid' 
                        ? 'bg-red-50 hover:bg-red-100' 
                        : 'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <SparklesIcon 
                      className={`h-5 w-5 ${
                        frequency.value === 'ongrid' ? 'text-red-500' : 'text-green-500'
                      }`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                      <p className={`text-sm font-semibold ${
                        frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {tier.hieuQua.replace('Hiệu quả/tháng: ', '')}
                      </p>
                    </div>
                  </button>
                </div>
                <p className="mt-6 flex flex-col items-center">
                  <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                  <span className="flex items-baseline gap-x-1">
                    <span className={classNames(
                      "text-4xl font-semibold tracking-tight",
                      frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-base/7 font-semibold text-gray-600">{frequency.priceSuffix}</span>
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? `${frequency.value === 'ongrid' 
                          ? 'bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg'
                          : 'bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg'}`
                      : `${frequency.value === 'ongrid'
                          ? 'text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105'
                          : 'text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105'}`,
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                    'transform transition-all duration-200 ease-in-out',
                    'focus-visible:outline-2 focus-visible:outline-offset-2',
                    frequency.value === 'ongrid' ? 'focus-visible:outline-red-600' : 'focus-visible:outline-green-600'
                  )}
                >
                  Xem chi tiết
                </a>
                <div className="flex-grow">
                  <ul role="list" className="mt-8 space-y-3 text-base/7 text-gray-600">
                    {tier.features.map((feature) => {
                      let Icon = Cog6ToothIcon // default icon
                      
                      // Chọn icon dựa vào nội dung của feature
                      if (feature.toLowerCase().includes('công suất')) {
                        Icon = BoltIcon // ⚡ Công suất
                      } else if (feature.toLowerCase().includes('hệ điện')) {
                        Icon = BuildingOfficeIcon // 🏢 Hệ điện
                      } else if (feature.toLowerCase().includes('sản lượng')) {
                        Icon = ChartBarIcon // 📊 Sản lượng
                      } else if (feature.toLowerCase().includes('hoàn vốn')) {
                        Icon = BanknotesIcon // 💰 Hoàn vốn
                      } else if (feature.toLowerCase().includes('diện tích')) {
                        Icon = Square3Stack3DIcon // 📏 Diện tích
                      } else if (feature.toLowerCase().includes('pin')) {
                        Icon = Battery100Icon // 🔋 Pin lưu trữ
                      } else if (feature.toLowerCase().includes('hiệu suất')) {
                        Icon = ArrowTrendingUpIcon // 📈 Hiệu suất
                      } else if (feature.toLowerCase().includes('thiết bị')) {
                        Icon = WrenchScrewdriverIcon // 🔧 Thiết bị
                      }

                      return (
                        <li key={feature} className="flex gap-x-3 items-center">
                          <Icon 
                            aria-hidden="true" 
                            className={`h-5 w-5 flex-none ${frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'}`} 
                          />
                          {feature}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show slider on mobile only */}
        <div className="sm:hidden mt-4 px-4">
          <Swiper
            modules={[FreeMode, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={'auto'}
            freeMode={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full py-8"
          >
            {(frequency.value === 'ongrid' ? ongridTiers : hybridTiers).map((tier) => (
              <SwiperSlide 
                key={tier.id}
                className="!w-[320px] pt-4 pb-8 h-full"
              >
                <div
                  className={classNames(
                    tier.mostPopular 
                      ? `ring-2 ${
                          frequency.value === 'ongrid' 
                            ? 'ring-red-600 bg-red-50' 
                            : 'ring-green-600 bg-green-50'
                        } shadow-xl relative` 
                      : `ring-1 ring-gray-200 shadow-md ${
                          frequency.value === 'ongrid'
                            ? 'hover:ring-red-200'
                            : 'hover:ring-green-200'
                        }`,
                    'rounded-3xl px-4 py-3 h-full flex flex-col',
                  )}
                >
                  {tier.mostPopular && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap ${
                      frequency.value === 'ongrid' ? 'bg-red-600' : 'bg-green-600'
                    } text-white`}>
                      <FireIcon className="h-4 w-4" />
                      Bán chạy
                    </div>
                  )}
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600' : 'text-gray-900',
                      'text-base/7 font-semibold py-2 text-center'  ,
                    )}
                  >
                   
                    {frequency.value === 'ongrid' ? 'Hệ On-Grid' : 'Hệ Hybrid'} {tier.name}
                  </h3>
                  <div className="mt-2 flex gap-x-2">
                    <button 
                      className={classNames(
                        'flex-1 rounded-lg px-2 py-1',
                        'flex items-center gap-x-2',
                        'transition-all duration-200',
                        frequency.value === 'ongrid' 
                          ? 'bg-red-50 hover:bg-red-100' 
                          : 'bg-green-50 hover:bg-green-100'
                      )}
                    >
                      <ClockIcon 
                        className={`h-5 w-5 ${
                          frequency.value === 'ongrid' ? 'text-red-500' : 'text-green-500'
                        }`}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-500">Hoàn vốn</span>
                        <p className={`text-sm font-semibold ${
                          frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {tier.hoiVon.replace('Hoàn vốn: ', '')}
                        </p>
                      </div>
                    </button>
                    
                    <button 
                      className={classNames(
                        'flex-1 rounded-lg px-2 py-1',
                        'flex items-center gap-x-2',
                        'transition-all duration-200',
                        frequency.value === 'ongrid' 
                          ? 'bg-red-50 hover:bg-red-100' 
                          : 'bg-green-50 hover:bg-green-100'
                      )}
                    >
                      <SparklesIcon 
                        className={`h-5 w-5 ${
                          frequency.value === 'ongrid' ? 'text-red-500' : 'text-green-500'
                        }`}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                        <p className={`text-sm font-semibold ${
                          frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {tier.hieuQua.replace('Hiệu quả/tháng: ', '')}
                        </p>
                      </div>
                    </button>
                  </div>
                  <p className="mt-6 flex flex-col items-center">
                    <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                    <span className="flex items-baseline gap-x-1">
                      <span className={classNames(
                        "text-4xl font-semibold tracking-tight",
                        frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'
                      )}>
                        {tier.price}
                      </span>
                      <span className="text-base/7 font-semibold text-gray-600">{frequency.priceSuffix}</span>
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? `${frequency.value === 'ongrid' 
                            ? 'bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg'
                            : 'bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg'}`
                        : `${frequency.value === 'ongrid'
                            ? 'text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105'
                            : 'text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105'}`,
                      'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                      'transform transition-all duration-200 ease-in-out',
                      'focus-visible:outline-2 focus-visible:outline-offset-2',
                      frequency.value === 'ongrid' ? 'focus-visible:outline-red-600' : 'focus-visible:outline-green-600'
                    )}
                  >
                    Xem chi tiết
                  </a>
                  <div className="flex-grow">
                    <ul role="list" className="mt-8 space-y-3 text-base/7 text-gray-600">
                      {tier.features.map((feature) => {
                        let Icon = Cog6ToothIcon // default icon
                        
                        // Chọn icon dựa vào nội dung của feature
                        if (feature.toLowerCase().includes('công suất')) {
                          Icon = BoltIcon // ⚡ Công suất
                        } else if (feature.toLowerCase().includes('hệ điện')) {
                          Icon = BuildingOfficeIcon // 🏢 Hệ điện
                        } else if (feature.toLowerCase().includes('sản lượng')) {
                          Icon = ChartBarIcon // 📊 Sản lượng
                        } else if (feature.toLowerCase().includes('hoàn vốn')) {
                          Icon = BanknotesIcon // 💰 Hoàn vốn
                        } else if (feature.toLowerCase().includes('diện tích')) {
                          Icon = Square3Stack3DIcon // 📏 Diện tích
                        } else if (feature.toLowerCase().includes('pin')) {
                          Icon = Battery100Icon // 🔋 Pin lưu trữ
                        } else if (feature.toLowerCase().includes('hiệu suất')) {
                          Icon = ArrowTrendingUpIcon // 📈 Hiệu suất
                        } else if (feature.toLowerCase().includes('thiết bị')) {
                          Icon = WrenchScrewdriverIcon // 🔧 Thiết bị
                        }

                        return (
                          <li key={feature} className="flex gap-x-3 items-center">
                            <Icon 
                              aria-hidden="true" 
                              className={`h-5 w-5 flex-none ${frequency.value === 'ongrid' ? 'text-red-600' : 'text-green-600'}`} 
                            />
                            {feature}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
