import { Box, Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchImages } from 'src/store/apps/resources/image/ImageSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogImage from '../dialog/DialogImage';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen }) => {
  const [key, setKey] = useState<string | null>(null);
  const [checkTest, setCheckTest] = useState<boolean>(false);
  const [dataSelect, setDataSelect] = useState<string[]>([]);
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
      render: (_row: any, value: any) => {
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

  useEffect(() => {
    const hiddenColumns = column
      .filter((col) => col.isValids === false)
      .map((col) => col.dataIndex || '');

    setDataSelect(hiddenColumns);
  }, []);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Select
          multiple
          value={dataSelect}
          displayEmpty
          onChange={handleColumnChange}
          renderValue={() => 'Bộ Lọc'}
        >
          {column.map((header: any) => {
            console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex));

            const isSelected = dataSelect.includes(header.dataIndex);

            return (
              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                <Checkbox checked={!isSelected} />
                <ListItemText primary={header.title} />
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <CustomTable dataSource={dataImages} columns={column} dataSelect={dataSelect} />
      </Grid>

      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
      />
    </Grid>
  );
};

export default Tab5;
