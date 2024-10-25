import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch, useSelector } from 'src/store/Store';
import { fetchModels } from 'src/store/user/user-resources/models/modelsUseSlice';

interface PropsData {
  dataSelect?: string[];
}

const Tab4 = ({ dataSelect }: PropsData) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const data = useSelector((state: AppState) => state.resourcesModels.data);
  // const { totalElements = 0 }:ModelType= useSelector((state: AppState) => state.resourcesModels.data);
  // const [modelsData, setModelsData] = useState<ModelType>();
  useEffect(() => {
    dispatch(fetchModels({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);
  // useEffect(() => {
  //   if (Models !== modelsData) {
  //     setModelsData(Models);
  //   }
  // }, [Models, modelsData]);
  // const handleChangePage = (_event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const newSize = parseInt(event.target.value, 10);
  //   setRowsPerPage(newSize);
  //   setPage(0);
  // };

  const column = [
    {
      title: 'ID',
      dataIndex: 'modelId',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'publishDate',
      render: (value: Date) => {
        return new Date(value).toLocaleDateString();
      },
    },
    {
      title: 'Tên model',
      dataIndex: 'modelName',
    },
    {
      title: 'Model gốc',
      dataIndex: 'baseModel',
    },
    {
      title: 'Token huấn luyện',
      dataIndex: 'trainedToken',
    },
    // {
    //   title: 'Hành động',
    //   dataIndex: 'isCheck',
    //   render: (_row: ItemTable4, value: ItemTable4) => {
    //     return (
    //       <Grid container>
    //         <Grid item xs={4}>
    //           <IconButton
    //             onClick={() => {
    //               console.log(value.idCode);
    //             }}
    //           >
    //             <IconEye stroke={2} style={{ color: '#5D87FF' }} />
    //           </IconButton>
    //         </Grid>
    //         <Grid item xs={4}>
    //           <IconButton>
    //             <IconTrash stroke={2} style={{ color: '#FA896B' }} />
    //           </IconButton>
    //         </Grid>
    //       </Grid>
    //     );
    //   },
    // },
  ];

  return (
    <Box
      sx={{
        paddingTop: 1,
      }}
    >
      <CustomTable
        dataSource={data?.content}
        columns={column}
        dataSelect={dataSelect}
        count={data.totalElements}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Box>
  );
};

export default Tab4;
