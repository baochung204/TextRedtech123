import { Box, Grid, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchFile } from 'src/store/apps/resources/file/fileSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import { Result } from 'src/types/apps/file';
import DialogFile from '../dialog/DialogFile';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab3: React.FC<PropsTab3> = ({ value, open, setOpen }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>();

  const { content = [], totalElements = 0 }: Result = useSelector(
    (state: AppState) => state.file.data || {}
  );

  useEffect(() => {
    dispatch(fetchFile({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  useEffect(() => {
    if (page > 0 && page * rowsPerPage >= totalElements) {
      setPage(Math.max(0, Math.ceil(totalElements / rowsPerPage) - 1));
    }
  }, [totalElements, rowsPerPage, page]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize);
    setPage(0);
  };

  const columns = [
    { title: 'ID', dataIndex: 'fileId' },
    { title: 'Tên file', dataIndex: 'name' },
    { title: 'Dung lượng', dataIndex: 'size' },
    {
      title: 'Ngày tải',
      dataIndex: 'date',
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    { title: 'Định dạng', dataIndex: 'type' },
    {
      title: 'Hành động',
      dataIndex: 'action',
      render: () => (
        <Grid container>
          <Grid item xs={12}>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
  ];

  return (
    <Box sx={{ paddingTop: 1 }}>
      <CustomTable
        dataSource={content}       // Array of File objects
        columns={columns}           // Array of Column objects
        count={totalElements}       // Total number of elements
        rowsPerPage={rowsPerPage}   // Rows per page
        page={page}                 // Current page
        onPageChange={handleChangePage}         // Page change handler
        onRowsPerPageChange={handleChangeRowsPerPage} 
      />
      <DialogFile open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab3;
