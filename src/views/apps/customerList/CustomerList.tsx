import * as React from 'react';
import { TableRow, TableHead, Table, MenuItem, TableContainer, TableCell, TableBody, Typography } from '@mui/material'
import DashboardCard from '../../../components/shared/DashboardCard';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

function createData(
    id: number,
    name: string,
    email: string,
    phone: number,
    registrationDate: Date,
    totalExpenses: number,
) {
    return { id, name, email, phone, registrationDate, totalExpenses };
}

const rows = [
    createData(1, 'Nguyễn Văn A', 'test@gmail.com', 60000000000, new Date(), 4.0),
    createData(2, 'Nguyễn Văn B', 'test@gmail.com', 60000000000, new Date(), 4.0),
    createData(3, 'Nguyễn Văn C', 'test@gmail.com', 60000000000, new Date(), 4.0),
    createData(4, 'Nguyễn Văn D', 'test@gmail.com', 60000000000, new Date(), 4.0),
    createData(5, 'Nguyễn Văn E', 'test@gmail.com', 60000000000, new Date(), 4.0),
];




const NewTable = () => {
    const [month, setMonth] = React.useState('1');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };
    return (
        <div>
            <h1>Danh Sách Khách Hàng</h1>
            <DashboardCard
                title="Thống kê khách hàng"
                action={
                    <>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <CustomSelect
                                labelId="month-dd"
                                id="month-dd"
                                size="small"
                                value={month}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Tất cả</MenuItem>
                                {/* <MenuItem value={2}>Đã mua </MenuItem>
                                <MenuItem value={3}>Chưa mua</MenuItem> */}
                            </CustomSelect>
                            <CustomTextField
                                id="date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            tới
                            <CustomTextField
                                id="date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                cursor="pointer"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-refresh "
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                            </svg>
                        </div>
                    </>
                }
            >
                <TableContainer>
                    <Table
                        aria-label="simple table"
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        STT
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Họ Tên
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Email
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Số Điện Thoại
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Ngày Đăng Ký
                                    </Typography>
                                </TableCell>
                                <TableCell >
                                    <Typography variant='subtitle2' fontWeight={600}>
                                        Tổng Chi Tiêu&nbsp;(VNĐ)
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.email}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.phone}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.registrationDate.toLocaleDateString()}
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography variant='subtitle2' fontWeight={600}>
                                            {row.totalExpenses}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DashboardCard>
        </div>
    )
}

export default NewTable;


