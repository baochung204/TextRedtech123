import {
  Alert,
  Checkbox,
  Grid,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  Slide,
  Snackbar,
} from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchUrls, removeUrl } from 'src/store/apps/resources/url/UrlSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogURL from '../dialog/DIalogURL';

interface PropsTab6 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SlideTransition(props: any) {
  return <Slide {...props} direction="left" />;
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen }) => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (value) setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  const dispatch = useDispatch<AppDispatch>();
  const dataUrls = useSelector((state: AppState) => state.urlResources.urls);

  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  const onHandleRemove = (id: string) => {
    try {
      dispatch(removeUrl(id));
      setShowAlert({ type: 'success', message: 'Xóa URL thành công!' });
      setSnackbarOpen(true);
    } catch (error) {
      setShowAlert({ type: 'error', message: 'Xóa URL thất bại!' });
      setSnackbarOpen(true);
    }
    dispatch(removeUrl(id))
      .then(() => {
        setShowAlert({ type: 'success', message: 'Xóa URL thành công!' });
        setSnackbarOpen(true);
      })
      .catch(() => 
        setShowAlert({ type: 'error', message: 'Xóa URL thất bại!' });
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = (_event: any, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const column = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tiêu đề URL',
      dataIndex: 'tilte',
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
      dataIndex: 'idCode',
      render: (_value: string, urls: any) => (
        <IconButton onClick={() => onHandleRemove(urls.id)}>
          <IconTrash stroke={2} style={{ color: '#FA896B' }} />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Select
            multiple
            value={dataSelect}
            displayEmpty
            onChange={handleColumnChange}
            renderValue={() => 'Bộ Lọc'}
          >
            {column.map((header: any) => {
              const isValidColumn = header.isValids !== undefined ? header.isValids : true;
              const isSelected = isValidColumn
                ? !dataSelect.includes(header.dataIndex)
                : dataSelect.includes(header.dataIndex);

              return (
                <MenuItem key={header.dataIndex} value={header.dataIndex}>
                  <Checkbox checked={isSelected} />
                  <ListItemText primary={header.title} />
                </MenuItem>
              );
            })}
          </Select>
        </Grid>

        <Grid item xs={12}>
          <CustomTable dataSource={dataUrls} columns={column} dataSelect={dataSelect} />
        </Grid>

        <DialogURL open={open} setOpen={setOpen} value={value} />
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={SlideTransition}
      >
        <Alert onClose={handleCloseSnackbar} severity={showAlert?.type} variant="filled">
          {showAlert?.message || 'Lưu thay đổi thành công'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Tab6;
