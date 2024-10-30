import { Box, Grid, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchFile } from 'src/store/apps/resources/file/fileSlice';
import { AppState, dispatch, useSelector } from 'src/store/Store';
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
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const data = useSelector((state: AppState) => state.file.data);

  useEffect(() => {
    dispatch(fetchFile({ page: page, size: pageSize }));
  }, [page, pageSize]);

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
        dataSource={data.content}
        columns={columns}
        count={data.totalElements}
        rowsPerPage={pageSize}
        page={page}
        setPage={setPage}
        setRowsPerPage={setPageSize}
      />
      <DialogFile open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab3;
