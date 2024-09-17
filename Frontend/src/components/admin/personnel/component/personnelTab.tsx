import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonnelTable from '../datatable/PersonnelTable'
import DialogPersonel from '../dialog/DialogPersonel'


interface PropsHeadTable {
    head: string
}

const HeadTable: PropsHeadTable[] = [
    {
        head: 'ID'
    },
    {
        head: 'Ngày tạo'
    },
    {
        head: 'Nhân viên'
    },
    {
        head: 'Phòng ban'
    },
    {
        head: 'Email'
    },
    {
        head: 'Số điện thoại'
    },
    {
        head: 'Bài viết'
    },
    {
        head: 'Trạng thái'
    },
    {
        head: 'Hoạt động'
    },

]

interface PropsItem {
    value: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PersonnelTab = ({ value, open, setOpen }: PropsItem) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // const [selected, setSelected] = useState<string[]>([]);
    // const isSelected = (id: string) => selected.indexOf(id) !== -1;


    const handleChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = PersonnelTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <>
            <TableContainer>
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
                            // const isItemSelected = isSelected(item.id);
                            // console.log(isItemSelected);

                            return (
                                <TableRow key={index}
                                // selected={isItemSelected}
                                >
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.createdAt.toLocaleDateString()}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Avatar
                                            src={item.avt}
                                            variant="rounded"
                                            alt={item.avt}
                                            sx={{ width: 48, height: 48 }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.department}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.email}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.phoneNumber}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.articleCount}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.status ? 'Hoạt động' : 'Khóa'}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            {item.isActive ? 'xóa' : 'sửa'}
                                        </Typography>
                                    </TableCell>
                                    {/* <TableCell>
                    <Grid container spacing={2}>
                      <Grid item >
                        <Button
                          variant="contained"
                        >
                          Sửa
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell> */}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={PersonnelTable.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => handleChangePage(newPage)}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <DialogPersonel
                open={open}
                value={value}
                setOpen={setOpen}
            />
        </>
    )
}

export default PersonnelTab