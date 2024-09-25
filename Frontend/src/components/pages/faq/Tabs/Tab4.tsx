
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DataTable4 from '../DataTable/TableTab4';
import { Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';


interface ItemTable4 {
  images: string;
  modelName: string;
  modelLocal: string;
  creationDate: Date;
  trainedTokens: string;
  idCode: string;
}
const column = [

  {
    title: 'ID',
    dataIndex: 'idCode'
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'creationDate',
    render: (value: Date) => {
      return new Date(value).toLocaleDateString();
    }
  },
  {
    title: 'Tên model',
    dataIndex: 'modelName'
  },
  {
    title: 'Model gốc',
    dataIndex: 'modelLocal'
  },
  {
    title: 'Token huấn luyện',
    dataIndex: 'trainedTokens'
  },
  {
    title: 'Hành động',
    dataIndex: 'isCheck',
    render: (row: ItemTable4, value: ItemTable4) => {
      console.log(row);
      console.log(value);

      return (

        <Grid container >
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


      )
    }
  }
]

const Tab4 = () => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log('test: ', event);
    if (value)
      setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container>
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

            // const isValidColumn = header.isValids ?? true;
            // const isSelected =
            // isValidColumn ? !dataSelect.includes(header.dataIndex) : dataSelect.includes(header.dataIndex);
            const isValidColumn = header.isValids !== undefined ? header.isValids : true;

            const isSelected = isValidColumn
              ? !dataSelect.includes(header.dataIndex)
              : dataSelect.includes(header.dataIndex);

            return (// Nếu isValids là false
              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                <Checkbox checked={isSelected} />
                <ListItemText primary={header.title} />
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          dataSource={DataTable4}
          columns={column}
          dataSelect={dataSelect}
        />

      </Grid>
    </Grid>
  );
};

export default Tab4;
