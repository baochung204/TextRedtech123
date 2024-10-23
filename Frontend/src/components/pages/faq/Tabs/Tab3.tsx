import { Box, Grid, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchFile } from 'src/store/apps/resources/file/fileSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogFile from '../dialog/DialogFile';
import { Result } from 'src/types/apps/file';


interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab3: React.FC<PropsTab3> = ({ value, open, setOpen }) => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<Result | undefined>()

  const datax = useSelector((state: AppState) => state.file.data)

  useEffect(() => {
    dispatch(fetchFile({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  useEffect(() => {
      setData(datax)
  }, [data, datax])
  
  console.log('update', page);
  console.log('datanew: ', data);

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
        dataSource={data?.content ? data.content : []} 
        columns={columns} 
        count={data?.totalElements ? data.totalElements : 0} 
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
