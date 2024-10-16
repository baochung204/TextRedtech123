import { Box, Grid, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchFile } from 'src/store/apps/resources/file/fileSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogFile from '../dialog/DialogFile';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab3 = ({ value, open, setOpen }: PropsTab3) => {
  // const Tab3 = ({ value, open, setOpen, checkOption, setCheckOption }: PropsTab3) => {
  // const [dataSelect, setDataSelect] = useState<string[]>([]);
  const [dataSelect] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const dataFile = useSelector((state: AppState) => state.file.data);
  useEffect(() => {
    dispatch(fetchFile());
  }, [dispatch]);
  const column = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên file',
      dataIndex: 'name',
    },
    {
      title: 'Dung lượng',
      dataIndex: 'size',
    },
    {
      title: 'Ngày tải',
      dataIndex: 'dateTime',
      render: (value: Date) => new Date(value).toLocaleDateString(),
    },
    {
      title: 'Định dạng',
      dataIndex: 'typeFile',
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
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
    <Box
      sx={{
        paddingTop: 1,
      }}
    >
      <CustomTable dataSource={dataFile} columns={column} dataSelect={dataSelect} />

      <DialogFile open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab3;
