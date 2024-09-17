<<<<<<< HEAD
import { IconAffiliate, IconTerminal2, IconUsersGroup } from '@tabler/icons-react';
=======
import {
  IconAffiliate,
  IconBellRinging,
  IconBrandCodepen,
  IconMessage2Bolt,
  IconTerminal2,
  IconUsers,
  IconUsersGroup,
} from '@tabler/icons-react';
import { IconBrandEnvato } from '@tabler/icons-react';
>>>>>>> 0d67a131fa0304ae6b321ac40f012f83f8c0162c

import { IconPresentationAnalytics } from '@tabler/icons-react';

import {
  // IconAppWindow,
  IconHeadset,
  IconPackage,
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

const MenuAdminitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconPresentationAnalytics,
    href: '/admin',
  },
  {
    id: uniqueId(),
    title: 'Trợ lý',
    icon: IconHeadset,
    href: '/admin/assistant',
  },
  {
    id: uniqueId(),
    title: 'Khách hàng',
    icon: IconUsersGroup,
    href: '',
  },
  {
    id: uniqueId(),
    title: 'Bán hàng',
    icon: IconPackage,
    href: '/admin/buy/',
    children: [
      {
        id: uniqueId(),
        title: 'Sản phẩm',
        icon: IconPoint,
        href: '/admin/buy/products',
      },
      {
        id: uniqueId(),
        title: 'Đơn hàng sản phẩm',
        icon: IconPoint,

        href: '/admin/buy/orderproducts',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'R-Point',
    icon: IconPackage,
    href: '/admin/point/',
    children: [
      {
        id: uniqueId(),
        title: 'Gói R-Point',
        icon: IconPoint,
        href: '/admin/point/packagepoint',
      },
      {
        id: uniqueId(),
        title: 'Đơn hàng R-Point',
        icon: IconPoint,

        href: '/admin/point/pointdetail',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Mã khuyễn mãi',
    icon: IconUsers,
    href: '/admin/voucher',
  },
  {
    id: uniqueId(),
    title: 'Affiliate',
    icon: IconAffiliate,
    href: '/admin/affiliate/',
    children: [
      {
        id: uniqueId(),
<<<<<<< HEAD
        title: 'Publishers',
=======
        title: 'Publisher',
>>>>>>> 0d67a131fa0304ae6b321ac40f012f83f8c0162c
        icon: IconPoint,
        href: '/admin/publisher',
      },
      {
        id: uniqueId(),
        title: 'Đơn hàng Affiliate',
        icon: IconPoint,
        href: '/admin/order',
      },
      {
        id: uniqueId(),
        title: 'Lịch sử rút tiền',
        icon: IconPoint,
        href: '/admin/history',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Nhân viên',
    icon: IconUsers,
    href: '/admin/staff',
  },
  {
    id: uniqueId(),
    title: 'Tài nguyên',
    icon: IconBrandEnvato,
    href: '/admin/resources',
  },
  {
    id: uniqueId(),
    title: 'Blog',
    icon: IconBrandCodepen,
    href: '/admin/blog',
  },
  {
    id: uniqueId(),
    title: 'Ticket',
    icon: IconMessage2Bolt,
    href: '/admin/ticket',
  },
  {
    id: uniqueId(),
    title: 'Thông báo',
    icon: IconBellRinging,
    href: '/admin/notification',
  },
  {
    id: uniqueId(),
    title: 'Kế toán',
    icon: IconAffiliate,
    href: '/admin/accountant/',
    children: [
      {
        id: uniqueId(),
        title: 'Hợp đồng R-Point',
        icon: IconPoint,
        href: '/admin/contactpoint',
      },
      {
        id: uniqueId(),
        title: 'Hợp đồng Affiliate',
        icon: IconPoint,
        href: '/admin/contactaffiliate',
      },
      {
        id: uniqueId(),
        title: 'E-Invoice',
        icon: IconPoint,
        href: '/admin/accountant/einvoice',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Đề xuất tính năng',
    icon: IconTerminal2,
    href: '/admin/feature',
  },
];

export default MenuAdminitems;
