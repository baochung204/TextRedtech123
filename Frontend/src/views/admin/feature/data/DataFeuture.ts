// src/data/DataFeature.ts

interface FeatureItem {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  contextFeature: string;
  note: string;
  status: string
}

const DataFeature: FeatureItem[] = [
  {
    id: '1',
    createdAt: new Date('2023-11-12'),
    name: 'Ian King',
    email: 'iank@example.com',
    phone: '0987654331',
    contextFeature: 'Ứng dụng mạng xã hội',
    note: 'Chưa đăng',
    status: 'Chưa xem',
  },
  {
    id: '2',
    createdAt: new Date('2023-11-12'),
    name: 'Ian King',
    email: 'iank@example.com',
    phone: '0987654331',
    contextFeature: 'Ứng dụng mạng xã hội',
    note: 'Chưa đăng',
    status: 'Chưa xem',
  },
  // Thêm nhiều dữ liệu mẫu nếu cần
];

export default DataFeature;
export type { FeatureItem };
