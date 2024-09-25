import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchUrls } from 'src/store/apps/resources/url/UrlSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogURL from '../dialog/DIalogURL';
import BlankCard from 'src/components/apps/assistant/AssistantEditor/BlankCard';

interface PropsTab6 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen }) => {
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(6);
  const dispatch = useDispatch<AppDispatch>();
  const dataUrls = useSelector((state: AppState) => state.urlReducer.urls);
  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  //   const handleChangePage = (newPage: number) => {
  //     setPage(newPage);
  //   };
  //   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  //   };
  //   const paginatedData = DataRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'tilte',
    },
    {
      title: 'Mô tả',
      dataIndex: 'describe',
    },
    {
      title: 'Liên kết',
      dataIndex: 'url',
    },
  ];

  return (
    <>
      <Box>
        <BlankCard>
          <CustomTable columns={columns} dataSource={dataUrls} />
        </BlankCard>
      </Box>
      <DialogURL open={open} setOpen={setOpen} value={value} />
    </>
  );
};

export default Tab6;
