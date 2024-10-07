interface tablePaymentProp {
  id: string;
  amount: number;
  numberPrice: number;
  requestId: string;
  createdAt: string;
  completedAt: string;
  status: boolean;
  invoice: number;
}

export const tablepayment: tablePaymentProp[] = [
  {
    id: '1',
    amount: 70,
    numberPrice: 21.0,
    requestId: '10000017392941114415106834',
    createdAt: '2024-07-18',
    completedAt: '2024-07-18',
    status: true,
    invoice: 1,
  },
  {
    id: '2',
    amount: 150,
    numberPrice: 33.0,
    requestId: '10000017392941114415106835',
    createdAt: '2024-07-19',
    completedAt: '2024-07-19',
    status: false,
    invoice: 2,
  },
  {
    id: '3',
    amount: 120,
    numberPrice: 44.0,
    requestId: '10000017392941114415106836',
    createdAt: '2024-07-20',
    completedAt: '2024-07-20',
    status: true,
    invoice: 3,
  },
  {
    id: '4',
    amount: 200,
    numberPrice: 21.555,
    requestId: '10000017392941114415106837',
    createdAt: '2024-07-21',
    completedAt: '2024-07-21',
    status: false,
    invoice: 3,
  },
  {
    id: '5',
    amount: 90,
    numberPrice: 66.0,
    requestId: '10000017392941114415106838',
    createdAt: '2024-07-22',
    completedAt: '2024-07-22',
    status: true,
    invoice: 1,
  },
  {
    id: '6',
    amount: 110,
    numberPrice: 777.0,
    requestId: '10000017392941114415106839',
    createdAt: '2024-07-23',
    completedAt: '2024-07-23',
    status: false,
    invoice: 2,
  },
  {
    id: '7',
    amount: 80,
    numberPrice: 777.0,
    requestId: '10000017392941114415106840',
    createdAt: '2024-07-24',
    completedAt: '2024-07-24',
    status: true,
    invoice: 2,
  },
  {
    id: '10',
    amount: 50,
    numberPrice: 99.0,
    requestId: '10000017392941114415106843',
    createdAt: '2024-07-27',
    completedAt: '2024-07-27',
    status: false,
    invoice: 1,
  },
];

interface tableOrder {
  id: string;
  date: string;
  amount: number;
  quantity: string;
  invoice: number;
  voucher: string;
}

export const tableOrder: tableOrder[] = [
  {
    id: 'HD001',
    date: '2024-09-15',
    amount: 120,
    quantity: '3',
    invoice: 1,
    voucher: 'VCS1',
  },
  {
    id: 'HD002',
    date: '2024-09-16',
    amount: 200,
    quantity: '5',
    voucher: 'VCS1',
    invoice: 1,
  },
  {
    id: 'HD003',
    date: '2024-09-17',
    amount: 75,
    quantity: '2',
    voucher: 'VCS1',
    invoice: 1,
  },
  {
    id: 'HD004',
    date: '2024-09-18',
    amount: 50,
    quantity: '1',
    voucher: 'VCS1',
    invoice: 1,
  },
  {
    id: 'HD005',
    date: '2024-09-19',
    amount: 150,
    quantity: '4',
    voucher: 'VCS1',
    invoice: 1,
  },
];
