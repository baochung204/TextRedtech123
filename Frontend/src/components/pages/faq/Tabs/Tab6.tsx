import { Box, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchUrls } from 'src/store/apps/resources/url/UrlSlice';
import { AppDispatch, AppState } from 'src/store/Store';
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
  const dispatch = useDispatch<AppDispatch>();
  const dataUrls = useSelector((state: AppState) => state.urlResources.urls);

  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

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
      <CustomTable dataSource={dataUrls} columns={columns} dataSelect={dataSelect} />

      <DialogURL open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab6;
