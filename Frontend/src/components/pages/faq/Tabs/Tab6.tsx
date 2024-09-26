import { Box, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchUrls } from 'src/store/apps/resources/url/UrlSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogURL from '../dialog/DialogURL';

interface PropsTab6 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen, dataSelect }) => {
  // const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
  //   null,
  // );
  // const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const dataUrls = useSelector((state: AppState) => state.urlResources.urls);

  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  // const onHandleRemove = async (id: string) => {
  //   try {
  //     await dispatch(removeUrl(id));
  //     setShowAlert({ type: 'success', message: 'Xóa URL thành công!' });
  //     setSnackbarOpen(true);
  //   } catch (error) {
  //     setShowAlert({ type: 'error', message: 'Xóa URL thất bại!' });
  //     setSnackbarOpen(true);
  //   }
  // };

  // const handleCloseSnackbar = (_event: any, reason?: string) => {
  //   if (reason === 'clickaway') return;
  //   setSnackbarOpen(false);
  // };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tiêu đề URL',
      dataIndex: 'title',
    },
    {
      title: 'Mô tả URL',
      dataIndex: 'describe',
    },
    {
      title: 'URL',
      dataIndex: 'url',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      render: () => (
        // <IconButton onClick={() => onHandleRemove(urls.id)}>
        <IconButton>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ paddingTop: 1 }}>
      <CustomTable dataSource={dataUrls} columns={columns} dataSelect={dataSelect} />

      <DialogURL open={open} setOpen={setOpen} value={value} />

      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {showAlert ? (
          <Alert onClose={handleCloseSnackbar} severity={showAlert.type} variant="filled">
            {showAlert.message}
          </Alert>
        ) : undefined}
      </Snackbar> */}
    </Box>
  );
};

export default Tab6;
