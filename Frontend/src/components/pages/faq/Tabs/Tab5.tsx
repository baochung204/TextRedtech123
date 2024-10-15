import { Box, Grid, IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import {
  fetchImageById,
  fetchImages,
  removeImage,
} from 'src/store/apps/resources/image/ImageSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogImage from '../dialog/DialogImage';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen, dataSelect, checkOption, setCheckOption }) => {
  const [key, setKey] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const dataImages = useSelector((state: AppState) => state.imageResources.images);
  console.log(dataImages);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const onHandleOpenImageById = (id: string) => {
    // dispatch(fetchImageById(id));
    setKey(id);
    setOpen(true);
    setCheckOption('view')
  };

  const onHandleRemove = (id: string) => {
    // console.log(id);

    dispatch(removeImage(id));
  };

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
      render: (value: string) => <Box component="img" src={value} alt="" width={50} />,
    },
    {
      title: 'Tên ảnh',
      dataIndex: 'name',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
      render: (_row: any, value: any) => (
        <Grid container>
          <Grid item xs={4}>
            <IconButton onClick={() => onHandleOpenImageById(value.id)}>
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => onHandleRemove(value.id)}>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </Grid>
        </Grid>
      ),
    },
  ];

  return (
    <Box sx={{ paddingTop: 1 }}>
      <CustomTable dataSource={dataImages} columns={column} dataSelect={dataSelect} />
      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
        dataImages={dataImages}
        checkOption={checkOption}
        setCheckOption={setCheckOption}
      />
    </Box>
  );
};

export default Tab5;
