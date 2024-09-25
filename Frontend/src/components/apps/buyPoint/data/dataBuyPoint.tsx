interface PropsTable {
  id: string;
  text1: number | string;
  text2: number | string;
}

// const generateIdCode = () => {
//   const randomNumber = Math.floor(Math.random() * 1000000);
//   return `#${randomNumber.toString().padStart(6, '0')}`;
// };

const TableData: PropsTable[] = [
  { id: '1', text1: 70, text2: 21000 },
  { id: '2', text1: 350, text2: 105000 },
  { id: '3', text1: 700, text2: 210000 },
  { id: '4', text1: 1400, text2: 420000 },
  { id: '5', text1: 3500, text2: 1050000 },
  { id: '6', text1: 7000, text2: 2100000 },
  { id: '7', text1: 17500, text2: 5250000 },
  { id: '8', text1: 'Tùy chỉnh', text2: 'Hỗ trợ số lượng lớn' },
];

export default TableData;
