import { Box, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchUrls } from 'src/store/user/user-resources/urls/urlsUseSlice';
import DialogURL from '../dialog/DIalogURL';
import { DeleteResourceActionUrl } from 'src/store/user/user-resources/files/DeleteResourceUser';
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
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const data = useSelector((state: AppState) => state.resourcesUrls.data);

  useEffect(() => {
    dispatch(fetchUrls({ page, size: rowsPerPage }));
  }, [ page, rowsPerPage]);

  const handleDelete = async (urlId: number) => {
    await dispatch(DeleteResourceActionUrl(urlId)); 
    dispatch(fetchUrls({ page, size: rowsPerPage }));
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
      render: (_, value: any) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            onClick={() => handleDelete(value.urlId)}
          >
            <IconTrash stroke={2} style={{ color: '#FA896B' }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ paddingTop: 1 }}>
      <CustomTable
        dataSource={data.content}
        columns={columns}
        dataSelect={dataSelect}
        count={data.totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />

      <DialogURL open={open} setOpen={setOpen} value={value} setPage={setPage} />
    </Box>
  );
};

export default Tab6;
