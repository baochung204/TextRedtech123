import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

export interface TableType {
  id?: string;
  imgsrc?: string;
  name?: string;
  post?: string;
  pname?: string;
  teams?: any[];
  status?: string;
  budget?: string;
}

export interface EnTableType {
  id: string;
  amount: number; // số tiền
  paymentMethod: string; // phương thức thanh toán
  numberPrice: number; // số tiền thanh toán
  requestId: string; // id yêu cầu
  createdAt: Date; //ngày thanh toán
  completedAt: Date | null; //ngày hoàn tất thanh toán
  status: number; // tình trạng
  invoice: number; // hóa đơn
}

export interface CustomerListTable {
  id: string;
  assistant: string;
  name: string; // họ tên
  email: string; // email
  phone: string; // SĐT

  createdAt: string;
  orderValue: string;
  channel: string;
  address: string;
  orderInfo: string;
  note: string;
  imgsrc?: string;
}
const DataRowCustomerTable: CustomerListTable[] = [
  {
    id: '1',
    createdAt: '2024-07-18',
    assistant: 'Nguyễn Văn A',
    orderValue: '70',
    channel: 'MTK1',
    name: 'Lê Tài Đức',
    phone: '0987654321',
    address: 'Hà Nội',
    email: 'duc.lt@redon.com',
    orderInfo: 'Đơn hàng A',
    note: 'Ghi chú A',
    imgsrc: img1,
  },
  {
    id: '2',
    createdAt: '2024-07-19',
    assistant: 'Trần Thị B',
    orderValue: '150',
    channel: 'MTK2',
    name: 'Nguyễn Thùy Linh',
    phone: '0965842361',
    address: 'Hồ Chí Minh',
    email: 'linh.nt@redon.com',
    orderInfo: 'Đơn hàng B',
    note: 'Ghi chú B',
    imgsrc: img2,
  },
  {
    id: '3',
    createdAt: '2024-07-18',
    assistant: 'Nguyễn Văn A',
    orderValue: '70',
    channel: 'MTK1',
    name: 'Lê Tài Đức',
    phone: '0987654321',
    address: 'Hà Nội',
    email: 'duc.lt@redon.com',
    orderInfo: 'Đơn hàng A',
    note: 'Ghi chú A',
    imgsrc: img1,
  },
  {
    id: '4',
    createdAt: '2024-07-19',
    assistant: 'Trần Thị B',
    orderValue: '150',
    channel: 'MTK2',
    name: 'Nguyễn Thùy Linh',
    phone: '0965842361',
    address: 'Hồ Chí Minh',
    email: 'linh.nt@redon.com',
    orderInfo: 'Đơn hàng B',
    note: 'Ghi chú B',
    imgsrc: img2,
  },
  {
    id: '5',
    createdAt: '2024-07-18',
    assistant: 'Nguyễn Văn A',
    orderValue: '70',
    channel: 'MTK1',
    name: 'Lê Tài Đức',
    phone: '0987654321',
    address: 'Hà Nội',
    email: 'duc.lt@redon.com',
    orderInfo: 'Đơn hàng A',
    note: 'Ghi chú A',
    imgsrc: img1,
  },
  {
    id: '6',
    createdAt: '2024-07-19',
    assistant: 'Trần Thị B',
    orderValue: '150',
    channel: 'MTK2',
    name: 'Nguyễn Thùy Linh',
    phone: '0965842361',
    address: 'Hồ Chí Minh',
    email: 'linh.nt@redon.com',
    orderInfo: 'Đơn hàng B',
    note: 'Ghi chú B',
    imgsrc: img2,
  },
  {
    id: '7',
    createdAt: '2024-07-18',
    assistant: 'Nguyễn Văn A',
    orderValue: '70',
    channel: 'MTK1',
    name: 'Lê Tài Đức',
    phone: '0987654321',
    address: 'Hà Nội',
    email: 'duc.lt@redon.com',
    orderInfo: 'Đơn hàng A',
    note: 'Ghi chú A',
    imgsrc: img1,
  },
  {
    id: '8',
    createdAt: '2024-07-19',
    assistant: 'Trần Thị B',
    orderValue: '150',
    channel: 'MTK2',
    name: 'Nguyễn Thùy Linh',
    phone: '0965842361',
    address: 'Hồ Chí Minh',
    email: 'linh.nt@redon.com',
    orderInfo: 'Đơn hàng B',
    note: 'Ghi chú B',
    imgsrc: img2,
  },
];

const basicsTableData: TableType[] = [
  {
    id: '1',
    imgsrc: img1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    teams: [
      {
        id: '1.1',
        color: 'secondary.main',
        text: 'S',
      },
      {
        id: '1.2',
        color: 'error.main',
        text: 'D',
      },
    ],
    status: 'Active',
    budget: '3.9',
  },
  {
    id: '2',
    imgsrc: img2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    teams: [
      {
        id: '2.1',
        color: 'primary.main',
        text: 'A',
      },
      {
        id: '2.2',
        color: 'warning.main',
        text: 'X',
      },
      {
        id: '2.3',
        color: 'secondary.main',
        text: 'N',
      },
    ],
    status: 'Pending',
    budget: '24.5',
  },
  {
    id: '3',
    imgsrc: img3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    teams: [
      {
        id: '3.1',
        color: 'error.main',
        text: 'X',
      },
    ],
    status: 'Completed',
    budget: '12.8',
  },
  {
    id: '4',
    imgsrc: img4,
    name: 'Mathew Anderson',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    teams: [
      {
        id: '4.1',
        color: 'primary.main',
        text: 'Y',
      },
      {
        id: '4.2',
        color: 'error.main',
        text: 'X',
      },
    ],
    status: 'Active',
    budget: '2.4',
  },
  {
    id: '5',
    imgsrc: img5,
    name: 'Micheal Doe',
    post: 'Content Writer',
    pname: 'Helping Hands WP Theme',
    teams: [
      {
        id: '5.1',
        color: 'secondary.main',
        text: 'S',
      },
    ],
    status: 'Cancel',
    budget: '9.3',
  },
];

const EnhancedTableData: EnTableType[] = [
  {
    id: '1',
    amount: 70,
    paymentMethod: '123 456 789',
    numberPrice: 21.0,
    requestId: '10000017392941114415106834',
    createdAt: new Date('2024-07-18T18:47:28'),
    completedAt: new Date('2024-07-18T18:47:36'),
    status: 1,
    invoice: 1,
  },
  {
    id: '2',
    amount: 150,
    paymentMethod: '987 654 321',
    numberPrice: 33.0,
    requestId: '10000017392941114415106835',
    createdAt: new Date('2024-07-19T10:15:12'),
    completedAt: new Date('2024-07-19T10:20:30'),
    status: 2,
    invoice: 2,
  },
  {
    id: '3',
    amount: 120,
    paymentMethod: '112 233 445',
    numberPrice: 44.0,
    requestId: '10000017392941114415106836',
    createdAt: new Date('2024-07-20T14:35:48'),
    completedAt: new Date('2024-07-20T14:40:20'),
    status: 3,
    invoice: 3,
  },
  {
    id: '4',
    amount: 200,
    paymentMethod: '445 556 667',
    numberPrice: 21.555,
    requestId: '10000017392941114415106837',
    createdAt: new Date('2024-07-21T16:00:00'),
    completedAt: new Date('2024-07-21T16:05:10'),
    status: 3,
    invoice: 3,
  },
  {
    id: '5',
    amount: 90,
    paymentMethod: '778 899 000',
    numberPrice: 66.0,
    requestId: '10000017392941114415106838',
    createdAt: new Date('2024-07-22T09:45:22'),
    completedAt: new Date('2024-07-22T09:50:58'),
    status: 1,
    invoice: 1,
  },
  {
    id: '6',
    amount: 110,
    paymentMethod: '334 455 667',
    numberPrice: 777.0,
    requestId: '10000017392941114415106839',
    createdAt: new Date('2024-07-23T11:11:11'),
    completedAt: new Date('2024-07-23T11:15:45'),
    status: 2,
    invoice: 2,
  },
  {
    id: '7',
    amount: 80,
    paymentMethod: '998 877 665',
    numberPrice: 777.0,
    requestId: '10000017392941114415106840',
    createdAt: new Date('2024-07-24T13:30:10'),
    completedAt: new Date('2024-07-24T13:35:50'),
    status: 2,
    invoice: 2,
  },
  {
    id: '10',
    amount: 50,
    paymentMethod: '887 766 554',
    numberPrice: 99.0,
    requestId: '10000017392941114415106843',
    createdAt: new Date('2024-07-27T18:00:00'),
    completedAt: new Date('2024-07-27T18:05:15'),
    status: 1,
    invoice: 1,
  },
];
export { basicsTableData, EnhancedTableData, DataRowCustomerTable };
