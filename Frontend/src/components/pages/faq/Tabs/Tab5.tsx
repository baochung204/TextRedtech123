import { Box, Grid, IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Column } from 'src/components/ComponentTables/ColumnInterface';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchImages } from 'src/store/user/user-resources/images/imagesUesSlice';
import DialogImage from '../dialog/DialogImage';
// import { ModelType } from 'src/store/user/user-resources/models/type/modelsType';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect: string[];
  checkOption: string | null;
  setCheckOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const Tab5: React.FC<PropsTab5> = ({
  // value,
  // open,
  setOpen,
  dataSelect,
  // checkOption,
  setCheckOption,
}) => {
  const [key, setKey] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const data = useSelector((state: AppState) => state.resourcesImages.data);
  // const {totalElements=0}:ModelType = useSelector((state: AppState) => state.resourcesImages.data);
  console.log(data);

  useEffect(() => {
    dispatch(fetchImages({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  const onHandleOpenImageById = (id: number) => {
    setKey(id);
    setOpen(true);
    setCheckOption('view');
  };

  // const onHandleRemove = (id: string) => {
  //   dispatch(removeImage(id));
  // };
  // const handleChangePage = (_event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newSize = parseInt(event.target.value, 10);
  //   setRowsPerPage(newSize);
  //   setPage(0);
  // };

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
            <IconButton onClick={() => { onHandleOpenImageById(value.imageId)}}>
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
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
        columns={column}
        dataSelect={dataSelect}
        count={data.totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
        dataImages={data.content}
        checkOption={checkOption}
        setCheckOption={setCheckOption}
      />
    </Box>
  );
};

export default Tab5;
