import * as React from 'react';
import MenuItem from '@mui/material/MenuItem'
import DashboardCard from '../../../components/shared/DashboardCard';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomerTable from 'src/components/tables/CustomerTable';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        to: '/apps/blog/posts',
        title: 'Blog',
    },
    {
        title: 'Blog post',
    },
]
const CustomerList = () => {
    const [month, setMonth] = React.useState('1');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };
    const [value, setValue] = React.useState<Dayjs | null>(null)
    const [value1, setValue1] = React.useState<Dayjs | null>(null)
    return (
        <div>
            <Breadcrumb title="Blog Detail" items={BCrumb} />{' '}
            <DashboardCard
                title="Danh sách khách hàng"
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(props) => (
                                        <CustomTextField
                                            {...props}
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    width: '18px',
                                                    height: '18px',
                                                },
                                                '& .MuiFormHelperText-root': {
                                                    display: 'none',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            tới
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    value={value1}
                                    onChange={(newValue) => {
                                        setValue1(newValue);
                                    }}
                                    renderInput={(props) => (
                                        <CustomTextField
                                            {...props}
                                            fullWidth
                                            size="small"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    width: '18px',
                                                    height: '18px',
                                                },
                                                '& .MuiFormHelperText-root': {
                                                    display: 'none',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
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
                <CustomerTable />
            </DashboardCard>
        </div>
    )
}

export default CustomerList;