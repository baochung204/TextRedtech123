interface TableDH {
  id: string;
  amount: number;
  requestId: string;
  createdAt: Date;
  completedAt: Date;
  status: boolean;
  invoice: number;
}

const tabledh: TableDH[] = [
  {
    id: '1',
    amount: 1000000,
    requestId: '1000003537254534',
    createdAt: new Date('2024-07-18T18:47:28'),
    completedAt: new Date('2024-07-18T18:47:36'),
    status: true,
    invoice: 1,
  },
  {
    id: '2',
    amount: 2000000,
    requestId: '1000002672542535',
    createdAt: new Date('2024-07-19T10:15:12'),
    completedAt: new Date('2024-07-19T10:20:30'),
    status: false,
    invoice: 2,
  },
  {
    id: '3',
    amount: 5000000,
    requestId: '1000002362564366',
    createdAt: new Date('2024-07-20T14:35:48'),
    completedAt: new Date('2024-07-20T14:40:20'),
    status: false, // Converted from 3 to false
    invoice: 3,
  },
  {
    id: '4',
    amount: 6000000,
    requestId: '10000034539151068',
    createdAt: new Date('2024-07-21T16:00:00'),
    completedAt: new Date('2024-07-21T16:05:10'),
    status: false,
    invoice: 3,
  },
  {
    id: '5',
    amount: 90000000,
    requestId: '10000034539151069',
    createdAt: new Date('2024-07-22T09:45:22'),
    completedAt: new Date('2024-07-22T09:50:58'),
    status: true,
    invoice: 1,
  },
  {
    id: '6',
    amount: 45000000,
    requestId: '1000003468272345',
    createdAt: new Date('2024-07-23T11:11:11'),
    completedAt: new Date('2024-07-23T11:15:45'),
    status: true,
    invoice: 2,
  },
  {
    id: '7',
    amount: 3200000,
    requestId: '1000003457254688',
    createdAt: new Date('2024-07-24T13:30:10'),
    completedAt: new Date('2024-07-24T13:35:50'),
    status: false,
    invoice: 2,
  },
  {
    id: '10',
    amount: 75000000,
    requestId: '100000086904503',
    createdAt: new Date('2024-07-27T18:00:00'),
    completedAt: new Date('2024-07-27T18:05:15'),
    status: true,
    invoice: 1,
  },
];

export { tabledh };