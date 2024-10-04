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
    href: '/dashboards',
  },
  {
    id: uniqueId(),
    title: 'Trợ lý',
    icon: IconHeadset,
    href: '/assistants',
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
    href: '/resourses',
  },
  {
    id: uniqueId(),
    title: 'Sản phẩm',
    icon: IconBrandOpenai,
    href: '/products',
  },
  {
    id: uniqueId(),
    title: 'Chuyển đổi',
    icon: IconFileInvoice,
    href: '/conversions',
  },
  {
    id: uniqueId(),
    title: 'Khách hàng',
    icon: IconUsersGroup,
    href: '/customers',
  },
  {
    id: uniqueId(),
    title: 'Cửa hàng',
    icon: IconShoppingCart,
    href: '/shops',
  },
  {
    id: uniqueId(),
    title: 'Affiliate',
    icon: IconAffiliate,
    href: '/affiliate',
    children: [
      {
        id: uniqueId(),
        title: 'Tổng quan',
        icon: IconPoint,
        href: '/affiliate/detail',
      },
      {
        id: uniqueId(),
        title: 'Danh sách khách hàng',
        icon: IconPoint,
        href: '/affiliate/list_customer',
      },
      {
        id: uniqueId(),
        title: 'Thỏa thuận hợp tác',
        icon: IconPoint,
        href: '/affiliate/agreement',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Tích hợp',
    icon: IconTerminal2,
    href: '/integrations',
  },
  {
    id: uniqueId(),
    title: 'Ticket hỗ trợ',
    icon: IconMessage2Bolt,
    href: '/tickets',
  },

  {
    id: uniqueId(),
    title: 'Cập nhật',
    icon: IconFilePencil,
    href: '/update',
  },
];

export default Menuitems;
