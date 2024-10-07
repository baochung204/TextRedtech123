import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
  IconDatabaseSmile,
  IconEye,
  IconPhoto,
  IconPhotoScan,
  IconTrash,
} from '@tabler/icons-react';
import icontext from 'src/assets/images/logos/R-Point.png';
import { HeadCell } from '../types/HeadCell';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import capacity from 'src/assets/Gallary/DUNG LUONG.png';
import gallarypercustomer from 'src/assets/Gallary/HINH ANH KHACH HANG.png';
import gallary from 'src/assets/Gallary/HINH ANH.png';

export const Image = [
  {
    bgColor: 'primary.light',
    title: 'Hình ảnh',
    total: '52',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={gallary} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Khách hàng',
    total: '189',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={customer} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Dung lượng',
    total: '32.415',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={capacity} width={30} />
        </Box>
      </>
    ),
  },
  {
    bgColor: 'primary.light',
    title: 'Hình ảnh/khách hàng',
    total: '11.415',
    icons: (
      <>
        <Box
          textAlign="center"
          padding={1}
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={gallarypercustomer} width={30} />
        </Box>
      </>
    ),
  },
];
export const ImageCells: HeadCell[] = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'creationTime',
    title: 'Ngày tạo',
  },
  // {
  //   dataIndex: 'creator',
  //   title: 'Người tạo',
  // },
  {
    dataIndex: 'creator',
    title: 'ID khách hàng',
  },
  {
    dataIndex: 'image',
    title: 'Hình ảnh',
  },
  {
    dataIndex: 'imageName',
    title: 'Tên ảnh',
  },
  {
    dataIndex: 'title',
    title: 'Tiêu đề',
  },
  // {
  //     dataIndex: 'description',
  //     title: 'Mô tả',
  // },
  {
    dataIndex: 'size',
    title: 'Dung lượng',
  },
  {
    dataIndex: 'url',
    title: 'URL',
  },
  // {
  //   dataIndex: 'actions',
  //   title: 'Hoạt động',
  //   render: (()=> (
  //     <>
  //       {/* <IconButton>
  //         <IconEye stroke={2} style={{ color: '#5D87FF' }} />
  //       </IconButton> */}
  //       <IconButton>
  //         <IconTrash stroke={2} style={{ color: '#FA896B' }} />
  //       </IconButton>
  //     </>
  //   ))
  // },
];

export const ImageRows = [
  {
    id: 'IMG001',
    creationTime: '2024-09-01',
    // creator: 'Nguyễn Văn A',
    image: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm A',
    title: 'Sản phẩm A - Ảnh chụp từ bên trái',
    // description: 'Hình ảnh mô tả sản phẩm A từ góc nhìn bên trái',
    size: 1.5,
    url: 'https://example.com/images/img001.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
  {
    id: 'IMG002',
    creationTime: '2024-09-02',
    // creator: 'Trần Thị B',
    image: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm B',
    title: 'Sản phẩm B - Ảnh chụp từ phía trước',
    // description: 'Hình ảnh mô tả sản phẩm B từ góc nhìn chính diện',
    size: 2.1,
    url: 'https://example.com/images/img002.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
  {
    id: 'IMG003',
    creationTime: '2024-09-03',
    // creator: 'Lê Văn C',
    image: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm C',
    title: 'Sản phẩm C - Ảnh chụp chi tiết',
    // description: 'Hình ảnh cận cảnh sản phẩm C để thấy rõ chi tiết',
    size: 1.8,
    url: 'https://example.com/images/img003.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
  {
    id: 'IMG004',
    creationTime: '2024-09-04',
    // creator: 'Hoàng Thị D',
    image: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm D',
    title: 'Sản phẩm D - Ảnh chụp từ bên phải',
    // description: 'Hình ảnh sản phẩm D từ góc nhìn bên phải',
    size: 2.3,
    url: 'https://example.com/images/img004.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
  {
    id: 'IMG005',
    creationTime: '2024-09-05',
    // creator: 'Phạm Văn E',
    image: (
      <>
        <img src={icontext} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm E',
    title: 'Sản phẩm E - Ảnh chụp từ góc trên',
    // description: 'Hình ảnh sản phẩm E từ góc nhìn trên xuống',
    size: 1.6,
    url: 'https://example.com/images/img005.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
  {
    id: 'IMG006',
    creationTime: '2024-09-06',
    // creator: 'Ngô Thị F',
    image: (
      <>
        <img src={`icontext`} alt="" width={40} />
      </>
    ),
    imageName: 'Ảnh sản phẩm F',
    title: 'Sản phẩm F - Ảnh chụp từ xa',
    // description: 'Hình ảnh sản phẩm F từ góc xa để thấy toàn cảnh',
    size: 2.5,
    url: 'https://example.com/images/img006.jpg',
    actions: (
      <>
        <IconButton>
          <IconEye stroke={2} style={{ color: '#5D87FF' }} />
        </IconButton>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      </>
    ),
  },
];
