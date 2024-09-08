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
  name: string; // họ tên
  email: string; // email
  phone: string; // SĐT
  registrationDate: string; // Ngày đăng ký
  totalExpenses: string; // Tổng tiền thanh toán
  electronics: string;
  image: string;
}
const DataRowCustomerTable: CustomerListTable[] = [
  {
    id: '1',
    name: 'Lê Tài Đức',
    email: 'duc.lt@redon.com',
    phone: '0987654321',
    registrationDate: '12/02/2024',
    totalExpenses: 'Miễn phí',
    electronics: 'Cá nhân',
    image: img1,
  },
  {
    id: '2',
    name: 'Nguyễn Thùy Linh',
    email: 'linh.nt@redon.com',
    phone: '0965842361',
    registrationDate: '24/01/2024',
    totalExpenses: 'Trả phí',
    electronics: 'Cá nhân',
    image: img2,
  },
  {
    id: '3',
    name: 'Phạm Thành Long',
    email: 'long.pt@redon.com',
    phone: '0976521238',
    registrationDate: '01/02/2024',
    totalExpenses: 'Trả phí',
    electronics: 'Doanh nghiệp',
    image: img3,
  },
  {
    id: '4',
    name: 'Vũ Đình Hùng',
    email: 'hung.vd@redon.com',
    phone: '0951326548',
    registrationDate: '12/05/2024',
    totalExpenses: 'Miễn phí',
    electronics: 'Doanh nghiệp',
    image: img4,
  },
  {
    id: '5',
    name: 'Hoàng Hải Dương',
    email: 'dung.hh@redon.com',
    phone: '0965874126',
    registrationDate: '09/08/2024',
    totalExpenses: 'Miễn phí',
    electronics: 'Cá nhân',
    image: img5,
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
