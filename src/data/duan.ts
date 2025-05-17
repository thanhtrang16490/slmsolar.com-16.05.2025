export interface Project {
  id: string;
  name: string;
  type: 'Hệ bám tải' | 'Hệ hybrid';
  capacity: string;
  storage?: string;
  location: string;
  image: string;
  slug: string;
  specs: {
    solar: {
      type: string;
      quantity: number;
      power: string;
    };
    inverter: {
      type: string;
      capacity: string;
    };
    battery?: {
      type: string;
      capacity: string;
    };
    performance: {
      paybackTime: string;
      savingPerMonth: string;
    };
  };
  images: string[];
}

export const projects: Project[] = [
  {
    id: '100',
    name: 'Dự án 100',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hải Dương',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-hai-duong-100',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '101',
    name: 'Dự án 101',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-101',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '300',
    name: 'Dự án 300',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hưng Yên',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-hung-yen-300',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '102',
    name: 'Dự án 102',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-102',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '103',
    name: 'Dự án 103',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hải Dương',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-hai-duong-103',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '331',
    name: 'Dự án 331',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-331',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '207',
    name: 'Dự án 207',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Lạng Sơn',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-lang-son-207',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '214',
    name: 'Dự án 214',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Bắc Giang',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-bac-giang-214',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '225',
    name: 'Dự án 225',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Phú Thọ',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-phu-tho-225',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '208',
    name: 'Dự án 208',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-208',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '252',
    name: 'Dự án 252',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-252',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '236',
    name: 'Dự án 236',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-236',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '211',
    name: 'Dự án 211',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-211',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '291',
    name: 'Dự án 291',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-291',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '312',
    name: 'Dự án 312',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-312',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '336',
    name: 'Dự án 336',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nam',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-nam-336',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '104',
    name: 'Dự án 104',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-104',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '345',
    name: 'Dự án 345',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-345',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '296',
    name: 'Dự án 296',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hải Dương',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-hai-duong-296',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '368',
    name: 'Dự án 368',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Lạng Sơn',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-lang-son-368',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '377',
    name: 'Dự án 377',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-377',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '393',
    name: 'Dự án 393',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Thái Bình',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-thai-binh-393',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '404',
    name: 'Dự án 404',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-404',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '512',
    name: 'Dự án 512',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Thanh Hóa',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-thanh-hoa-512',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '65',
    name: 'Dự án 65',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-65',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '503',
    name: 'Dự án 503',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-503',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '274',
    name: 'Dự án 274',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-274',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '385',
    name: 'Dự án 385',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-385',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '521',
    name: 'Dự án 521',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-521',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '386',
    name: 'Dự án 386',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-386',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '391',
    name: 'Dự án 391',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-391',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '601',
    name: 'Dự án 601',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-601',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '825',
    name: 'Dự án 825',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Quảng Ninh',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-quang-ninh-825',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '841',
    name: 'Dự án 841',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Hà Nội',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-ha-noi-841',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '604',
    name: 'Dự án 604',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Thanh Hóa',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-thanh-hoa-604',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '888',
    name: 'Dự án 888',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Phú Thọ',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-phu-tho-888',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '1005',
    name: 'Dự án 1005',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Quảng Ninh',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-quang-ninh-1005',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '36A',
    name: 'Dự án 36A',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Thanh Hóa',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-thanh-hoa-36a',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  },
  {
    id: '378',
    name: 'Dự án 378',
    type: 'Hệ bám tải',
    capacity: '5kWp',
    location: 'Phú Thọ',
    image: '/images/du-an/du-an-999-gia-lam.jpg',
    slug: 'he-bam-tai-phu-tho-378',
    specs: {
      solar: {
        type: 'Canadian',
        quantity: 9,
        power: '4.95kWp'
      },
      inverter: {
        type: 'Sungrow',
        capacity: '5kW'
      },
      performance: {
        paybackTime: '5 năm',
        savingPerMonth: '2.5 triệu'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3'
    ]
  }
];

// Helper function to get unique locations from projects
export const getAvailableLocations = () => [...new Set(projects.map(project => project.location))];

// Helper function to optimize image URLs
export const optimizeImageUrl = (url: string, width: number = 800) => {
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=75&auto=format`;
  }
  return url;
};
