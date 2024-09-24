import avt1 from 'src/assets/images/profile/user-1.jpg';
import avt10 from 'src/assets/images/profile/user-10.jpg';
import avt2 from 'src/assets/images/profile/user-2.jpg';
import avt3 from 'src/assets/images/profile/user-3.jpg';
import avt4 from 'src/assets/images/profile/user-4.jpg';
import avt6 from 'src/assets/images/profile/user-6.jpg';
import avt7 from 'src/assets/images/profile/user-7.jpg';
import avt8 from 'src/assets/images/profile/user-8.jpg';
import avt9 from 'src/assets/images/profile/user-9.jpg';
import rank1 from 'src/assets/images/rank/rank1.png';
import rank10 from 'src/assets/images/rank/rank10.png';
import rank2 from 'src/assets/images/rank/rank2.png';
import rank3 from 'src/assets/images/rank/rank3.png';
import rank4 from 'src/assets/images/rank/rank4.png';
import rank6 from 'src/assets/images/rank/rank6.png';
import rank7 from 'src/assets/images/rank/rank7.png';
import rank8 from 'src/assets/images/rank/rank8.png';
import rank9 from 'src/assets/images/rank/rank9.png';
interface PropsTable {
  id: string;
  rankImage: string;
  avatar: string;
  fullName: string;
  model: string;
  gmv: number;
  aov: number;
  cc: number;
  oc: number;
  ex: number;
  sale: number;
}

const TableData: PropsTable[] = [
  {
    id: '0',
    fullName: 'Nguyen Van A',
    rankImage: rank1,
    avatar: avt1,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 20,
  },
  {
    id: '1',
    fullName: 'Nguyen Van B',
    rankImage: rank2,
    avatar: avt2,
    model: 'GTA-2',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 30,
  },
  {
    id: '2',
    fullName: 'Nguyen Van C',
    rankImage: rank3,
    avatar: avt3,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    sale: 25,
    ex: 123002,
  },
  {
    id: '3',
    fullName: 'Nguyen Van D',
    rankImage: rank4,
    avatar: avt4,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 40,
  },
  {
    id: '4',
    fullName: 'Nguyen Van E',
    rankImage: rank4,
    avatar: avt4,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 60,
  },
  {
    id: '5',
    fullName: 'Nguyen Van F',
    rankImage: rank6,
    avatar: avt6,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 60,
  },
  {
    id: '6',
    fullName: 'Nguyen Van G',
    rankImage: rank7,
    avatar: avt7,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 28,
  },
  {
    id: '7',
    fullName: 'Nguyen Van F',
    rankImage: rank8,
    avatar: avt8,
    model: 'GTA-8',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 26,
  },
  {
    id: '8',
    fullName: 'Nguyen Van G',
    rankImage: rank9,
    avatar: avt9,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 36,
  },
  {
    id: '9',
    fullName: 'Nguyen Van H',
    rankImage: rank10,
    avatar: avt10,
    model: 'GTA-1',
    gmv: 100000,
    aov: 200,
    cc: 20,
    oc: 30,
    ex: 123002,
    sale: 50,
  },
];

export default TableData;
