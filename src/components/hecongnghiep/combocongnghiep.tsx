import { useState } from 'react'
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
} from '@heroicons/react/20/solid'

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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    priceSuffix: 'đ',
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
    image: "/images/on-grid.png"
  },
  hybrid: {
    title: "Hệ thống điện mặt trời độc lập (Hybrid) 3 pha áp cao",
    content: "Hệ thống điện mặt trời Hybrid cho doanh nghiệp, có tích hợp Pin lưu trữ EASYWAY, cho phép vận hành độc lập với lưới điện. Phù hợp với các doanh nghiệp cần nguồn điện ổn định 24/7, hoặc hoạt động cả ban đêm.",
    image: "/images/off-grid.png"
  }
} as const

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

type Frequency = typeof frequencies[number]

export default function Example() {
  const currentDate = new Date()
  const priceMonth = currentDate.toLocaleString('vi-VN', { month: 'numeric', year: 'numeric' })

  return (
    <div className="bg-white py-2 sm:py-4">
      <div className="mx-auto container px-6 lg:px-8">
      <div className="text-center mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Điện Mặt Trời Công Nghiệp
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Giải pháp năng lượng sạch, tiết kiệm chi phí cho doanh nghiệp
          </p>
        </div>
        {/* Phần On-Grid */}
        <div className="mb-16">
          <div className="lg:flex lg:items-center lg:gap-x-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h2 className="text-red-600 text-base/7 font-semibold">Bảng Giá</h2>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                {descriptions.ongrid.title}
              </p>
              <p className="mx-auto mt-2 text-lg/8 text-gray-600">
                {descriptions.ongrid.content}
              </p>
            </div>
            <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <img
                src={descriptions.ongrid.image}
                alt={descriptions.ongrid.title}
                className="mx-auto w-[32rem] max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {ongridTiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular 
                    ? `ring-2 ${
                        'ring-red-600 bg-red-50'
                      } shadow-xl relative` 
                    : `ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:ring-red-200`,
                  'rounded-3xl px-4 py-3',
                )}
              >
                {tier.mostPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap bg-red-600 text-white`}>
                    <FireIcon className="h-4 w-4" />
                    Bán chạy
                  </div>
                )}
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-red-600' : 'text-gray-900',
                    'text-base/7 font-semibold py-2 text-center'  ,
                  )}
                >
                 
                  {tier.name}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-red-50 hover:bg-red-100'
                    )}
                  >
                    <ClockIcon 
                      className={`h-5 w-5 text-red-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hoàn vốn</span>
                      <p className={`text-sm font-semibold text-red-600`}>
                        5 năm
                      </p>
                    </div>
                  </button>
                  
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-red-50 hover:bg-red-100'
                    )}
                  >
                    <SparklesIcon 
                      className={`h-5 w-5 text-red-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                      <p className={`text-sm font-semibold text-red-600`}>
                        800.000đ
                      </p>
                    </div>
                  </button>
                </div>
                <p className="mt-6 flex flex-col">
                  <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                  <span className="flex items-baseline gap-x-1">
                    <span className={classNames(
                      "text-3xl sm:text-4xl font-semibold tracking-tight",
                      'text-red-600'
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-sm sm:text-base/7 font-semibold text-gray-600">{tier.priceSuffix}</span>
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? `bg-red-600 text-white hover:bg-red-500 hover:scale-105 hover:shadow-lg`
                      : `text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:ring-red-300 hover:scale-105`,
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                    'transform transition-all duration-200 ease-in-out',
                    'focus-visible:outline-2 focus-visible:outline-offset-2',
                    'focus-visible:outline-red-600'
                  )}
                >
                  Xem chi tiết
                </a>
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
                          className={`h-5 w-5 flex-none text-red-600`} 
                        />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Phần Hybrid */}
        <div className="mt-16">
          <div className="lg:flex lg:items-center lg:gap-x-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h2 className="text-green-600 text-base/7 font-semibold">Bảng Giá</h2>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                {descriptions.hybrid.title}
              </p>
              <p className="mx-auto mt-2 text-lg/8 text-gray-600">
                {descriptions.hybrid.content}
              </p>
            </div>
            <div className="mt-4 sm:mt-8 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <img
                src={descriptions.hybrid.image}
                alt={descriptions.hybrid.title}
                className="mx-auto w-[32rem] max-w-full drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {hybridTiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular 
                    ? `ring-2 ${
                        'ring-green-600 bg-green-50'
                      } shadow-xl relative` 
                    : `ring-1 ring-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:ring-green-200`,
                  'rounded-3xl px-4 py-3',
                )}
              >
                {tier.mostPopular && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center justify-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap bg-green-600 text-white`}>
                    <FireIcon className="h-4 w-4" />
                    Bán chạy
                  </div>
                )}
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-green-600' : 'text-gray-900',
                    'text-base/7 font-semibold py-2 text-center'  ,
                  )}
                >
                 
                  {tier.name}
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row gap-2">
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <ClockIcon 
                      className={`h-5 w-5 text-green-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hoàn vốn</span>
                      <p className={`text-sm font-semibold text-green-600`}>
                        5 năm
                      </p>
                    </div>
                  </button>
                  
                  <button 
                    className={classNames(
                      'w-full sm:flex-1 rounded-lg px-2 py-1',
                      'flex items-center gap-x-2',
                      'transition-all duration-200',
                      'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <SparklesIcon 
                      className={`h-5 w-5 text-green-500`}
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Hiệu quả/tháng</span>
                      <p className={`text-sm font-semibold text-green-600`}>
                        1.400.000đ
                      </p>
                    </div>
                  </button>
                </div>
                <p className="mt-6 flex flex-col">
                  <span className="text-sm text-gray-500">Giá niêm yết T{priceMonth}</span>
                  <span className="flex items-baseline gap-x-1">
                    <span className={classNames(
                      "text-3xl sm:text-4xl font-semibold tracking-tight",
                      'text-green-600'
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-sm sm:text-base/7 font-semibold text-gray-600">{tier.priceSuffix}</span>
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? `bg-green-600 text-white hover:bg-green-500 hover:scale-105 hover:shadow-lg`
                      : `text-green-600 ring-1 ring-green-200 hover:bg-green-50 hover:ring-green-300 hover:scale-105`,
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold',
                    'transform transition-all duration-200 ease-in-out',
                    'focus-visible:outline-2 focus-visible:outline-offset-2',
                    'focus-visible:outline-green-600'
                  )}
                >
                  Xem chi tiết
                </a>
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
                          className={`h-5 w-5 flex-none text-green-600`} 
                        />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
