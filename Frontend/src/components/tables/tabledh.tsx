interface TableDH {
  id: string;
  amount: number;
  username: string;
  email: string;
  phone: string;
  title: string;
  money: number;
  MHD: string;
  requestId: string;
  createdAt: Date;
  completedAt: Date;
  status: number;
  invoice: number;
  // paymentMethod: string; // add this
  // numberPrice: number;
}

const tabledh: TableDH[] = [
  {
    id: '1',
    MHD: '#ORD12345',
    amount: 1000000,
    username: 'Hoàng Văn Nam',
    email: 'namvh@gmail.com',
    phone: '01234567890',
    title: 'Chatbot hỗ trợ khách hàng',
    money: 300000,
    requestId: '1000003537254534',
    createdAt: new Date('2024-07-18'),
    completedAt: new Date('2024-07-18'),
    status: 1,
    invoice: 1,
  },
  {
    id: '2',
    MHD: '#ORD12325',
    amount: 2000000,
    username: 'Lê Văn Hùng',
    email: 'hunglv@example.com',
    phone: '0987654321',
    title: 'Chatbot hỗ trợ bán hàng',
    money: 60000,
    requestId: '1000002672542535',
    createdAt: new Date('2024-07-19'),
    completedAt: new Date('2024-07-19'),
    status: 2,
    invoice: 2,
  },
  {
    id: '3',
    MHD: '#ORD12335',
    amount: 5000000,
    username: 'Lý Chí Thanh',
    email: 'thanhlc@example.com',
    phone: '01122334455',
    title: 'Chatbot hỗ trợ tư vấn',
    money: 100000,
    requestId: '1000002362564366',
    createdAt: new Date('2024-07-20'),
    completedAt: new Date('2024-07-20T14:40:20'),
    status: 3,
    invoice: 3,
  },
  {
    id: '4',
    MHD: '#ORD12355',
    amount: 6000000,
    username: 'Khương Văn Danh',
    email: 'danhkv@example.com',
    phone: '02233445566',
    title: 'Chatbot hỗ trợ chăm sóc khách hàng',
    money: 100000,
    requestId: '10000034539151068',
    createdAt: new Date('2024-07-21'),
    completedAt: new Date('2024-07-21'),
    status: 4,
    invoice: 4,
  },
  {
    id: '5',
    MHD: '#ORD12375',
    amount: 90000000,
    username: 'Trần Văn Minh',
    email: 'minhtv@example.com',
    phone: '03344556677',
    title: 'Chatbot hỗ trợ đặt hàng',
    money: 2000000,
    requestId: '10000034539151069',
    createdAt: new Date('2024-07-22'),
    completedAt: new Date('2024-07-22'),
    status: 2,
    invoice: 2,
  },
  {
    id: '6',
    MHD: '#ORD12305',
    amount: 45000000,
    username: 'Vũ Văn Phúc',
    email: 'phucvv@example.com',
    phone: '04455667788',
    title: 'Chatbot hỗ trợ thanh toán',
    money: 1300000,
    requestId: '1000003468272345',
    createdAt: new Date('2024-07-23'),
    completedAt: new Date('2024-07-23'),
    status: 3,
    invoice: 3,
  },
  {
    id: '7',
    MHD: '#ORD12395',
    amount: 3200000,
    username: 'Nguyễn Văn Tú',
    email: 'tuvn@example.com',
    phone: '05566778899',
    title: 'Chatbot hỗ trợ kỹ thuật',
    money: 90000,
    requestId: '1000003457254688',
    createdAt: new Date('2024-07-24'),
    completedAt: new Date('2024-07-24'),
    status: 4,
    invoice: 4,
  },
  {
    id: '10',
    MHD: '#ORD12435',
    amount: 75000000,
    username: 'Nguyễn Văn Tài',
    email: 'tainv@example.com',
    phone: '06677889900',
    title: 'Chatbot hỗ trợ giao hàng',
    money: 2500000,
    requestId: '100000086904503',
    createdAt: new Date('2024-07-27'),
    completedAt: new Date('2024-07-27'),
    status: 3,
    invoice: 3,
  },
];

export { tabledh };
