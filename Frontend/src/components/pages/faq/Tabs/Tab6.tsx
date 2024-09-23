import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    TablePagination,
} from '@mui/material';
import DataRow from '../DataTable/TableTab6';
import DialogURL from '../dialog/DIalogURL';

interface PropsTab6 {
    value: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = DataRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>
                                    <Typography variant="h6" >
                                        ID
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6" >
                                        Tiêu đề URL
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6" >
                                        Mô tả URL
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6" >
                                        URL
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((items) => (
                                <TableRow key={items.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    <TableCell component="th" scope="row">
                                        <Typography variant="subtitle2" >
                                            {items.idCode}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="subtitle2" >
                                            {items.titleurl}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" >
                                            {items.descriptionurl}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" >
                                            {items.url}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <TablePagination
                        rowsPerPageOptions={[6, 12, 18]}
                        component="div"
                        count={DataRow.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={() => handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        labelRowsPerPage="Số hàng trên mỗi trang"
                    />
                </TableContainer>
            </Box>
            <DialogURL open={open} setOpen={setOpen} value={value} />
        </>
    );
};

export default Tab6;
