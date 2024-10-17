export interface OrderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  typeacc: string;
  troly: string;
  tongnap: string;
  sodu: string;
  sex?: string;
  date?: Date;
  dccn?: string;
  mstcn?: string;
  xvat?: boolean;
  tct?: string;
  mstdn?: string;
  ndd?: string;
  cv?: string;
  dcct?: string;
  ect?: string;
}

const OrderData: OrderProps[] = [
  {
    id: 'adjhjibi2',
    name: 'Phạm Thùy Trang',
    email: 'trangpt@gmail.com',
    phone: '0928424211',
    typeacc: 'BUSINESS',
    troly: '100',
    tongnap: '24.224.552',
    sodu: '424.222',
  },
  {
    id: 'adjhjibi3',
    name: 'Nguyễn Văn An',
    email: 'anngv@gmail.com',
    phone: '0987654321',
    typeacc: 'customer',
    troly: '150',
    tongnap: '50.000.000',
    sodu: '100.000',
  },
  {
    id: 'adjhjibi23',
    name: 'Trần Thị Mai',
    email: 'maitt@gmail.com',
    phone: '0934567890',
    typeacc: 'BUSINESS',
    troly: '200',
    tongnap: '30.000.000',
    sodu: '250.000',
  },
  {
    id: 'adjhjibi24',
    name: 'Lê Thị Lan',
    email: 'lanlt@gmail.com',
    phone: '0912345678',
    typeacc: 'customer',
    troly: '120',
    tongnap: '15.000.000',
    sodu: '300.000',
  },
  {
    id: 'adjhjibi25',
    name: 'Bùi Minh Tuấn',
    email: 'tuamb@gmail.com',
    phone: '0909876543',
    typeacc: 'BUSINESS',
    troly: '180',
    tongnap: '40.000.000',
    sodu: '200.000',
  },
  {
    id: 'adjhjibi26',
    name: 'Vũ Thị Hương',
    email: 'huongvt@gmail.com',
    phone: '0922334455',
    typeacc: 'customer',
    troly: '140',
    tongnap: '25.000.000',
    sodu: '180.000',
  },
  {
    id: 'adjhjibi28',
    name: 'Đặng Quang Hòa',
    email: 'hoadq@gmail.com',
    phone: '0933344556',
    typeacc: 'customer',
    troly: '160',
    tongnap: '35.000.000',
    sodu: '220.000',
  },
  {
    id: '7adjhjibi2',
    name: 'Phan Thanh Phúc',
    email: 'phuctp@gmail.com',
    phone: '0911223344',
    typeacc: 'BUSINESS',
    troly: '110',
    tongnap: '10.000.000',
    sodu: '150.000',
  },
  {
    id: '9adjhjibi2',
    name: 'Ngô Thị Thu',
    email: 'thutn@gmail.com',
    phone: '0944556677',
    typeacc: 'customer',
    troly: '130',
    tongnap: '28.000.000',
    sodu: '190.000',
  },
  {
    id: '10adjhjibi2',
    name: 'Hoàng Trung Dũng',
    email: 'dunght@gmail.com',
    phone: '0922334455',
    typeacc: 'BUSINESS',
    troly: '170',
    tongnap: '45.000.000',
    sodu: '280.000',
  },
  {
    id: '11adjhjibi2',
    name: 'Mai Thị Lệ',
    email: 'lemt@gmail.com',
    phone: '0912333445',
    typeacc: 'Cá nhân',
    troly: '90',
    tongnap: '12.000.000',
    sodu: '120.000',
  },
];

export default OrderData;
