import { Box, Grid, IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppDispatch, AppState, dispatch } from 'src/store/Store';
import DialogImage from '../dialog/DialogImage';
import { Column } from 'src/components/ComponentTables/ColumnInterface';
import { fetchImages } from 'src/store/user/user-resources/images/imagesUesSlice';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab5: React.FC<PropsTab5> = ({
  value,
  open,
  setOpen,
  dataSelect,
  checkOption,
  setCheckOption,
}) => {
  const [key, setKey] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const Images = useSelector((state: AppState) => state.resourcesImages.data);

  useEffect(() => {
    dispatch(fetchImages({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  const onHandleOpenImageById = (id: string) => {
    setKey(id);
    setOpen(true);
    setCheckOption('view');
  };

  // const onHandleRemove = (id: string) => {
  //   dispatch(removeImage(id));
  // };
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize);
    setPage(0);
  };
  const column: Column[] = [
    {
      title: 'ID',
      dataIndex: 'imageId',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'date',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'imageUrl',
      render: (value: string) => <Box component="img" src={value} alt="" width={50} height={50} />,
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
            {/* <IconButton onClick={() => onHandleRemove(value.id)}> */}
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
        dataSource={Images?.content}
        columns={column}
        dataSelect={dataSelect}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
        dataImages={dataImages}
        checkOption={checkOption}
        setCheckOption={setCheckOption}
      /> */}
    </Box>
  );
};

export default Tab5;
