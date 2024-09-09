

import React from "react";
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Avatar, Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataRow from '../DataTable/TableTab6';


const Tab6 = () => {
    return (
        <Box>
            <Box display="flex" justifyContent="flex-end">
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddCircleIcon
                        sx={{
                            fontSize: 30
                        }}
                    />
                </IconButton>
            </Box>
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
                                    <Stack direction="row" spacing={2}>
                                        <Avatar src={items.images} variant="rounded" alt={items.images} sx={{ width: 48, height: 48 }} />
                                        <Box>
                                            <Typography variant='subtitle2' fontWeight={500}>
                                                {items.fullName}
                                            </Typography>
                                            <Typography color="textSecondary" fontSize="11px" variant="subtitle2">
                                                {items.electron}
                                            </Typography>
                                        </Box>
                                    </Stack>
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
    )
}

export default Tab6;