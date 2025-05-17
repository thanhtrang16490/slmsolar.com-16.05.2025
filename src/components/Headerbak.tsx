import { useState } from 'react'
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

const products = [
  { 
    name: 'Hệ gia đình', 
    description: 'Hệ nhỏ cho gia đình tối ưu chi phí điện', 
    href: '/he-gia-dinh', icon: ChartPieIcon,
    icon_img:"icon-he-gia-dinh.svg"

   },
  { 
    name: 'Hệ công nghiệp', 
    description: 'Hệ lớn cho nhà xưởng, toà nhà, trang trại', 
    href: '/he-cong-nghiep', 
    icon: CursorArrowRaysIcon,
    icon_img:"icon-he-cong-nghiep.svg"

  },
  { 
    name: 'Thiết bị', 
    description: 'Thiết bị điện năng lượng mặt trời', 
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
const gioithieu = [
  { 
    name: 'Giới thiệu về SoLarMax', 
    description: 'Sứ mệnh - Tầm nhìn - Giá trị cốt lõi', 
    href: '/gioi-thieu', 
    icon: ChartPieIcon ,
    icon_img:"icon-gioi-thieu.svg"

  },
  { name: 'Các dự án tiêu biểu',
     description: 'Điện năng lượng mặt trời', 
     href: '/du-an', 
     icon: ChartPieIcon ,
     icon_img:"icon-du-an.svg"
    },


  { name: 'Blog', 
    description: 'Tin tức và bài viết', 
    href: '/blog', 
    icon: FingerPrintIcon ,
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
        name: 'Em là ai',
        description: 'Tìm hiểu về Solarmax',
        href: '/blog/em-la-ai'
      },
     
    ]
  },
 
]
const callsToAction = [
  { name: 'Xem video', href: '#', icon: PlayCircleIcon },
  { name: 'Liên hệ tư vấn', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex container items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Solarmax</span>
            <img
              alt=""
              src="/images/logo-solarmax.svg"
              className="lg:h-8 h-5 w-auto"
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
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
                      <div className="ml-16 mt-2 space-y-1 border-l-2 border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative group">
            <a href="tel:0964920242" type="button" className="flex items-center gap-x-2 text-white drop-shadow-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Yêu cầu báo giá
            </a>

            <div className="absolute z-40 right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <a href="tel:0964920242" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg className="size-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
                  Gọi điện
                </a>
                <a href="mailto:info@solarmax.vn" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  Email
                </a>
                <a href="https://zalo.me/0964920242" target="_blank" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                    <path fill="#0068ff" d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23s23-10.318,23-23S37.682,2,25,2z M35.7,32.2h-6.4 c-0.5,0-0.9-0.4-0.9-0.9v-4.7c0-0.5-0.4-0.9-0.9-0.9h-4.7c-0.5,0-0.9,0.4-0.9,0.9v4.7c0,0.5-0.4,0.9-0.9,0.9h-6.4 c-0.5,0-0.9-0.4-0.9-0.9V18.7c0-0.5,0.4-0.9,0.9-0.9h6.4c0.5,0,0.9,0.4,0.9,0.9v4.7c0,0.5,0.4,0.9,0.9,0.9h4.7 c0.5,0,0.9-0.4,0.9-0.9v-4.7c0-0.5,0.4-0.9,0.9-0.9h6.4c0.5,0,0.9,0.4,0.9,0.9v12.6C36.6,31.8,36.2,32.2,35.7,32.2z"/>
                  </svg>
                  Nhắn Zalo
                </a>
                <a href="https://wa.me/84964920242" target="_blank" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="https://m.me/solarmax87" target="_blank" className="flex items-center gap-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#0084FF" d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.544 3.695 7.241v3.516l3.373-1.851c.92.256 1.904.394 2.932.394 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.085 12.37l-2.523-2.697-4.924 2.697 5.416-5.751 2.523 2.697 4.924-2.697-5.416 5.751z"/>
                  </svg>
                  Messenger
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
