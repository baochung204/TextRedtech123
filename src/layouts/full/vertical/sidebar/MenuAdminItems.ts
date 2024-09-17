import { IconAffiliate, IconArchive, IconTerminal2, IconUsersGroup } from '@tabler/icons-react';
import { IconFilePencil } from '@tabler/icons-react';

import { IconMessage2Bolt, IconPresentationAnalytics } from '@tabler/icons-react';

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
    href: '/admin/order',
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

        href: '/admin/buy/packagepoint',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Affiliate',
    icon: IconAffiliate,
    href: '/admin/affiliate/',
    children: [
      {
        id: uniqueId(),
        title: 'Sản phẩm',
        icon: IconPoint,
        href: '/admin/affiliate/publishers',
      },
      {
        id: uniqueId(),
        title: 'Đơn hàng Affiliate',
        icon: IconPoint,
        href: '/admin/affiliate/affiliatepro',
      },
      {
        id: uniqueId(),
        title: 'Lịch sử rút tiền',
        icon: IconPoint,
        href: '/admin/affiliate/history',
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Nhân viên',
    icon: IconShoppingCart,
    href: '/admin/staff',
  },
  {
    id: uniqueId(),
    title: 'Tài nguyên',
    icon: IconShoppingCart,
    href: '/admin/resources',
  },
  {
    id: uniqueId(),
    title: 'Blog',
    icon: IconShoppingCart,
    href: '/admin/blog',
  },
  {
    id: uniqueId(),
    title: 'Tickket',
    icon: IconShoppingCart,
    href: '/admin/ticket',
  },
  {
    id: uniqueId(),
    title: 'Thông báo',
    icon: IconShoppingCart,
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
        href: '/admin/accountant/contracPoint',
      },
      {
        id: uniqueId(),
        title: 'Hợp đồng Affiliate',
        icon: IconPoint,
        href: '/admin/accountant/contracAfflilate',
      },
      {
        id: uniqueId(),
        title: 'E-Invoice',
        icon: IconPoint,
        href: '/admin/accountant/feature',
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
