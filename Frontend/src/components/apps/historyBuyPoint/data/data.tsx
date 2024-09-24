interface PropsTable {
  id: string;
  amount: number;
  numberPrice: number;
  requestId: string;
  createdAt: string;
  completedAt: string;
  status: number;
  invoice: number;
}

// const generateIdCode = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000);
//   return `#${randomNumber.toString().padStart(6, '0')}`;
// };

const TableData: PropsTable[] = [
  {
    id: '1',
    amount: 70,
    numberPrice: 21.0,
    requestId: '10000017392941114415106834',
    createdAt: '2024-07-18',
    completedAt: '2024-07-18',
    status: 1,
    invoice: 1,
  },
  {
    id: '2',
    amount: 150,
    numberPrice: 33.0,
    requestId: '10000017392941114415106835',
    createdAt: '2024-07-19',
    completedAt: '2024-07-19',
    status: 2,
    invoice: 2,
  },
  {
    id: '3',
    amount: 120,
    numberPrice: 44.0,
    requestId: '10000017392941114415106836',
    createdAt: '2024-07-20',
    completedAt: '2024-07-20',
    status: 3,
    invoice: 3,
  },
  {
    id: '4',
    amount: 200,
    numberPrice: 21.555,
    requestId: '10000017392941114415106837',
    createdAt: '2024-07-21',
    completedAt: '2024-07-21',
    status: 3,
    invoice: 3,
  },
  {
    id: '5',
    amount: 90,
    numberPrice: 66.0,
    requestId: '10000017392941114415106838',
    createdAt: '2024-07-22',
    completedAt: '2024-07-22',
    status: 1,
    invoice: 1,
  },
  {
    id: '6',
    amount: 110,
    numberPrice: 777.0,
    requestId: '10000017392941114415106839',
    createdAt: '2024-07-23',
    completedAt: '2024-07-23',
    status: 2,
    invoice: 2,
  },
  {
    id: '7',
    amount: 80,
    numberPrice: 777.0,
    requestId: '10000017392941114415106840',
    createdAt: '2024-07-24',
    completedAt: '2024-07-24',
    status: 2,
    invoice: 2,
  },
  {
    id: '10',
    amount: 50,
    numberPrice: 99.0,
    requestId: '10000017392941114415106843',
    createdAt: '2024-07-27',
    completedAt: '2024-07-27',
    status: 1,
    invoice: 1,
  },
];

export default TableData;
