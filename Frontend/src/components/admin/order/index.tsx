import { Box, Button, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Toolbar, Tooltip, Typography } from "@mui/material"
import { IconEye, IconFilter, IconSearch, IconTrash } from "@tabler/icons-react";
import { alpha } from '@mui/material/styles';
import { useState } from "react";
import Scrollbar_x from "src/components/custom-scroll/Scrollbar_x";
import icontext from 'src/assets/images/logos/R-Point.png';
import OrderData from "./data/OrderData";


interface EnhancedTableToolbarProps {
    numSelected: number;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search: string;
}
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected, handleSearch, search } = props;

    return (
        <Toolbar
            sx={{
                pl: { xs: 0, sm: 0 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Box sx={{ flex: '1 1 100%' }}>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconSearch size="1.1rem" />
                                </InputAdornment>
                            ),
                        }}
                        placeholder="Tìm kiếm sản phẩm"
                        size="small"
                        onChange={handleSearch}
                        value={search}
                    />
                </Box>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <IconTrash width="18" />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <IconFilter size="1.2rem" />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

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
    const [selected] = useState<readonly string[]>([]);
    const [search, setSearch] = useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

        setSearch(event.target.value);
    };
    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const paginatedData = OrderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        search={search}
                        handleSearch={handleSearch}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button>Sửa đổi cột</Button>


                </Box>
            </Box>
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
                                                <Typography variant="subtitle2">
                                                    {item.typeacc}
                                                </Typography>
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
                                                    // setSelectedKey(item.id); setOpen(true); console.log(item.id);
                                                }}
                                            >
                                                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                                            </IconButton>
                                            <IconButton>
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
        </>
    )
}

export default OrderAdminPage;
