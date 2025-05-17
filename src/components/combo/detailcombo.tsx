import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { CheckIcon, PaperClipIcon, StarIcon, HandThumbUpIcon, UserIcon, WrenchScrewdriverIcon, ClipboardDocumentCheckIcon, Square2StackIcon, BanknotesIcon, RectangleGroupIcon, PhoneIcon, ChatBubbleLeftRightIcon, TagIcon } from '@heroicons/react/20/solid';
import { Image, Modal, Carousel } from 'antd';

interface Product {
    title: string;
    soluong: string;
    dvt: string;
    logo: string;
    image: string;
    savingsPerMonth?: string;
    area?: string;
}

interface ComboPage {
    title: string;
    subtitle: string;
    price: string;
    image: string;
    equipments: Equipment[];
    aqitems: AQItem[];
    galleryImages: GalleryImage[];
    reviews: Reviews;
    specs: Spec[];
    highlights: string[];
}

interface AQItem {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    buttonLink: string;
    savingsPerMonth: string;
    area: string;
}

interface Review {
    id: number;
    rating: number;
    content: string;
    author: string;
    avatarSrc: string;
}

interface Reviews {
    average: number;
    totalCount: number;
    counts: { rating: number; count: number; }[];
    featured: Review[];
}

interface GalleryImage {
    src: string;
    alt: string;
}

interface Equipment {
    id: number;
    title: string;
    logo: string;
    logoAlt: string;
    quantity: string;
    image: string;
    mainimage: string;
    featured?: boolean;
}

interface Spec {
    value: string;
    label: string;
}

interface CustomerReviews {
    rating: number;
    totalReviews: number;
    testimonial: string;
    avatars: string[];
}

interface DetailComboProps {
    combopage: ComboPage[];
    customerReviews?: CustomerReviews;
}

const timeline = [
    {
        id: 1,
        content: 'Khảo sát và tư vấn',
        description: 'Đội ngũ kỹ thuật khảo sát thực tế, tư vấn giải pháp phù hợp',
        icon: UserIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 2,
        content: 'Thiết kế hệ thống',
        description: 'Thiết kế chi tiết, tối ưu hiệu suất và thẩm mỹ công trình',
        icon: ClipboardDocumentCheckIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 3,
        content: 'Thi công lắp đặt',
        description: 'Đội ngũ kỹ thuật chuyên nghiệp, đảm bảo an toàn tuyệt đối',
        icon: WrenchScrewdriverIcon,
        iconBackground: 'bg-red-500',
    },
    {
        id: 4,
        content: 'Kiểm tra và nghiệm thu',
        description: 'Kiểm tra kỹ thuật toàn diện, đảm bảo vận hành ổn định',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-indigo-500',
    },
    {
        id: 5,
        content: 'Bàn giao và hướng dẫn sử dụng',
        description: 'Hướng dẫn sử dụng chi tiết, hỗ trợ kỹ thuật 24/7',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const DetailCombo: FC<DetailComboProps> = ({ combopage, customerReviews }) => {
    const [currentImage, setCurrentImage] = useState(combopage[0].image);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const equipments = combopage[0].equipments;
    const reviews = combopage[0].reviews;
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        // Set initial width
        setWindowWidth(window.innerWidth);

        // Update width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleProductClick = (productImage: string) => {
        setCurrentImage(productImage);
    };

    const handleImageClick = (image: string) => {
        // Chỉ mở modal nếu màn hình nhỏ hơn 640px (sm breakpoint)
        if (windowWidth < 640) {
            setModalImage(image);
            setIsModalOpen(true);
        }
    };

    return (
        <div className="bg-white">
            <Modal
                open={isModalOpen}
                footer={null}
                onCancel={() => setIsModalOpen(false)}
                width="max-content"
                centered
            >
                <img
                    src={modalImage}
                    alt="Preview"
                    style={{ maxWidth: '100%', maxHeight: '80vh' }}
                />
            </Modal>
            <div className="mx-auto max-w-2xl bg-gray-100 px-4 pt-4 pb-4 sm:px-6 sm:pt-8 sm:pb-6 sm:rounded-lg sm:shadow-md lg:grid lg:container lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:mt-40">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{combopage[0].title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">Thông tin sản phẩm</h2>

                        <div className="flex items-center">
                            {/* Giá sản phẩm */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <p className="text-3xl font-extrabold text-red-600">
                                        {parseFloat(combopage[0].price).toLocaleString('vi-VN')}
                                        <span className="text-xl">₫</span>
                                    </p>
                                </div>
                                <p className="text-sm text-green-600 font-medium">
                                    Tiết kiệm điện
                                    <span className="text-lg font-bold ml-1">2-3 triệu</span>
                                    <span className="ml-1">đồng/tháng</span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">{combopage[0].subtitle}</p>
                        </div>

                        <div className="mt-6 space-y-3">
                            {combopage[0].highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center">
                                    <CheckIcon className="size-5 shrink-0 text-green-500" />
                                    <p className="ml-2 text-sm text-gray-500">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Product image and specs */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
                        <img
                            src={currentImage}
                            alt={combopage[0].title}
                            className="w-full rounded-lg object-contain"
                            style={{ aspectRatio: '1/1' }}
                        />
                    </div>
                    
                    {/* Quick specs under image */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        {combopage[0].specs.map((spec, index) => (
                            <div key={index} className="rounded-lg border border-gray-200 bg-white p-4">
                                <span className="block text-lg font-semibold text-gray-900">{spec.value}</span>
                                <span className="text-sm text-gray-500">{spec.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">Product options</h2>

                        <div className="mt-4">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Trên mobile (< sm) hiển thị tất cả */}
                                <div className="block sm:hidden">
                                    {equipments.map((equipment) => (
                                        <div 
                                            key={equipment.title} 
                                            className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer mb-4"
                                            onMouseEnter={() => handleProductClick(equipment.mainimage)}
                                            onMouseLeave={() => handleProductClick(combopage[0].image)}
                                            onClick={() => handleImageClick(equipment.mainimage)}
                                        >
                                            <div className="flex gap-4">
                                                {/* Left column - Image and logo */}
                                                <div className="flex flex-col items-center gap-2 w-24">
                                                    <img
                                                        className="w-20 h-20 object-contain"
                                                        src={equipment.image}
                                                        alt={equipment.title}
                                                    />
                                                    <img
                                                        className="max-h-6 max-w-[80px] w-auto h-auto object-contain"
                                                        src={equipment.logo}
                                                        alt={equipment.logoAlt}
                                                    />
                                                </div>

                                                {/* Right column - Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                                                        {equipment.title}
                                                    </h3>
                                                    <div className="rounded-md bg-red-100 px-2 py-1 text-center w-fit">
                                                        <span className="text-sm text-red-600">{equipment.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Trên PC (sm+) hiển thị 2 cột featured items */}
                                <div className="hidden sm:grid grid-cols-2 gap-4">
                                    {equipments
                                        .filter(equipment => equipment.featured)
                                        .map((equipment) => (
                                            <div 
                                                key={equipment.title} 
                                                className="relative flex flex-col rounded-lg border border-gray-200 bg-white p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                                onMouseEnter={() => handleProductClick(equipment.mainimage)}
                                                onMouseLeave={() => handleProductClick(combopage[0].image)}
                                                onClick={() => handleImageClick(equipment.mainimage)}
                                            >
                                                <div className="flex gap-4">
                                                    {/* Left column - Image and logo */}
                                                    <div className="flex flex-col items-center gap-2 w-24">
                                                        <img
                                                            className="w-20 h-20 object-contain"
                                                            src={equipment.image}
                                                            alt={equipment.title}
                                                        />
                                                        <img
                                                            className="max-h-6 max-w-[80px] w-auto h-auto object-contain"
                                                            src={equipment.logo}
                                                            alt={equipment.logoAlt}
                                                        />
                                                    </div>

                                                    {/* Right column - Content */}
                                                    <div className="flex-1">
                                                        <h3 className="text-sm font-medium text-gray-900 mb-2">
                                                            {equipment.title}
                                                        </h3>
                                                        <div className="rounded-md bg-red-100 px-2 py-1 text-center w-fit">
                                                            <span className="text-sm text-red-600">{equipment.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <a href="tel:0964920242">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-md border-2 border-red-600 bg-white px-8 py-3 text-lg font-medium text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    <span className="sm:hidden">
                                        Liên hệ<br />tư vấn
                                    </span>
                                    <span className="hidden sm:flex items-center gap-2">
                                        <PhoneIcon className="h-5 w-5" />
                                        Liên hệ tư vấn
                                    </span>
                                </button>
                            </a>
                            <a href="https://zalo.me/0964920242" target="_blank">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-lg font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    <span className="sm:hidden">
                                        Nhận<br />báo giá
                                    </span>
                                    <span className="hidden sm:flex items-center gap-2">
                                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                                        Nhận báo giá
                                    </span>
                                </button>
                            </a>
                        </div>

                          {/* Customer reviews section */}
            <div className="hidden sm:block mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-x-4">
                    <div className="flex -space-x-2">
                        {reviews.featured.slice(0, 4).map((review, index) => (
                            <div 
                                key={index}
                                className="w-8 h-8 rounded-full border-2 border-white bg-red-100 flex items-center justify-center"
                            >
                                <span className="text-xs font-medium text-red-600">
                                    {review.author.split(' ').map(word => word[0]).slice(-2).join('')}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row items-center gap-x-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                    key={i} 
                                    className={`w-4 h-4 ${i < reviews.average ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold">{reviews.average}/5</span> 
                            từ hơn 
                            <span className="font-semibold"> {reviews.totalCount}+</span> 
                            khách hàng
                        </div>
                    </div>
                </div>

                <Carousel
                    autoplay
                    dots={false}
                    className="mt-3"
                    autoplaySpeed={5000}
                >
                    {reviews.featured.map((review, index) => (
                       <p key={index} className="text-sm text-gray-600 italic px-4">
                            "{review.content}"
                        </p>
                    ))}
                </Carousel>
            </div>
                    </section>
                </div>
            </div>

          

            {/* Reviews and Specifications section */}
            <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
                    {/* Danh mục thiết bị - Left column - Ẩn trên mobile */}
                    <div className="hidden sm:block lg:col-span-7">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Danh mục thiết bị</h3>
                        
                        <dl className="mt-4 divide-y divide-gray-100 border border-gray-200 rounded-lg bg-white p-6 shadow-sm">
                            {equipments.map((equipment, index) => (
                                <div key={equipment.id} className="px-2 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-0 first:pt-0 last:pb-0">
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-1">{index + 1}</dt>
                                    <dt className="text-sm font-medium text-gray-900 sm:col-span-7">{equipment.title}</dt>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-2">
                                        <img src={equipment.logo} alt={equipment.logoAlt} className="h-5 w-auto" />
                                    </dd>
                                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{equipment.quantity}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Quy trình triển khai - Right column */}
                    <div className="mt-2 sm:mt-16 lg:mt-0 lg:col-span-5">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Quy trình triển khai
                        </h2>
                        <div className="mt-6 flow-root">
                            <ul role="list" className="-mb-8">
                                {timeline.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className="relative pb-8">
                                            {eventIdx !== timeline.length - 1 ? (
                                                <span
                                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            <div className="relative flex gap-6">
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            event.iconBackground,
                                                            'flex size-8 items-center justify-center rounded-full ring-8 ring-white'
                                                        )}
                                                    >
                                                        <event.icon className="size-5 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{event.content}</p>
                                                        <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thư viện ảnh thực tế section */}
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Hình ảnh thực tế
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {combopage[0].galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-[4/3] group overflow-hidden rounded-xl border border-gray-200">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full"
                                style={{ 
                                    aspectRatio: '4/3',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                                preview={{
                                    mask: (
                                        <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-10 flex items-center justify-center">
                                            <span className="text-white">Xem</span>
                                        </div>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dự án tham khảo section */}
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 pb-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Dự án đã triển khai
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {combopage[0].aqitems.map((item) => (
                        <div key={item.heading} className="group relative">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={item.imgSrc}
                                    alt={item.imgAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="mt-4 space-y-2">
                                <h3 className="text-sm text-gray-700 line-clamp-2">
                                    <a href={item.buttonLink} target="_blank">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {item.heading}
                                    </a>
                                </h3>
                                {/* Thêm thông tin chi phí và diện tích */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <BanknotesIcon className="h-4 w-4 text-green-600" />
                                        <span className="text-gray-600 text-xs sm:text-sm">Tiết kiệm: </span>
                                        <span className="font-medium text-green-600 text-xs sm:text-sm">{item.savingsPerMonth}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RectangleGroupIcon className="h-4 w-4 text-blue-600" />
                                        <span className="text-gray-600 text-xs sm:text-sm">Diện tích: </span>
                                        <span className="font-medium text-blue-600 text-xs sm:text-sm">{item.area}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Đánh giá khách hàng section - moved down */}
            <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
                    Đánh giá từ khách hàng
                </h2>

                <div className="mt-3 flex items-center">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={`size-5 shrink-0 ${
                                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-900">
                        <span className="font-medium">{reviews.average}</span>
                        <span className="mx-1">trên</span>
                        <span className="font-medium">5</span>
                        <span className="mx-1">•</span>
                        <span>{reviews.totalCount} đánh giá</span>
                    </p>
                </div>

                <div className="mt-8 flow-root">
                    <div className="-my-6 divide-y divide-gray-100">
                        {reviews.featured.map((review) => (
                            <div key={review.id} className="py-6">
                                <div className="flex items-center">
                                    {/* Avatar với 2 ký tự đầu */}
                                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <span className="text-sm font-medium text-red-600">
                                            {review.author.split(' ').map(word => word[0]).slice(-2).join('')}
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={`size-4 shrink-0 ${
                                                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-700">{review.author}</p>
                                    </div>
                                </div>
                                <div 
                                    className="mt-4 text-sm text-gray-700 space-y-4"
                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-lg font-medium text-gray-900">Chia sẻ đánh giá của bạn</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Nếu bạn đã sử dụng sản phẩm này, hãy chia sẻ trải nghiệm với những khách hàng khác
                    </p>

                    <a
                        href="#"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                    >
                        Viết đánh giá
                    </a>
                </div>
            </div>
        </div>
    );
};
