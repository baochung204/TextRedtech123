import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import icon1 from 'src/assets/images/svgs/icon-account.svg';
import icon3 from 'src/assets/images/svgs/icon-tasks.svg';
import icon4 from 'src/assets/images/svgs/icon-dd-chat.svg';
import Iconkey from 'src/assets/images/iconHeadrProfile/key.png';
import ddIcon8 from 'src/assets/images/svgs/icon-dd-application.svg';
import ddIcon2 from 'src/assets/images/svgs/icon-dd-cart.svg';
import ddIcon1 from 'src/assets/images/svgs/icon-dd-chat.svg';
import ddIcon4 from 'src/assets/images/svgs/icon-dd-date.png';
import ddIcon3 from 'src/assets/images/svgs/icon-dd-invoice.svg';
import ddIcon6 from 'src/assets/images/svgs/icon-dd-lifebuoy.svg';
import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg';
import ddIcon5 from 'src/assets/images/svgs/icon-dd-mobile.svg';
// import ddIcon6 from 'src/assets/images/svgs/mastercard.sv';

// Notifications dropdown

interface notificationType {
  avatar: string;
  title: string;
  subtitle: string;
}

const notifications: notificationType[] = [
  {
    avatar: img1,
    title: 'Trung đã đăng ký thành công',
    subtitle: 'Chúc mừng anh !',
  },
  {
    avatar: img2,
    title: 'Bạn có một tin nhắn mới',
    subtitle: 'Trung đã gửi bạn tin nhắn mới',
  },
  {
    avatar: img3,
    title: 'Có một giao dịch mới',
    subtitle: 'Kiểm tra ngay nào',
  },
  {
    avatar: img4,
    title: 'Toản đã hoàn thành một nhiệm vụ',
    subtitle: 'Hãy cập nhật nhiệm vụ mới cho anh ý ngay nào',
  },
  {
    avatar: img1,
    title: 'Hòa đã đăng ký thành công',
    subtitle: 'Chúc mừng anh !',
  },
  {
    avatar: img2,
    title: 'Bạn có một yêu cầu mới',
    subtitle: 'Hãy kiểm tra ngay nào',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Messages dropdown
//
interface messageType {
  avatar: string;
  title: string;
  subtitle: string;
  time: string;
  status: string;
}
const messages: messageType[] = [
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
    time: '1 hours ago',
    status: 'success',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
    time: '1 day ago',
    status: 'warning',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
    time: '2 days ago',
    status: 'success',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
    time: '1 week ago',
    status: 'danger',
  },
];

//
// Profile dropdown
//
interface ProfileType {
  id: number;
  href: string;
  title: string;
  // subtitle:string;
  icon: string;
}
const profile: ProfileType[] = [
  {
    id: 1,
    href: '/user-profile',
    title: 'Quản lý tài khoản',
    // subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    id: 2,
    href: '/admin',
    title: 'Quản trị viên',
    // subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    id: 3,
    href: '/purchasehistory',
    title: 'Lịch sử giao dịch',
    // subtitle: 'Account Settings',
    icon: ddIcon4,
  },
  {
    id: 4,
    href: '/user-profile',
    title: 'Đổi mật khẩu',
    // subtitle: 'Account Settings',
    icon: Iconkey,
  },
  // {
  //   href: '/auth/forgot-password2',
  //   title: 'Đổi mật khẩu',
  //   // subtitle: 'Messages & Emails',
  //   icon: icon2,
  // },
  {
    id: 5,
    href: '/apps/chats',
    title: 'Ticket hỗ trợ',
    // subtitle: 'To-do and Daily Tasks',
    icon: icon4,
  },
  {
    id: 6,
    href: '/forms/form-request',
    title: 'Đề xuất tính năng',
    // subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];

// apps dropdown

interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}

const appsLink: appsLinkType[] = [
  {
    href: '/auth/updating',
    title: 'Free tool 1',
    subtext: 'Tính năng 1',
    avatar: ddIcon1,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 2',
    subtext: 'Tính năng 2',
    avatar: ddIcon2,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 3',
    subtext: 'Tính năng 3',
    avatar: ddIcon3,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 4',
    subtext: 'Tính năng 4',
    avatar: ddIcon4,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 5',
    subtext: 'Tính năng 5',
    avatar: ddIcon5,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 6',
    subtext: 'Tính năng 6',
    avatar: ddIcon6,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 7',
    subtext: 'Tính năng 7',
    avatar: ddIcon7,
  },
  {
    href: '/auth/updating',
    title: 'Free tool 8',
    subtext: 'Tính năng 8',
    avatar: ddIcon8,
  },
];

interface LinkType {
  href: string;
  title: string;
}

const pageLinks: LinkType[] = [
  {
    href: '/pricing',
    title: 'Pricing Page',
  },
  {
    href: '/auth/login',
    title: 'Authentication Design',
  },
  {
    href: '/auth/register',
    title: 'Register Now',
  },
  {
    href: '/404',
    title: '404 Error Page',
  },
  {
    href: '/auth/login',
    title: 'Login Page',
  },
  {
    href: '/user-profile',
    title: 'User Application',
  },
  {
    href: '/apps/blog/posts',
    title: 'Blog Design',
  },
  {
    href: '/apps/ecommerce/eco-checkout',
    title: 'Shopping Cart',
  },
];

export { appsLink, messages, notifications, pageLinks, profile };