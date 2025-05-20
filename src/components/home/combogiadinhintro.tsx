'use client'
import VideoSolar from '../hegiadinh/video'
import { useState, useEffect } from 'react'
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
    name: '5 kW',
    id: 'tier-5',
    href: '#',
    price: '49.900.000',
    hoiVon: 'Hoàn vốn: 33 tháng',
    hieuQua: 'Hiệu quả/tháng: 1.540.000đ',
    description: 'On-Grid | 1 pha | JA 600 | Invt 50',
    features: [
      'Công suất: 5 kW',
      'Hệ điện: 1 pha',
      'Sản lượng: 400-500 kwh/tháng',
      'Diện tích lắp đặt: 24 m2'
    ],
    mostPopular: false,
  },
  {
    name: '10.2 kW - 1 pha',
    id: 'tier-10.2-1p',
    href: '#',
    price: '86.800.000',
    hoiVon: 'Hoàn vốn: 27 tháng',
    hieuQua: 'Hiệu quả/tháng: 3.300.000đ',
    description: 'On-Grid | 1 pha | JA 85 | Invt 85',
    features: [
      'Công suất: 10.2 kW',
      'Hệ điện: 1 pha',
      'Sản lượng: 900-1100 kwh/tháng',
      'Diện tích lắp đặt: 51 m2'
    ],
    mostPopular: false,
  },
  {
    name: '8.4 kW - 3 pha',
    id: 'tier-8.4-3p',
    href: '#',
    price: '78.300.000',
    hoiVon: 'Hoàn vốn: 29 tháng',
    hieuQua: 'Hiệu quả/tháng: 2.700.000đ',
    description: 'On-Grid | 3 pha | JA 85 | Invt 85',
    features: [
      'Công suất: 8.4 kW',
      'Hệ điện: 3 pha',
      'Sản lượng: 750-900 kwh/tháng',
      'Diện tích lắp đặt: 42 m2'
    ],
    mostPopular: true,
  },
  {
    name: '15.6 kW - 3 pha',
    id: 'tier-156-3p',
    href: '#',
    price: '126.000.000',
    hoiVon: 'Hoàn vốn: 26 tháng',
    hieuQua: 'Hiệu quả/tháng: 5.000.000đ',
    description: 'On-Grid | 3 pha | JA 110 | Invt 110',
    features: [
      'Công suất: 15.6 kW',
      'Hệ điện: 3 pha',
      'Sản lượng: 1400-1650  kwh/tháng',
      'Diện tích lắp đặt: 78 m2'
    ],
    mostPopular: false,
  },
]

const hybridTiers = [
  {
    name: '5 kW',
    id: 'tier-5',
    href: '#',
    price: '84.000.000',
    hoiVon: 'Hoàn vốn: 47 tháng',
    hieuQua: 'Hiệu quả/tháng: 1.800.000đ',
    description: 'Off-Grid | 1 pha | JA 50 | solis 50 | easyway 50',
    features: [
      'Công suất: 5 kW',
      'Hệ điện: 1 pha',
      'Pin lưu trữ Lithium',
      'Sản lượng: 500-600 kwh/tháng',
      'Diện tích lắp đặt: 24 m2'
    ],
    mostPopular: false,
  },
  {
    name: '15.6 kW - 1 pha',
    id: 'tier-102-1p',
    href: '#',
    price: '189.100.000',
    hoiVon: 'Hoàn vốn: 33 tháng',
    hieuQua: 'Hiệu quả/tháng: 5.800.000đ',
    description: 'Off-Grid | 1 pha | JA 110 | solis 110 | easyway 50',
    features: [
      'Công suất: 15.6 kW',
      'Hệ điện: 1 pha',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1600-1900 kwh/tháng',
      'Diện tích lắp đặt: 78 m2'
    ],
    mostPopular: false,
  },
  {
    name: '10.2 kW - 3 pha áp thấp',
    id: 'tier-102-3p-low',
    href: '#',
    price: '150.300.000',
    hoiVon: 'Hoàn vốn: 40 tháng',
    hieuQua: 'Hiệu quả/tháng: 3.800.000đ',
    description: 'Off-Grid | 3 pha | JA 110 | Solis 120 | easyway 50 - Áp thấp',
    features: [
      'Công suất: 10.2 kW',
      'Hệ điện: 3 pha áp thấp',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1000-1300 kwh/tháng',
      'Diện tích lắp đặt: 51 m2'
    ],
    mostPopular: false,
  },
  {
    name: '10.2 kW - 3 pha áp cao',
    id: 'tier-102-3p-high',
    href: '#',
    price: '173.800.000',
    hoiVon: 'Hoàn vốn: 46 tháng',
    hieuQua: 'Hiệu quả/tháng: 3.800.000đ',
    description: 'Off-Grid | 3 pha | JA 110 | Solis 100 | easyway 100 - Áp cao',
    features: [
      'Công suất: 10.2 kW',
      'Hệ điện: 3 pha áp cao',
      'Pin lưu trữ Lithium',
      'Sản lượng: 1000-1300 kwh/tháng',
      'Diện tích lắp đặt: 51 m2'
    ],
    mostPopular: true,
  },
]


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

type Frequency = typeof frequencies[number]

// Thêm style để fix chiều cao cho card
const cardStyle = {
  height: '100%', // Đảm bảo card có chiều cao 100%
  display: 'flex',
  flexDirection: 'column' as const
}

export default function Example() {
  const [frequency, setFrequency] = useState<Frequency>(frequencies[0])
  const currentDate = new Date()
  const priceMonth = currentDate.toLocaleString('vi-VN', { month: 'numeric', year: 'numeric' })

  const [isAutoSwitching, setIsAutoSwitching] = useState(true)

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 640 // sm breakpoint

    let intervalId: NodeJS.Timeout | null = null
    
    if (isLargeScreen && isAutoSwitching) {
      intervalId = setInterval(() => {
        setFrequency(prev => 
          prev.value === 'ongrid' ? frequencies[1] : frequencies[0]
        )
      }, 5000) // Chuyển đổi mỗi 5 giây
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoSwitching])

  const handleMouseEnter = () => setIsAutoSwitching(false)
  const handleMouseLeave = () => setIsAutoSwitching(true)

  const items: TabsProps['items'] = frequencies.map((freq) => ({
    key: freq.value,
    label: freq.label,
  }))

  const handleTabChange = (key: string) => {
    const newFrequency = frequencies.find(f => f.value === key)
    if (newFrequency) {
      setFrequency(newFrequency)
    }
  }

  return (
    <div className="bg-white py-2 sm:py-4 hidden md:block">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Điện Mặt Trời Gia Đình
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Giải pháp điện mặt trời thông minh cho mọi gia đình! Với công nghệ tiên tiến và 
              thiết kế tối ưu, chúng tôi mang đến hệ thống điện mặt trời giúp:
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Giảm đến 90% hóa đơn tiền điện, tối ưu chi phí sinh hoạt hàng tháng
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Hoàn vốn nhanh trong 4 - 5 năm, hiệu quả đầu tư dài hạn
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Bảo vệ môi trường, sử dụng nguồn năng lượng tái tạo, giảm khí thải CO₂
              </p>
              <p className="flex items-center gap-x-2 text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Hoạt động bền bỉ, cung cấp điện ổn định, an toàn cho cả gia đình
              </p>
              <p className="mt-2 text-green-600 font-medium">
                👉 Tiết kiệm hơn - Xanh hơn - An toàn hơn!
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <VideoSolar/>  
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-between items-center">
          <div 
            className="flex gap-x-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                setFrequency(frequencies[0])
              }}
              className={classNames(
                'rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200',
                frequency.value === 'ongrid'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                'min-w-[120px]'
              )}
            >
              Hệ Bám Tải
            </button>
            
            <button
              onClick={() => {
                setFrequency(frequencies[1])
              }}
              className={classNames(
                'rounded-lg py-2 px-6 text-sm font-semibold transition-all duration-200',
                frequency.value === 'hybrid'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                'min-w-[120px]'
              )}
            >
              Hệ Hybrid
            </button>
          </div>

          <a
            href="/he-gia-dinh"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all duration-200"
          >
            Xem tất cả sản phẩm
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>

        <div className="hidden sm:block">
          <div className="isolate mx-auto mt-4 sm:mt-6 grid max-w-md grid-cols-2 gap-3 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {(frequency.value === 'ongrid' ? ongridTiers : hybridTiers).map((tier) => (
              <div
                key={tier.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classNames(
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
                  'rounded-3xl px-4 py-3',
                )}
                style={cardStyle}
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
                        {tier.hoiVon.split(': ')[1]}
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
                        {tier.hieuQua.split(': ')[1]}
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {(frequency.value === 'ongrid' ? ongridTiers : hybridTiers).map((tier) => (
              <SwiperSlide 
                key={tier.id}
                className="!w-[320px] pt-4 pb-8 h-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
                    'rounded-3xl px-4 py-3 h-full',
                  )}
                  style={cardStyle}
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
                          {tier.hoiVon.split(': ')[1]}
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
                          {tier.hieuQua.split(': ')[1]}
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
