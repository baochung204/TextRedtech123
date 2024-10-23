import { Box, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchUrls } from 'src/store/user/user-resources/urls/urlsUseSlice';
import DialogURL from '../dialog/DIalogURL';
// import DialogURL from '../dialog/DialogURL';

interface PropsTab6 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen, dataSelect }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const Urls = useSelector((state: AppState) => state.resourcesUrls.data);
  const {totalElements=0} = useSelector((state: AppState) => state.resourcesUrls.data);
  // const [urlsData, setUrlsData] = useState<UrlType>();

  useEffect(() => {
    dispatch(fetchUrls({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);
  // useEffect(() => {
  //   if (Urls !== urlsData) {
  //     setUrlsData(urlsData);
  //   }
  // }, [Urls, urlsData]);
  // console.log('data urls', Urls);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize);
    setPage(0);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'urlId',
    },

    {
      title: 'Tiêu đề URL',
      dataIndex: 'title',
    },
    {
      title: 'Mô tả URL',
      dataIndex: 'description',
    },
    {
      title: 'URL',
      dataIndex: 'url',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      render: () => (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton>
            <IconTrash stroke={2} style={{ color: '#FA896B' }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ paddingTop: 1 }}>
      <CustomTable
        dataSource={Urls?.content}
        columns={columns}
        dataSelect={dataSelect}
        count={totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <DialogURL open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab6;
