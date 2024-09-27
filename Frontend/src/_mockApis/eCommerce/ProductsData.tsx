import mock from '../mock';
import { sub } from 'date-fns';
import { Chance } from 'chance';
import s1 from 'src/assets/images/products/s20.jpg';
import s2 from 'src/assets/images/products/s21.jpg';
import s3 from 'src/assets/images/products/s22.jpg';
import s4 from 'src/assets/images/products/s23.jpg';
import s5 from 'src/assets/images/products/s25.jpg';
import s6 from 'src/assets/images/products/s24.jpg';
import s7 from 'src/assets/images/products/s25.jpg';
import s8 from 'src/assets/images/products/s20.jpg';
import s9 from 'src/assets/images/products/s21.jpg';
import s10 from 'src/assets/images/products/s22.jpg';
import s11 from 'src/assets/images/products/s23.jpg';
import s12 from 'src/assets/images/products/s12.jpg';

const chance = new Chance();

const ProductsData = [
  {
    name: 'MediGPT',
    point: 275,
    discount: 25,
    related: false,
    salesPrice: 350,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    category: ['Đồ chơi'],
    gender: 'Men',
    rating: 1,
    stock: true,
    qty: 1,
    colors: ['#1890FF'],
    thumbnailUrl: s1,
    id: 1,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'EduGPT',
    point: 89,
    discount: 10,
    related: true,
    salesPrice: 99,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Women',
    rating: 4,
    category: ['Đồ chơi'],
    stock: false,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FF4842'],
    thumbnailUrl: s2,
    id: 2,
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'FinGPT',
    point: 125,
    discount: 12,
    related: false,
    salesPrice: 137,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    category: ['Đồ chơi'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 3,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    thumbnailUrl: s3,
    id: 3,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'CodeGPT',
    point: 50,
    discount: 15,
    related: true,
    salesPrice: 65,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    category: ['Đồ chơi'],
    gender: 'Men',
    rating: 1,
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    thumbnailUrl: s4,
    id: 4,
    created: sub(new Date(), { days: 4, hours: 9, minutes: 40 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'LegalGPT',
    point: 650,
    discount: 250,
    related: true,
    salesPrice: 900,
    tag: ['fashion'],
    gender: 'Women',
    rating: 5,
    stock: false,
    qty: 1,
    category: ['Đồ chơi'],
    colors: ['#00AB55', '#000000'],
    thumbnailUrl: s5,
    id: 5,
    created: sub(new Date(), { days: 2, hours: 5, minutes: 50 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-2.0',
    point: 25,
    discount: 6,
    related: true,
    salesPrice: 31,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Men',
    rating: 3,
    category: ['Đồ chơi'],
    stock: true,
    qty: 1,
    colors: ['#FFC0CB', '#FF4842'],
    thumbnailUrl: s6,
    id: 6,
    created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-2.0',
    point: 150,
    discount: 50,
    related: false,
    salesPrice: 200,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Women',
    rating: 4,
    category: ['Đồ chơi'],
    stock: true,
    qty: 1,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    thumbnailUrl: s7,
    id: 7,
    created: sub(new Date(), { days: 6, hours: 10, minutes: 0 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-2',
    point: 300,
    discount: 80,
    related: false,
    salesPrice: 380,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Women',
    rating: 3,
    category: ['Đồ chơi'],
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    thumbnailUrl: s8,
    id: 8,
    created: sub(new Date(), { days: 7, hours: 5, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: ' GPT-2 for Kids',
    point: 175,
    discount: 25,
    related: false,
    salesPrice: 200,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Women',
    rating: 3,
    stock: true,
    category: ['Đồ chơi'],
    qty: 1,
    colors: ['#00AB55', '#000000'],
    thumbnailUrl: s9,
    id: 9,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-5',
    point: 210,
    discount: 40,
    related: false,
    salesPrice: 250,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    gender: 'Kids',
    rating: 3,
    category: ['Đồ chơi'],
    stock: true,
    qty: 1,
    colors: ['#FFC0CB', '#FF4842'],
    thumbnailUrl: s10,
    id: 10,
    created: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-3',
    point: 285,
    discount: 60,
    related: false,
    category: [['Đồ chơi']],
    salesPrice: 345,
    tag: ['toys'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    thumbnailUrl: s11,
    id: 11,
    created: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    name: 'GPT-3 for Kids',
    point: 10,
    discount: 5,
    related: false,
    salesPrice: 10,
    tag: [
      {
        tagId: 101,
        tagName: 'Mới',
      },
      {
        tagId: 102,
        tagName: 'Khuyến mãi',
      },
    ],
    category: [['Đồ chơi']],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    thumbnailUrl: s12,
    id: 12,
    created: sub(new Date(), { days: 9, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
];

mock.onGet('  http://localhost:9999/productshop').reply(() => {
  return [200, ProductsData];
});

export default ProductsData;
