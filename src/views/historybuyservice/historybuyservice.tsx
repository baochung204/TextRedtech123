import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import {
  Box,
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import zalo from '../../assets/images/pay/zalopay_8e254f.png';

import { Link } from 'react-router-dom';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';

const BCrumb = [
  {
    to: '/user-profile',
    title: 'Hồ sơ',
  },
  { to: '/history/buy-service', title: 'Lịch sử mua dịch vụ' },
];
const IconCoin: React.FC<{ width: number }> = (props) => (
  <svg
    className="custom-coin-icon"
    width={props.width}
    height={props.width}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle>
    <circle cx="24" cy="24" r="17" fill="#FACE15"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z"
      fill="#FABC15"
    ></path>
    <path
      d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z"
      fill="#FEF5CD"
    ></path>
  </svg>
);
const HistoryBuyService = () => {
  return (
    <PageContainer title="History buy service" description="History buy service">
      <Breadcrumb title="Lịch sử mua gói dịch vụ " items={BCrumb} />
      <ChildCard>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              gap: 1,
            }}
          >
            <Typography variant="h3" sx={{ color: '#898A90', fontWeight: 500, fontSize: 16 }}>
              Trang này chỉ hiển thị lịch sử giao dịch các dịch vụ bạn đã mua
            </Typography>
          </Box>
          <Box>
            <Link
              to={'/buy/service'}
              style={{
                color: 'black',
                textDecoration: 'underline',
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Dịch vụ
            </Link>
          </Box>
        </Box>
        <TableContainer sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h6">Số kim cương</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Phương thức thanh toán</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Thanh toán</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">ID Yêu cầu</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Thời gian tạo</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Thời gian hoàn tất</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Tình trạng</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6">Hóa đơn</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                    }}
                  >
                    <IconCoin width={18} /> 70
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <img src={zalo} alt="" width={30} height={20} />
                    <Typography variant="h6" fontWeight={600} noWrap>
                      *** *** ***
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      ₫ 20100
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      10000017392941114415106834
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:28
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      07/18/2024 18:47:36
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} noWrap>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      fontSize: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <Button sx={{ width: 150 }}>Tải hóa đơn về</Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ChildCard>

      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
    </PageContainer>
  );
};

export default HistoryBuyService;
