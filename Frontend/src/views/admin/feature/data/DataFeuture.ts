// import u1 from 'src/assets/images/profile/user-1.jpg';
// import u2 from 'src/assets/images/profile/user-2.jpg';
// import u3 from 'src/assets/images/profile/user-3.jpg';
// import u4 from 'src/assets/images/profile/user-4.jpg';
// import u5 from 'src/assets/images/profile/user-5.jpg';
// import u6 from 'src/assets/images/profile/user-6.jpg';
// import u7 from 'src/assets/images/profile/user-7.jpg';
// import u8 from 'src/assets/images/profile/user-8.jpg';
// import u9 from 'src/assets/images/profile/user-9.jpg';
// import u10 from 'src/assets/images/profile/user-10.jpg';

interface DataFeature {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  contextFeature: string;
  note: string;
  status: string;
}

// const images = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

// function getRandomImage() {
//     const randomIndex = Math.floor(Math.random() * images.length);
//     return images[randomIndex];
// }

const DataFeature: DataFeature[] = [
  {
    id: '1',
    createdAt: new Date('2023-11-22'),
    name: 'John Smith',
    email: 'nqton301004@gmail.com',
    phone: '0987654321',
    contextFeature: '��ng dụng web đơn giản',
    note: 'Chưa đăng',
    status: 'Chưa xem',
  },
{
  id: '2',
  createdAt: new Date('2023-11-21'),
  name: 'Jane Doe',
  email: 'janedoe@example.com',
  phone: '0987654322',
  contextFeature: 'Ứng dụng di động',
  note: 'Đã đăng',
  status: 'Đã xem',
},
{
  id: '3',
  createdAt: new Date('2023-11-20'),
  name: 'Alice Johnson',
  email: 'alicej@example.com',
  phone: '0987654323',
  contextFeature: 'Ứng dụng thương mại điện tử',
  note: 'Chưa đăng',
  status: 'Chưa xem',
},
{
  id: '4',
  createdAt: new Date('2023-11-19'),
  name: 'Bob Brown',
  email: 'bobb@example.com',
  phone: '0987654324',
  contextFeature: 'Ứng dụng quản lý',
  note: 'Đã đăng',
  status: 'Đã xem',
},
{
  id: '5',
  createdAt: new Date('2023-11-18'),
  name: 'Charlie Davis',
  email: 'charlied@example.com',
  phone: '0987654325',
  contextFeature: 'Ứng dụng học tập',
  note: 'Chưa đăng',
  status: 'Chưa xem',
},
{
  id: '6',
  createdAt: new Date('2023-11-17'),
  name: 'Diana Evans',
  email: 'dianae@example.com',
  phone: '0987654326',
  contextFeature: 'Ứng dụng giải trí',
  note: 'Đã đăng',
  status: 'Đã xem',
},
{
  id: '7',
  createdAt: new Date('2023-11-16'),
  name: 'Ethan Foster',
  email: 'ethanf@example.com',
  phone: '0987654327',
  contextFeature: 'Ứng dụng sức khỏe',
  note: 'Chưa đăng',
  status: 'Chưa xem',
},
{
  id: '8',
  createdAt: new Date('2023-11-15'),
  name: 'Fiona Green',
  email: 'fionag@example.com',
  phone: '0987654328',
  contextFeature: 'Ứng dụng tài chính',
  note: 'Đã đăng',
  status: 'Đã xem',
},
{
  id: '9',
  createdAt: new Date('2023-11-14'),
  name: 'George Harris',
  email: 'georgeh@example.com',
  phone: '0987654329',
  contextFeature: 'Ứng dụng giáo dục',
  note: 'Chưa đăng',
  status: 'Chưa xem',
},
{
  id: '10',
  createdAt: new Date('2023-11-13'),
  name: 'Hannah White',
  email: 'hannahw@example.com',
  phone: '0987654330',
  contextFeature: 'Ứng dụng du lịch',
  note: 'Đã đăng',
  status: 'Đã xem',
},
{
  id: '11',
  createdAt: new Date('2023-11-12'),
  name: 'Ian King',
  email: 'iank@example.com',
  phone: '0987654331',
  contextFeature: 'Ứng dụng mạng xã hội',
  note: 'Chưa đăng',
  status: 'Chưa xem',
}
 
];

export default DataFeature;
