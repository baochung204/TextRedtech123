import { Box,  Grid, IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Column } from 'src/components/ComponentTables/ColumnInterface';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchImages } from 'src/store/user/user-resources/images/imagesUesSlice';
import DialogImage from '../dialog/DialogImage';
import Checkbox from '@mui/material/Checkbox';
import { DeleteResourceActionImage } from 'src/store/user/user-resources/files/DeleteResourceUser';



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
  const [key, setKey] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const data = useSelector((state: AppState) => state.resourcesImages.data);
  console.log(data);
  const [check, setCheck] = useState<boolean>(false)
  useEffect(() => {
    dispatch(fetchImages({ page, size: rowsPerPage }));
  }, [page, rowsPerPage]);

  const onHandleOpenImageById = (id: number) => {
    setKey(id);
    setOpen(true);
    setCheckOption('view');
  };

  // const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const allIds = data.content.map((item: any) => item.imageId);
  //     setSelectedIds(allIds);
  //   } else {
  //     setSelectedIds([]);
  //   }
  // };

  const handleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDelete = () => {
    dispatch(DeleteResourceActionImage(selectedIds))
    console.log('dataselect', selectedIds);

  }

  const column: Column[] = [
    ...(check ? [
      {
        title:
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <IconButton
              disabled={selectedIds.length > 0 ? false : true}
              onClick={handleDelete}
            >
              <IconTrash
                stroke={2}
                style={{ color: selectedIds.length > 0 ? '#FA896B' : '#8A909A' }}
              />
            </IconButton>
          </Box>,
        dataIndex: 'selectAll',
        render: (_: any, value: any) =>
          <Checkbox
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
            size="small"
            checked={selectedIds.includes(value.imageId)}
            onChange={() => handleSelect(value.imageId)}
          />
      },
    ] : []),
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
      render: (value: string) => (
        <Box component="img" src={value} alt="" width={50} height={50} />
      ),
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
            <IconButton onClick={() => onHandleOpenImageById(value.imageId)}>
              <IconEye stroke={2} style={{ color: '#5D87FF' }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => setCheck(!check)}>
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
