import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TablePagination, Box, Grid, IconButton, TextField, InputAdornment } from '@mui/material';
import React, { useState } from 'react'
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import PublisherTable from './datatable/Publisher';
import icontext from 'src/assets/images/logos/R-Point.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconSearch } from '@tabler/icons-react';


interface HeadProps {
    head: string;
}

const HeadTable: HeadProps[] = [
    {
        head: 'ID'
    },
    {
        head: 'Tên gói R-Point'
    },
    {
        head: 'Tên Model'
    },
    {
        head: 'Số Points'
    },
    {
        head: 'Giá tiền'
    },
    {
        head: 'Số lượt mua'
    },
    {
        head: 'Function'
    },
    {
        head: 'Chiến lược'
    },
    {
        head: 'Files'
    },
    {
        head: 'Function (Slot)'
    },
    {
        head: 'Ngày cập nhật'
    },

]

const Publisher = () => {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = PublisherTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);



    return (
        <>
            <Grid container
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Grid item>
                    <IconButton
                        color="primary"
                        aria-label="Add to cart"
                        // onClick={() => setOpen(true)}
                        sx={{
                            pr: 1.5,
                        }}
                    >
                        <AddCircleIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <TextField
                        id="outlined-search"
                        placeholder="Tìm kiếm"
                        size="small"
                        type="search"
                        variant="outlined"
                        inputProps={{ 'aria-label': 'Search Followers' }}
                        sx={{
                            fontSize: { xs: '50px', sm: '50px', md: '50px' }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconSearch size="12" />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth={true}
                    />
                </Grid>

            </Grid >
            <TableContainer>
                <Scrollbar_x>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {HeadTable.map((item, index) =>
                                    <TableCell key={index}
                                        sx={{
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        <Typography variant="h6">
                                            {item.head}
                                        </Typography>
                                    </TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((item, index) => {

                                return (
                                    <TableRow key={index}
                                    >
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.id}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}>
                                            <Typography variant="subtitle2">
                                                {item.package}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}>
                                            {/* <Stack direction='row' spacing={2}>
                                                <Avatar
                                                    src={item.avt}
                                                    variant="rounded"
                                                    alt={item.avt}
                                                    sx={{ width: 48, height: 48 }}
                                                />
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Typography variant='h6'>
                                                            {item.employeeName}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant='subtitle2'>
                                                            {item.position}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Stack> */}
                                            <Typography variant="subtitle2">
                                                {item.model}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',

                                                }}
                                            >
                                                <Typography variant="subtitle2">
                                                    {item.points}
                                                </Typography>
                                                <img src={icontext} alt='' width={20} />
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.money} VNĐ
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.totalBuy}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.function}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.strategy}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.files}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.totalFunction}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.createDate}
                                            </Typography>
                                        </TableCell>
                                        {/* <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.status ? <Typography color="success.dark" variant="subtitle2">
                                                    Hoạt động
                                                </Typography> : <Typography color="error" variant="subtitle2">
                                                    Khóa
                                                </Typography>}
                                            </Typography>
                                        </TableCell> */}


                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Scrollbar_x>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={PublisherTable.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => handleChangePage(newPage)}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer >

        </>
    )
}

export default Publisher
