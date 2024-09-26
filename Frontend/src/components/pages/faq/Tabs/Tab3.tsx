import React from 'react';
import DataTable3 from '../DataTable/TableTab3';
import DialogFile from '../dialog/DialogFile';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { Box,  Grid, IconButton} from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

interface ItemTable3 {
  fileName: string;
  datas: string;
  creationDate: Date;
  formats: string;
  idCode: string;
  isCheck: boolean;
}


const Tab3 = ({ value, open, setOpen ,dataSelect }: PropsTab3) => {

  const column =  [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Tên file',
      dataIndex: 'fileName'
    },
    {
      title: 'Dung lượng',
      dataIndex: 'datas',
    },
    {
      title: 'Ngày tải',
      dataIndex: 'creationDate',
      render: (value: Date) => new Date(value).toLocaleDateString(),
    },
    {
      title: 'Định dạng',
      dataIndex: 'formats'
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
      render: (value: ItemTable3, row: ItemTable3) => (
        <Grid container>
          <Grid item xs={4}>
            {value && (
              <IconButton onClick={() => console.log(row.idCode)}>
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={4}>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </Grid>
        </Grid>
      )
    }
  ]



  return (
    <Box
      sx={{
        paddingTop: 1
      }}
    >

      <CustomTable
        dataSource={DataTable3}
        columns={column}
        dataSelect={dataSelect}
      />

      <DialogFile open={open} setOpen={setOpen} value={value} />
    </Box>
  );
};

export default Tab3;
