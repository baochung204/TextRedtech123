import React, { useState } from 'react';
import DataTable3 from '../DataTable/TableTab3';
import DialogFile from '../dialog/DialogFile';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelected?: string[]
}
interface ItemTable3 {
  fileName: string;
  datas: string;
  creationDate: Date;
  formats: string;
  idCode: string;
  isCheck: boolean
}

const Tab3 = ({ value, open, setOpen, dataSelected }: PropsTab3) => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const column = [
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
      render: (value: Date) => {
        return new Date(value).toLocaleDateString();
      },
    },
    {
      title: 'Định dạng',
      dataIndex: 'formats'
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
      render: (value: ItemTable3, row: ItemTable3) => {
        console.log(value, row);
        return (
          <>
            <Grid container >
              <Grid item xs={4}>
                {value &&
                  <IconButton
                    onClick={() => {
                      console.log(row.idCode);
                    }}
                  >
                    <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                  </IconButton>
                }
              </Grid>
              <Grid item xs={4}>
                <IconButton>
                  <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
              </Grid>
            </Grid>


          </>
        )
      }
    }
  ]

  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log('test: ', event);
    if (value)
      setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
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
            sx={{}}
          >
            {column.map((header: any) => {
              console.log('header.isValids', header.isValids);

             
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
            dataSource={DataTable3}
            columns={column}
            dataSelect={dataSelect}
          />
        </Grid>

        <DialogFile open={open} setOpen={setOpen} value={value} />
      </Grid>

    </>
  );
};

export default Tab3;



// import React, { useState } from 'react';

// import DataTable3 from '../DataTable/TableTab3';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Box,
//   Typography,
//   TablePagination,
//   Grid,
//   Button,
//   IconButton,
// } from '@mui/material';
// import DialogFile from '../dialog/DialogFile';
// import CustomTable from 'src/components/ComponentTables/CustomTable';
// import { IconEye, IconTrash } from '@tabler/icons-react';

// interface PropsTab3 {
//   value: string;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Tab3 = ({ value, open, setOpen }: PropsTab3) => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedData = DataTable3.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <>
//       <Box sx={{ width: '100%' }}>
//       <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     ID
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     Tên file
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     Dung lượng
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     Ngày tải
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     Định dạng
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="h6" >
//                     Hoạt động
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((items) => (
//                 <TableRow key={items.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                   <TableCell component="th" scope="row">
//                     <Typography variant="subtitle2">
//                       {items.idCode}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2">
//                       {items.fileName}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2">
//                       {items.datas}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2">
//                       {items.creationDate.toLocaleDateString()}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="subtitle2">
//                       {items.formats}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Grid container spacing={2}>
//                       <Grid item >
//                         <Button
//                           variant="contained"

//                         // onClick={() => setCheckTest(!checkTest)}
//                         >
//                           Xem
//                         </Button>
//                       </Grid>
//                       {items.isCheck &&
//                         <Grid item >
//                           <Button
//                             variant="contained"
//                             color="error"
//                           // onClick={() => { setKey(`${item.idCode}`); setOpen(true) }}
//                           >
//                             Xoá
//                           </Button>
//                         </Grid>
//                       }

//                     </Grid>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={DataTable3.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={() => handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//             labelRowsPerPage="Số hàng trên mỗi trang"
//           />
//         </TableContainer>
//       </Box>
//       <DialogFile open={open} setOpen={setOpen} value={value} />
//     </>
//   );
// };

// export default Tab3;


// import React, { useState, useEffect, useMemo } from 'react';
// import DataTable3 from '../DataTable/TableTab3';
// import DialogFile from '../dialog/DialogFile';
// import CustomTable from 'src/components/ComponentTables/CustomTable';
// import {
//   Grid,
//   IconButton,
//   MenuItem,
//   Select,
//   Checkbox,
//   ListItemText
// } from '@mui/material';
// import { IconEye, IconTrash } from '@tabler/icons-react';

// interface PropsTab3 {
//   value: string;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }
// interface ItemTable3 {
//   fileName: string;
//   datas: string;
//   creationDate: Date;
//   formats: string;
//   idCode: string;
//   isCheck: boolean;
// }

// const Tab3 = ({ value, open, setOpen }: PropsTab3) => {
//   const [dataSelect, setDataSelect] = useState<string[]>([]); // Mảng chứa các dataIndex cần ẩn

//   // Sử dụng useMemo để tạo cột chỉ khi cần thiết
//   const column = useMemo(() => [
//     {
//       title: 'ID',
//       dataIndex: 'idCode'
//     },
//     {
//       title: 'Tên file',
//       dataIndex: 'fileName'
//     },
//     {
//       title: 'Dung lượng',
//       dataIndex: 'datas'
//     },
//     {
//       title: 'Ngày tải',
//       dataIndex: 'creationDate',
//       render: (value: Date) => new Date(value).toLocaleDateString(),
//     },
//     {
//       title: 'Định dạng',
//       dataIndex: 'formats'
//     },
//     {
//       title: 'Hành động',
//       dataIndex: 'isCheck',
//       render: (value: ItemTable3) => (
//         <Grid container>
//           <Grid item xs={4}>
//             <IconButton onClick={() => console.log(value.idCode)}>
//               <IconEye stroke={2} style={{ color: '#5D87FF' }} />
//             </IconButton>
//           </Grid>
//           <Grid item xs={4}>
//             <IconButton>
//               <IconTrash stroke={2} style={{ color: '#FA896B' }} />
//             </IconButton>
//           </Grid>
//         </Grid>
//       ),
//     },
//   ], []); // Dependency array is empty, ensuring columns are memoized once.

//   // Mặc định chọn tất cả các cột
//   useEffect(() => {
//     // const allColumns = column.map((col) => col.dataIndex || '');
//     setDataSelect([]); // Ban đầu không ẩn cột nào
//   }, [column]);

//   // Xử lý thay đổi lựa chọn checkbox
//   const handleColumnChange = (event: any) => {
//     const { target: { value } } = event;
//     setDataSelect(
//       typeof value === 'string' ? value.split(',') : value
//     );
//   };

//   return (
//     <>
//       {/* Select với Checkbox cho phép ẩn/hiện cột */}
//       <Select
//         multiple
//         value={dataSelect}
//         onChange={handleColumnChange}
//         renderValue={() => 'Bộ lọc'}
//       >
//         {column.map((col) => (
//           <MenuItem key={col.dataIndex} value={col.dataIndex}>
//             <Checkbox checked={!dataSelect.includes(col.dataIndex!)} />
//             <ListItemText primary={col.title} />
//           </MenuItem>
//         ))}
//       </Select>

//       <CustomTable
//         dataSource={DataTable3}
//         columns={column}
//         dataSelect={dataSelect}
//       />

//       <DialogFile open={open} setOpen={setOpen} value={value} />
//     </>
//   );
// };

// export default Tab3;
