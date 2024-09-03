import * as React from 'react';
import MenuItem from '@mui/material/MenuItem'
import DashboardCard from '../../../components/shared/DashboardCard';
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import Breadcrumb1 from 'src/layouts/full/shared/breadcrumb/Breadcrumb1';
import CustomerTable from 'src/components/tables/CustomerTable';



const CustomerList = () => {
    const [month, setMonth] = React.useState('1');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };
    return (
        <div>
            <Breadcrumb1 title='' />

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
                <CustomerTable />
            </DashboardCard>
        </div>
    )
}

export default CustomerList;