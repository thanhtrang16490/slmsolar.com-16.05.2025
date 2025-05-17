interface Partner {
  logo: string;
  name: string;
}

interface partners {
  partners: Partner[];
}

const partners = [
    { name: "ja-solar", logo: "/images/brand-ja-solar-logo.svg" },
    { name: "canadian-solar", logo: "https://scoullerenergy.com.au/images/canadian-solar.png" },
    { name: "longi-solar", logo: "https://shop.solar-kit.eu/storage/uploads/crtSm54pxUHf9zqwwlg00tCW1KRmYOeF2W58L8vs.png" },
    { name: "solis", logo: "/images/brand-solis-logo.svg" },
    { name: "invt", logo: "/images/brand-invt-logo.png" },
    { name: "growatt", logo: "https://pvgroup.pl/wp-content/uploads/2019/10/LogoGrowatt.png" },
    { name: "easyway", logo: "/images/brand-easyway-logo.svg" },
    { name: "tran-phu", logo: "/images/logo-tran-phu.png" },
    { name: "leader", logo: "https://vinasolution.com/wp-content/uploads/2021/01/logo-leader.jpg" },
    { name: "cadivi", logo: "https://cdn.haitrieu.com/wp-content/uploads/2023/11/Logo-Cong-Ty-Day-Cap-Dien-Viet-Nam.png" },
    { name: "pntech", logo: "https://pinmattroi.org/wp-content/uploads/2020/12/logo-pntech.png" },
    { name: "nival", logo: "https://nival.vn/uploads/data/5140/files/images/logo/logo-Nival-1.png" },
    { name: "ls", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/LS_logo.svg" },
    { name: "cadisun", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CADI-SUN.gif/1200px-CADI-SUN.gif" },
    { name: "aisikai", logo: "https://ilrorwxhkipjlm5p.leadongcdn.com/cloud/onBprKokRlkSqkrpqmlpk/LOGO-AISIKAIlanse.png" },
    { name: "vinacontrol", logo: "https://www.vinacontrol.com.vn/img/04%20Homepage_logo.png" },
    { name: "rsic", logo: "https://kiemdinhkhuvuc1.vn/wp-content/uploads/2020/10/logo-website-e1601584209799.png" },
    { name: "suntre", logo: "https://gg.lnwfile.com/_webp_max_images/300/300/li/pc/mo.webp" },
];

export default function DoiTac() {
  // Chia mảng partners thành 2 phần bằng nhau
  const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
  const secondRow = partners.slice(Math.ceil(partners.length / 2));

  return (
      <div className="relative isolate -z-10 mt-16 sm:mt-12 hidden md:block">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
      >
        <svg
          className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width="200"
              height="200"
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y="50%"
            className="overflow-visible fill-gray-50"
          >
            <path
              d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          />
        </svg>
      </div>
      <div className="mx-auto container px-6 lg:px-8">
        <h1 className="text-left tracking-tight text-4xl font-bold leading-10 text-gray-900 block sm:block lg:hidden">
          Đối tác
        </h1>
        <h1 className="text-center tracking-tight text-4xl font-bold leading-10 text-gray-900 hidden sm:hidden lg:block">
        Đối tác chiến lược của SolarMax
        </h1>
        <div className="relative overflow-hidden py-12">
          {/* First row - slides left */}
          <div className="flex animate-slide space-x-8 whitespace-nowrap mb-8">
            {[...firstRow, ...firstRow].map((partner, index) => (
              <img
                key={`${partner.name}-${index}-1`}
                className="h-12 w-auto object-contain inline-block"
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            ))}
          </div>
          
          {/* Second row - slides right */}
          <div className="flex animate-slide-reverse space-x-8 whitespace-nowrap">
            {[...secondRow, ...secondRow].map((partner, index) => (
              <img
                key={`${partner.name}-${index}-2`}
                className="h-12 w-auto object-contain inline-block"
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}