import {
  IconAffiliate,
  IconArchive,
  IconFilePencil,
  IconTerminal2,
  IconUsersGroup,
} from '@tabler/icons-react';

import {
  IconBrandOpenai,
  IconFileInvoice,
  IconMessage2Bolt,
  IconPresentationAnalytics,
} from '@tabler/icons-react';

import {
  // IconAppWindow,
  IconHeadset,
  IconPoint,
  IconShoppingCart,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconPresentationAnalytics,
    href: '/dashboards/modern',
  },
  {
    id: uniqueId(),
    title: 'Trợ lý',
    icon: IconHeadset,
    href: '/assistant/list',
    // children: [
    //   {
    //     id: uniqueId(),
    //     title: 'Tạo Trợ lý',
    //     icon: IconPoint,
    //     href: '/apps/assistant/add',
    //   },
    //   {
    //     id: uniqueId(),
    //     title: 'Quản lý Trợ lý',
    //     icon: IconPoint,
    //     // href: '/apps/list-assistant',
    //     href: '/assistant/list',
    //   },
    // ],
  },
  {
    id: uniqueId(),
    title: 'Tài nguyên',
    icon: IconArchive,
    href: '/pages/faq',
  },
  {
    id: uniqueId(),
    title: 'Sản phẩm',
    icon: IconBrandOpenai,
    href: '/apps/sell/product',
  },
  {
    id: uniqueId(),
    title: 'Chuyển đổi',
    icon: IconFileInvoice,
    href: '/apps/sell/order',
  },
  {
    id: uniqueId(),
    title: 'Khách hàng',
    icon: IconUsersGroup,
    href: '/apps/customerList2',
  },
  {
    id: uniqueId(),
    title: 'Cửa hàng',
    icon: IconShoppingCart,
    href: '/apps/ecommerce/shop',
  },
  {
    id: uniqueId(),
    title: 'Affiliate',
    icon: IconAffiliate,
    href: '/apps/collaborate/',
    children: [
      {
        id: uniqueId(),
        title: 'Tổng quan',
        icon: IconPoint,
        href: '/apps/collaborate/',
      },
      {
        id: uniqueId(),
        title: 'Danh sách khách hàng',
        icon: IconPoint,
        href: '/apps/customerList',
      },
      {
        id: uniqueId(),
        title: 'Thỏa thuận hợp tác',
        icon: IconPoint,
        href: '/apps/contract-affiliate',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Tích hợp',
    icon: IconTerminal2,
    href: '/apps/integration',
  },
  {
    id: uniqueId(),
    title: 'Ticket hỗ trợ',
    icon: IconMessage2Bolt,
    href: '/apps/chats',
  },

  {
    id: uniqueId(),
    title: 'Cập nhật',
    icon: IconFilePencil,
    href: '/apps/update',
  },
];

export default Menuitems;
