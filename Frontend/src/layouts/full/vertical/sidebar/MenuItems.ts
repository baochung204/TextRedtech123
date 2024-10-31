import { IconUsersGroup } from '@tabler/icons-react';

import { IconPresentationAnalytics } from '@tabler/icons-react';
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
    title: 'Khách hàng',
    icon: IconUsersGroup,
    href: '/customers',
  },
];

export default Menuitems;
