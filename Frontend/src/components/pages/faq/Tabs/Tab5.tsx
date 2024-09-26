import React, {  useState } from 'react';
import {
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import DialogImage from '../dialog/DialogImage';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { IconEye, IconTrash } from '@tabler/icons-react';
import DataTable5 from '../DataTable/TableTab5';


interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[],

}


interface PropsData {
  images: string;
  imgName: string;
  createDate: string;
  idCode: string,
  title: string,
  moTa: string
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen, dataSelect }) => {
  const [key, setKey] = useState<string | null>(null);
  const [checkTest, setCheckTest] = useState<boolean>(false);

  const column =  [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createDate',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'images',
      render: (value: string) => {
        return <Box component="img" src={value} alt="" width={50} />;
      },
    },
    {
      title: 'Tên ảnh',
      dataIndex: 'imgName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
      render: (_row: PropsData, value: PropsData) => {
        return (
          <Grid container>
            <Grid item xs={4}>
              <IconButton
                onClick={() => {
                  setKey(`${value.idCode}`);
                  setOpen(true);
                }}
              >
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setCheckTest(!checkTest)}>
                <IconTrash stroke={2} style={{ color: '#FA896B' }} />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
  ]

  return (
    <Box
      sx={{
        paddingTop: 1
      }}
    >
      <CustomTable
        dataSource={DataTable5}
        columns={column}
        dataSelect={dataSelect}
      />

      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
      />
    </Box>
  );
};

export default Tab5;
