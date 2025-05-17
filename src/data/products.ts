export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  specs: {
    brand?: string;
    technology?: string;
    cell?: string;
    power?: string;
    dimensions?: string;
    weight?: string;
    protection?: string;
    efficiency?: string;
    capacity?: string;
    cellType?: string;
    voltage?: string;
    installation?: string;
    maxPacks?: string;
    features?: string[];
    components?: string[];
    type?: string;
    material?: string;
    resistance?: string;
    standards?: string;
    dcInput?: string;
    batteryVoltage?: string;
    maxDC?: string;
    additionalFeature?: string;
    thuonghieu?: string;
  };
  image?: string;
}

export const sampleProducts: Product[] = [
  // Pin quang năng
  {
    id: "1",
    name: "Pin năng lượng mặt trời JA Solar JAM72D40 535W",
    description: "Pin năng lượng mặt trời JA Solar JAM72D40 535W là sản phẩm cao cấp với hiệu suất cao và độ bền vượt trội.",
    category: "Pin quang năng",
    specs: {
      brand: "JA Solar",
      technology: "PERC",
      cell: "182mm",
      power: "535W",
      dimensions: "2278 x 1134 x 35mm",
      weight: "28.5kg",
      protection: "IP68",
      efficiency: "21.3%"
    }
  },
  {
    id: "2",
    name: "Pin năng lượng mặt trời Longi LR5-72HPH 545W",
    description: "Pin năng lượng mặt trời Longi LR5-72HPH 545W với công nghệ Hi-MO 5m mới nhất.",
    category: "Pin quang năng",
    specs: {
      brand: "Longi Solar",
      technology: "Hi-MO 5m",
      cell: "182mm",
      power: "545W",
      dimensions: "2278 x 1134 x 35mm",
      weight: "28.5kg",
      protection: "IP68",
      efficiency: "21.3%"
    }
  },
  // Biến tần
  {
    id: "3",
    name: "Biến tần Hybrid Growatt SPH 10000TL3 BH",
    description: "Biến tần Hybrid Growatt SPH 10000TL3 BH với công suất 10kW, tích hợp bộ sạc MPPT.",
    category: "Biến tần",
    specs: {
      brand: "Growatt",
      type: "Hybrid",
      dcInput: "2 MPPT",
      batteryVoltage: "48V",
      maxDC: "13000W",
      protection: "IP65"
    }
  },
  // Pin lưu trữ
  {
    id: "4",
    name: "Pin lưu trữ Pylontech US3000C 3.5kWh",
    description: "Pin lưu trữ Pylontech US3000C với dung lượng 3.5kWh, phù hợp cho hệ thống điện mặt trời gia đình.",
    category: "Pin lưu trữ",
    specs: {
      brand: "Pylontech",
      capacity: "3.5kWh",
      cellType: "LiFePO4",
      voltage: "48V",
      installation: "Rack mount",
      maxPacks: "16 units"
    }
  },
  // Phụ kiện
  {
    id: "5",
    name: "Tủ điện DC 1000V",
    description: "Tủ điện DC chuyên dụng cho hệ thống điện mặt trời, bảo vệ IP65.",
    category: "Phụ kiện",
    specs: {
      type: "DC Combiner Box",
      material: "Thép mạ kẽm",
      protection: "IP65",
      standards: "IEC 61439-1"
    }
  }
]; 