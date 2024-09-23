import { Alert, Box, Chip, Grid, IconButton, InputAdornment, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material"
import { IconEye, IconSearch, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import Scrollbar_x from "src/components/custom-scroll/Scrollbar_x";
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from "./data/OrderData";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DialogView from "./dialog/DialogView";


interface HeadProps {
    head: string;
}

const HeadTable: HeadProps[] = [
    {
        head: 'ID'
    },
    {
        head: 'Họ và tên'
    },
    {
        head: 'Email'
    },
    {
        head: 'Số điện thoại'
    },
    {
        head: 'Loại tài khoản'
    },
    {
        head: 'Trợ lý'
    },
    {
        head: 'Tổng nạp'
    },
    {
        head: 'Số dư'
    },
    {
        head: 'Hành động'
    }
]


const OrderAdminPage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
    const [checkID, setCheckID] = useState<string | null>(null)
    const [idTrash, setIDTrash] = useState<string | null>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [open1, setOpen1] = useState<boolean>(false)
    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleTrash = (key: string) => {
        const dataTrash = OrderData.find((item) => item.id === key)
        if (dataTrash) {
            setOpen1(true)
            setIDTrash(dataTrash.id)
            setTimeout(() => {
                setOpen1(false);
                setIDTrash(null)
            }, 3000);
        }
    }
    const paginatedData = OrderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    return (
        <>
            <Grid item xs={12}
                sx={{
                    paddingY: 3
                }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>

                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-search"
                                    placeholder="Tìm kiếm thông báo"
                                    size="small"
                                    type="search"
                                    variant="outlined"
                                    inputProps={{ 'aria-label': 'Search Followers' }}
                                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconSearch size="20" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth={true}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={selectedStartDate}
                                    onChange={setSelectedStartDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <Typography>tới</Typography>
                                <DatePicker
                                    value={selectedEndDate}
                                    onChange={setSelectedEndDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <TableContainer>
                <Scrollbar_x>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {HeadTable.map((item, index) =>
                                    <TableCell
                                        key={index}
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
                                                {item.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}>
                                            <Typography variant="subtitle2">
                                                {item.email}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}>

                                            <Typography variant="subtitle2">
                                                {item.phone}
                                            </Typography>

                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',

                                                }}
                                            >
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Typography variant="subtitle2">
                                                        <Chip
                                                            label={item.typeacc === 'Doanh nghiệp' ? 'Doanh nghiệp' : 'Cá nhân'}
                                                            color={item.typeacc === 'Doanh nghiệp' ? 'success' : 'warning'}
                                                            variant="outlined"
                                                        />
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >

                                            <Typography variant="subtitle2">
                                                {item.troly}
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Typography variant="subtitle2">
                                                {item.tongnap} VNĐ
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',

                                                }}
                                            >
                                                <Typography variant="subtitle2">
                                                    {item.sodu}
                                                </Typography>
                                                <img src={icontext} alt='' width={20} />
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            <IconButton
                                                onClick={() => {
                                                    setOpen(true)
                                                    setCheckID(item.id)
                                                }}
                                            >
                                                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => handleTrash(item.id)}
                                            >
                                                <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Scrollbar_x>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={OrderData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(_event, newPage) => handleChangePage(newPage)}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer >
            <DialogView open={open} setOpen={setOpen} checkID={checkID} />
            <Snackbar
                open={open1}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert variant="filled" severity="error" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    Xóa thành công id {idTrash}
                </Alert>
            </Snackbar>
        </>
    )
}

export default OrderAdminPage;
