import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { IconTrash } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import customer from 'src/assets/Adminphoto/khách hàng.png';
import assisstant from 'src/assets/Adminphoto/tro ly ap dung.png';
import capacity from 'src/assets/FILE/DUNG LUONG.png';
import file from 'src/assets/FILE/FILE.png';
import { fetchOverviewFilesData } from 'src/store/admin/resources/files/overview/filesSlice';
import { AppDispatch, AppState } from 'src/store/Store';

export const FileCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'fileName',
    title: 'Tên file',
  },
  {
    dataIndex: 'customer',
    title: 'Khách hàng',
  },
  {
    dataIndex: 'format',
    title: 'Định dạng',
  },
  {
    dataIndex: 'size',
    title: 'Dung lượng',
  },
  {
    dataIndex: 'uploadDate',
    title: 'Ngày tải',
  },
  {
    dataIndex: 'actions',
    title: 'Hoạt động',
    render: () => (
      <Box display={'flex'} sx={{ justifyContent: 'center' }}>
        <Tooltip title="Xem" placement="right">
          {/* <IconButton onClick={() => { setOpen(true); setSelectId(value.id) }}>
            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton> */}
          <IconButton>
            <IconTrash stroke={2} style={{ color: '#FA896B' }} />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];

const TableFile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataFilesOverview = useSelector((state: AppState) => state.overview_files.dataa);

  useEffect(() => {
    dispatch(fetchOverviewFilesData());
  }, [dispatch]);

  const totalApplicationAsisstant = dataFilesOverview.totalApplicationAsisstant;
  const totalCustomer = dataFilesOverview.totalCustomer;
  const totalFile = dataFilesOverview.totalFile;
  const totalSize = dataFilesOverview.totalSize;

  // console.log(dataFilesOverview);

  const Files = [
    {
      bgColor: 'primary.light',
      title: 'Files',
      total: totalFile,
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
            <img src={file} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Khách hàng',
      total: totalCustomer,
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
      total: totalSize,
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
      title: 'Trợ lý áp dụng',
      total: totalApplicationAsisstant,
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
            <img src={assisstant} width={30} />
          </Box>
        </>
      ),
    },
  ];
  return { Files, FileCells };
};

export default TableFile;
