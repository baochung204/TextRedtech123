import { Button } from '@mui/material';
import TableList from 'src/components/ComponentTables/tableList';

interface HeadCell {
  disablePadding: boolean;
  dataIndex: string;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    dataIndex: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID Sản Phẩm',
  },
  {
    dataIndex: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Tên Sản Phẩm',
  },
  {
    dataIndex: 'image',
    numeric: false,
    disablePadding: false,
    label: 'Ảnh Sản Phẩm',
  },
  {
    dataIndex: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Trạng Thái',
  },
  {
    dataIndex: 'active',
    numeric: false,
    disablePadding: false,
    label: 'hoat dong',
  },
];

interface DataRow {
  id: string;
  name: string;
  image: string;
  status: JSX.Element;
}

const dataRows: DataRow[] = [
  {
    id: '123',
    name: 'Sản phẩm 1',
    image: '123',
    status: <Button>1</Button>,
  },
  {
    id: '124',
    name: 'Sản phẩm 2',
    image: '124',
    status: <Button>2</Button>,
  },
  {
    id: '125',
    name: 'Sản phẩm 3',
    image: '125',
    status: <Button>3</Button>,
  },
  {
    id: '126',
    name: 'Sản phẩm 4',
    image: '126',
    status: <Button>4</Button>,
  },
];

const TableStatusExample = () => {
  return (
    <div>
      <TableList headCells={headCells} dataRows={dataRows} />
    </div>
  );
};

export default TableStatusExample;
