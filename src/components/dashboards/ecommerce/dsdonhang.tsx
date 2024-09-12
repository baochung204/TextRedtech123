// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Avatar,
  Box,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import CustomSelect from '../../forms/theme-elements/CustomSelect';
import DashboardCard from '../../shared/DashboardCard';

import img1 from 'src/assets/images/products/s6.jpg';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const DSdonhang = () => {
  // for select
  const [month, setMonth] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };


  let data = '0974943593';
  const phone = data.slice(0, 3) + '####' + data.slice(7, 10);
  console.log(phone);


  return (
    <DashboardCard
      title="Thống kê lịch sử"
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
              <MenuItem value={2}>Đã mua </MenuItem>
              <MenuItem value={3}>Chưa mua</MenuItem>
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
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  STT
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  HỌ TÊN
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  EMAIL
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  NGÀY MUA
                </Typography>
              </TableCell>{' '}
              {/* <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    SỐ ĐIỆN THOẠI
                  </Typography>
                </TableCell> */}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  GÓI ĐƠN HÀNG
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  HOA HỒNG
                </Typography>
              </TableCell>
              {/* <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    TRẠNG THÁI
                  </Typography>
                </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {' '}
              <TableCell>
                <Typography color="textSecondary">1</Typography>
              </TableCell>{' '}
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Avatar src={img1} variant="rounded" alt={img1} sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      ABC
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Electronics
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  bádvg@gmail.com
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  16/02/2024 02:00
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $1.020.001 ngàn
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $1.020 ngàn
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {' '}
              <TableCell>
                <Typography color="textSecondary">2</Typography>
              </TableCell>{' '}
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Avatar src={img1} variant="rounded" alt={img1} sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      DEF
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Electronics
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  ẹasg@gmail.com
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  30/02/2021 12:00
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $2.305 ngàn
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $1.020 ngàn
                </Typography>
              </TableCell>
            </TableRow>{' '}
            <TableRow>
              {' '}
              <TableCell>
                <Typography color="textSecondary">3</Typography>
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Avatar src={img1} variant="rounded" alt={img1} sx={{ width: 48, height: 48 }} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      ABC
                    </Typography>
                    <Typography color="textSecondary" fontSize="12px" variant="subtitle2">
                      Electronics
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  sdg@gmail.com
                </Typography>
              </TableCell>{' '}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  20/02/2024 13:56
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $3.284 ngàn
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={400}>
                  $1.020.001 ngàn
                </Typography>
              </TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell colSpan={7}>
                  <Typography textAlign={'center'} color="textSecondary">
                    Không có dữ liệu để hiển thị
                  </Typography>
                </TableCell>
              </TableRow> */}
            {/* 2 */}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default DSdonhang;
