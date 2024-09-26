import { Grid, Box, IconButton } from '@mui/material';
import DialogImage from '../dialog/DialogImage';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from 'src/store/apps/resources/image/ImageSlice';
import { AppDispatch, AppState } from 'src/store/Store';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
}

interface PropsData {
  images: string;
  imgName: string;
  createDate: string;
  idCode: string;
  title: string;
  moTa: string;
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen, dataSelect }) => {
  const [key, setKey] = useState<string | null>(null);
  const [checkTest, setCheckTest] = useState<boolean>(false);
  // const [dataSelect, setDataSelect] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const dataImages = useSelector((state: AppState) => state.imageResources.images);
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const column = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'dateTime',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'imageURL',
      render: (value: string) => {
        return <Box component="img" src={value} alt="" width={50} />;
      },
    },
    {
      title: 'Tên ảnh',
      dataIndex: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
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
  ];
  console.log(dataImages);

  return (
    <Box
      sx={{
        paddingTop: 1,
      }}
    >
      <CustomTable dataSource={dataImages} columns={column} dataSelect={dataSelect} />

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
