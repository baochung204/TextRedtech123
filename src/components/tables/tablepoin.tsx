interface tablepoin {
  id: string;
  MHD: string;
  amount: number;
  point: number;
  requestId: string;
  createdAt: Date;
  completedAt: Date;
  status: number;
  invoice: number;
}

const tablepoin: tablepoin[] = [
  {
    id: '1',
    MHD: '#603244',
    amount: 1000000,
    point: 100,
    requestId: '1000003537254534',
    createdAt: new Date('2024-07-18T18:47:28'),
    completedAt: new Date('2024-07-18T18:47:36'),
    status: 1,
    invoice: 1,
  },
  {
    id: '2',
    MHD: '#608523',

    amount: 2000000,
    point: 200,
    requestId: '1000002672542535',
    createdAt: new Date('2024-07-19T10:15:12'),
    completedAt: new Date('2024-07-19T10:20:30'),
    status: 2,
    invoice: 2,
  },
  {
    id: '3',
    MHD: '#602424',

    amount: 5000000,
    point: 500,
    requestId: '1000002362564366',
    createdAt: new Date('2024-07-20T14:35:48'),
    completedAt: new Date('2024-07-20T14:40:20'),
    status: 3,
    invoice: 3,
  },
  {
    id: '4',
    MHD: '#603764',

    amount: 6000000,
    requestId: '10000034539151068',
    point: 600,
    createdAt: new Date('2024-07-21T16:00:00'),
    completedAt: new Date('2024-07-21T16:05:10'),
    status: 3,
    invoice: 3,
  },
  {
    id: '5',
    MHD: '#602924',

    amount: 90000000,
    point: 900,
    requestId: '10000034539151069',
    createdAt: new Date('2024-07-22T09:45:22'),
    completedAt: new Date('2024-07-22T09:50:58'),
    status: 1,
    invoice: 1,
  },
  {
    id: '6',
    MHD: '#601428',

    amount: 45000000,
    point: 450,
    requestId: '1000003468272345',
    createdAt: new Date('2024-07-23T11:11:11'),
    completedAt: new Date('2024-07-23T11:15:45'),
    status: 2,
    invoice: 2,
  },
  {
    id: '7',
    MHD: '#605324',

    amount: 3200000,
    point: 320,
    requestId: '1000003457254688',
    createdAt: new Date('2024-07-24T13:30:10'),
    completedAt: new Date('2024-07-24T13:35:50'),
    status: 2,
    invoice: 2,
  },
  {
    id: '10',
    MHD: '#604624',

    amount: 75000000,
    point: 750,
    requestId: '100000086904503',
    createdAt: new Date('2024-07-27T18:00:00'),
    completedAt: new Date('2024-07-27T18:05:15'),
    status: 1,
    invoice: 1,
  },
];
export { tablepoin };
