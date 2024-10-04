import CustomTable from 'src/components/ComponentTables/CustomTable';
import DataTable4 from '../DataTable/TableTab4';
import { Box, Grid, IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';

interface ItemTable4 {
  images: string;
  modelName: string;
  modelLocal: string;
  creationDate: Date;
  trainedTokens: string;
  idCode: string;
}

interface PropsData {
  dataSelect?: string[];
}

const Tab4 = ({ dataSelect }: PropsData) => {
  const column = [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'creationDate',
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
      dataIndex: 'modelLocal',
    },
    {
      title: 'Token huấn luyện',
      dataIndex: 'trainedTokens',
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
      render: (_row: ItemTable4, value: ItemTable4) => {
        // console.log(row);
        // console.log(value);

        return (
          <Grid container>
            <Grid item xs={4}>
              <IconButton
                onClick={() => {
                  console.log(value.idCode);
                }}
              >
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton>
                <IconTrash stroke={2} style={{ color: '#FA896B' }} />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: 1,
      }}
    >
      <CustomTable dataSource={DataTable4} columns={column} dataSelect={dataSelect} />
    </Box>
  );
};

export default Tab4;
