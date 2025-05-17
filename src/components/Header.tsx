import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// Định nghĩa kiểu cho các mục menu
interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon_img: string;
  submenu?: Array<{
    name: string;
    description: string;
    href: string;
  }>;
}

const products = [
  { 
    name: 'Hệ gia đình', 
    description: 'Nhỏ gọn, tiết kiệm, chủ động nguồn điện sạch', 
    href: '/he-gia-dinh', icon: ChartPieIcon,
    icon_img:"icon-he-gia-dinh.svg"

   },
  { 
    name: 'Hệ công nghiệp', 
    description: 'Bền vững, ổn định, tối ưu chi phí năng lượng', 
    href: '/he-cong-nghiep', 
    icon: CursorArrowRaysIcon,
    icon_img:"icon-he-cong-nghiep.svg"

  },
  { 
    name: 'Thiết bị', 
    description: 'Chuẩn quốc tế, nâng tầm hiệu suất điện mặt trời', 
    href: '/thiet-bi', 
    icon: FingerPrintIcon ,
    icon_img:"icon-thiet-bi.svg"

  },
  
]
const giaiphap = [
  { 
    name: 'Giải pháp thi công mái tôn', 
    description: 'Giải pháp lắp đặt điện mặt trời tối ưu cho mái tôn', 
    href: '/giai-phap/mai-ton', 
    icon: SquaresPlusIcon, 
    icon_img:"icon-mai-ton.svg"
  },
  { 
    name: 'Giải pháp thi công mái bê tông', 
    description: 'Hệ thống điện mặt trời chuyên dụng cho mái bê tông', 
    href: '/giai-phap/mai-be-tong', 
    icon: SquaresPlusIcon ,
    icon_img:"icon-mai-be-tong.svg"

  },
  { 
    name: 'Giải pháp thi công mái ngói', 
    description: 'Lắp đặt điện mặt trời an toàn trên mái ngói', 
    href: '/giai-phap/mai-ngoi', 
    icon: SquaresPlusIcon ,
    icon_img:"icon-mai-ngoi.svg"

  },
  { 
    name: 'Giải pháp vệ sinh tấm pin', 
    description: 'Dịch vụ bảo trì và vệ sinh hệ thống điện mặt trời', 
    href: '/giai-phap/ve-sinh-tam-pin', 
    icon: ArrowPathIcon ,
    icon_img:"icon-ve-sinh-tam-pin.svg"

  },
]
const gioithieu: MenuItem[] = [
  { 
    name: 'Giới thiệu về SoLarMax', 
    description: 'Sứ mệnh - Tầm nhìn - Giá trị cốt lõi', 
    href: '/gioi-thieu', 
    icon: ChartPieIcon,
    icon_img:"icon-gioi-thieu.svg"
  },
  { name: 'Các dự án tiêu biểu',
     description: 'Điện năng lượng mặt trời', 
     href: '/du-an', 
     icon: ChartPieIcon,
     icon_img:"icon-du-an.svg"
    },


  { name: 'Blog', 
    description: 'Tin tức và bài viết', 
    href: '/blog', 
    icon: FingerPrintIcon,
    icon_img:"icon-blog.svg",
    submenu: [
      {
        name: 'Hiểu đúng mua đúng',
        description: 'Kiến thức cần biết khi lắp điện mặt trời',
        href: '/blog/hieu-dung-mua-dung'
      },
      {
        name: 'Review Solarmax',
        description: 'Đánh giá từ khách hàng',
        href: '/blog/review-solarmax'
      },
      {
        name: 'Hỏi xoay hỏi xoáy',
        description: 'Giải đáp thắc mắc về điện mặt trời',
        href: '/blog/hoi-xoay-hoi-xoay'
      },
      {
        name: 'Em biết không',
        description: 'Tìm hiểu về Solarmax',
        href: '/blog/em-biet-khong'
      },
     
    ]
  }
]
const callsToAction = [
  { name: 'Xem video', href: 'https://www.tiktok.com/@solarmax87', icon: PlayCircleIcon },
  { name: 'Liên hệ tư vấn', href: 'tel:+84964920242', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`hidden md:block md:fixed relative top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white md:bg-transparent ${
      isScrolled ? 'md:bg-white md:shadow-md' : ''
    }`}>
      <nav aria-label="Global" className="mx-auto flex container items-center justify-between p-3 md:p-6 lg:px-8 lg:py-2">
        <div className="lg:w-48">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Solarmax</span>
            <img
              alt=""
              src="/images/logo-solarmax.svg"
              className="lg:hidden h-5 w-auto"
            />
            <img
              alt=""
              src={isScrolled ? "/images/logo-solarmax.svg" : "/images/logo-solarmax-white.svg"}
              className="hidden lg:block h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 justify-center">
          <div className="bg-white rounded-full">
            <PopoverGroup className="flex gap-x-8 p-4 rounded-full">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Sản phẩm & Dịch vụ
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute top-full -left-8 z-30 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <img src={`/images/${item.icon_img}`} alt={item.name} className="size-12 text-gray-600 group-hover:text-green-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Giải pháp
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {giaiphap.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <img src={`/images/${item.icon_img}`} alt={item.name} className="size-12 text-gray-600 group-hover:text-green-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                  Giới thiệu
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {gioithieu.map((item) => (
                      <div key={item.name}>
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <img src={`/images/${item.icon_img}`} alt={item.name} className="size-12 text-gray-600 group-hover:text-green-600" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              {!item.submenu && <span className="absolute inset-0" />}
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        {item.submenu && (
                          <div className="ml-16 mt-2 space-y-1 border-l-2 border-gray-100 ">
                            {item.submenu.map((subitem) => (
                              <a
                                key={subitem.name}
                                href={subitem.href}
                                className="block border-l-2 border-transparent pl-4 hover:border-green-500"
                              >
                                <div className="rounded-r-lg py-2 pl-2 pr-3 hover:bg-gray-50">
                                  <p className="font-medium text-gray-900">{subitem.name}</p>
                                  <p className="mt-1 text-sm text-gray-600">{subitem.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <a href="/lien-he" className="text-sm/6 font-semibold text-gray-900">
                Liên hệ
              </a>
            </PopoverGroup>
          </div>
        </div>
        <div className="hidden lg:block lg:w-32">
          <div className="relative group">
            <a href="tel:0964920242" target="_blank" rel="noopener noreferrer" type="button" className="flex items-center gap-x-2 text-white drop-shadow-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Báo giá
            </a>

            <div className="absolute z-40 right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <a href="tel:0964920242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg className="size-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  Gọi điện
                </a>
                <a href="mailto:sale@solarmax.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email
                </a>
                <a href="https://zalo.me/0964920242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                    <path fill="#0068ff" d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23s23-10.318,23-23S37.682,2,25,2z M35.7,32.2h-6.4 c-0.5,0-0.9-0.4-0.9-0.9v-4.7c0-0.5-0.4-0.9-0.9-0.9h-4.7c-0.5,0-0.9,0.4-0.9,0.9v4.7c0,0.5-0.4,0.9-0.9,0.9h-6.4 c-0.5,0-0.9-0.4-0.9-0.9V18.7c0-0.5,0.4-0.9,0.9-0.9h6.4c0.5,0,0.9,0.4,0.9,0.9v4.7c0,0.5,0.4,0.9,0.9,0.9h4.7 c0.5,0,0.9-0.4,0.9-0.9v-4.7c0-0.5,0.4-0.9,0.9-0.9h6.4c0.5,0,0.9,0.4,0.9,0.9v12.6C36.6,31.8,36.2,32.2,35.7,32.2z"/>
                  </svg>
                  Nhắn Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Solarmax</span>
              <img
                alt=""
                src="/images/logo-solarmax.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Sản phẩm & Dịch vụ
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              
              </div>
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Giải pháp
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...giaiphap].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              
              </div>
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Giới thiệu
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...gioithieu].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              
              </div>
            
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
