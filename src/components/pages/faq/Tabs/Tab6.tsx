

import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import DataRow from '../DataTable/TableTab6';
import DialogURL from "../dialog/DIalogURL";

interface PropsTab6 {
    value: string,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen }) => {
    return (
        <>
            <Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        STT
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        ID
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Tiêu đề URL
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Mô tả URL
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        URL
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DataRow.map((items) => (
                                <TableRow
                                    key={items.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={400}>
                                            {items.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='subtitle2' fontWeight={400}>
                                            {items.idCode}
                                        </Typography>
                                    </TableCell>

                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={400}>
                                            {items.titleurl}
                                        </Typography>

                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={400}>
                                            {items.descriptionurl}
                                        </Typography>

                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={400}>
                                            {items.url}
                                        </Typography>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <DialogURL open={open} setOpen={setOpen} value={value} />
        </>
    )
}

export default Tab6;