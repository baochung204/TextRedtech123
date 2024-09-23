import { Box } from '@mui/material';
import React from 'react';
import icontext from 'src/assets/images/logos/R-Point.png';
import CustomTable from './CustomTable';
import PublisherTable from './datatable/Publisher';


const PublisherTablePage: React.FC = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tên gói',
            dataIndex: 'package',
        },
        {
            title: 'Model',
            dataIndex: 'model',
        },
        {
            title: 'Số Points',
            dataIndex: 'points',
            render: (value: string) =>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {value}
                    <img src={icontext} alt="" width={20} />
                </Box>,
        },
        {
            title: 'Giá tiền',
            dataIndex: 'money',
            render: (value: string) =>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {value} VNĐ
                </Box>,
        },
        {
            title: 'Số lượt mua',
            dataIndex: 'totalBuy',
        },
        {
            title: 'Chức năng',
            dataIndex: 'function',
        },
        {
            title: 'Chiến lược',
            dataIndex: 'strategy',
        },
        {
            title: 'Tổng files',
            dataIndex: 'files',
        },
        {
            title: 'Tổng chức năng',
            dataIndex: 'totalFunction',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createDate',
        },
        // {
        //     title: 'Hành động',
        //     dataIndex: 'hanhdong',
        //     render: (_value: string, row: PropsTable) => {
        //         return (
        //             <Grid container spacing={7}>
        //                 <Grid item xs={6}>
        //                     <Button
        //                         variant='contained'
        //                         onClick={() => console.log(row.id)}
        //                     >
        //                         V
        //                     </Button>
        //                 </Grid>
        //                 <Grid item xs={6}>
        //                     <Button variant='contained' color='error'>
        //                         X
        //                     </Button>
        //                 </Grid>
        //             </Grid>
        //         )
        //     }
        // }
    ];

    return <CustomTable columns={columns} dataSource={PublisherTable} />;
};

export default PublisherTablePage;

















// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TablePagination, Box, Grid, TextField, InputAdornment, Tooltip, Fab } from '@mui/material';
// import React, { useState } from 'react'
// import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
// import PublisherTable from './datatable/Publisher';
// import icontext from 'src/assets/images/logos/R-Point.png';
// import { IconSearch } from '@tabler/icons-react';
// import { IconPlus } from '@tabler/icons-react';
// import RPointDialog from './dialog/RPointDialog';


// interface HeadProps {
//     head: string;
// }

// const HeadTable: HeadProps[] = [
//     {
//         head: 'ID'
//     },
//     {
//         head: 'Tên gói R-Point'
//     },
//     {
//         head: 'Tên Model'
//     },
//     {
//         head: 'Số Points'
//     },
//     {
//         head: 'Giá tiền'
//     },
//     {
//         head: 'Số lượt mua'
//     },
//     {
//         head: 'Function'
//     },
//     {
//         head: 'Chiến lược'
//     },
//     {
//         head: 'Files'
//     },
//     {
//         head: 'Function (Slot)'
//     },
//     {
//         head: 'Ngày cập nhật'
//     },

// ]

// const RPointS = () => {


//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//     const handleChangePage = (newPage: number) => {
//         setPage(newPage);
//     };
//     const [open, setOpen] = useState<boolean>(false);
//     const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const paginatedData = PublisherTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);



//     return (
//         <>
//             <Grid container
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center'
//                 }}
//             >
//                 <Grid item>
//                     <Tooltip title="Thêm gói R-Point mới" sx={{ mb: '15px' }}>
//                         <Fab size="small"
//                             color="secondary"
//                             aria-label="plus"
//                             sx={{ my: 'auto', mr: 2 }}
//                             onClick={() => setOpen(true)}
//                         >
//                             <IconPlus width={18} />
//                         </Fab>
//                     </Tooltip>
//                 </Grid>
//                 <Grid item>
//                     <TextField
//                         id="outlined-search"
//                         placeholder="Tìm kiếm"
//                         size="small"
//                         type="search"
//                         variant="outlined"
//                         inputProps={{ 'aria-label': 'Search Followers' }}
//                         sx={{
//                             fontSize: { xs: '50px', sm: '50px', md: '50px' }
//                         }}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <IconSearch size="12" />
//                                 </InputAdornment>
//                             ),
//                         }}
//                         fullWidth={true}
//                     />
//                 </Grid>

//             </Grid >
//             <TableContainer>
//                 <Scrollbar_x>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 {HeadTable.map((item, index) =>
//                                     <TableCell key={index}
//                                         sx={{
//                                             whiteSpace: 'nowrap'
//                                         }}
//                                     >
//                                         <Typography variant="h6">
//                                             {item.head}
//                                         </Typography>
//                                     </TableCell>
//                                 )}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {paginatedData.map((item, index) => {
//                                 console.log('test', Object.values(item));

//                                 return (
//                                     <TableRow key={index}>
//                                         {Object.values(item).map((value, idx) => (
//                                             <TableCell key={idx} sx={{ whiteSpace: 'nowrap' }}>
//                                                 <Typography variant="subtitle2">
//                                                     {idx === 3 ? (
//                                                         <Box sx={{ display: 'flex' }}>
//                                                             <Typography variant="subtitle2">{value}</Typography>
//                                                             <img src={icontext} alt="" width={20} />
//                                                         </Box>
//                                                     ) : idx === 4 ? (
//                                                         `${value} VNĐ`
//                                                     ) : (
//                                                         value
//                                                     )}
//                                                 </Typography>
//                                             </TableCell>
//                                         ))}
//                                     </TableRow>
//                                 )
//                             })}
//                         </TableBody>
//                     </Table>
//                 </Scrollbar_x>
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="div"
//                     count={PublisherTable.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={(_event, newPage) => handleChangePage(newPage)}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </TableContainer >
//             <RPointDialog
//                 open={open}
//                 setOpen={setOpen}
//             />
//         </>
//     )
// }

// export default RPointS
