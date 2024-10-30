import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ChildCard from 'src/components/shared/ChildCard';
import { AppState } from 'src/store/Store';

const text =
  'KDC - Dao trổ khắc giấy và gỗ mỏng với cán kim loại và hộp 05 lưỡi sơ cua đi kèm asdads sadasd asda';
const price = 1253000;
const DialogDetailListOrder = () => {
  // const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  // const handleSelectPackage = (pkgId: number) => {
  //   setSelectedPackage(selectedPackage === pkgId ? null : pkgId);
  // };

  const orderhistorydetail = useSelector((state: AppState) => state.historyorder_detail.dataa);
  const flashSaleArray = [orderhistorydetail.flashSaleResponse];
  console.log(flashSaleArray);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={2}>
            <Typography variant="h3">Chi tiết chuyển đổi </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <ChildCard>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Mã chuyển đổi :
                      </Typography>
                    </Grid>{' '}
                    <Grid item xs={8}>
                      {' '}
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        OD10JSNJHU09939
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Ngày tạo :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        12/02/2024
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Kênh marketing :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Facebook
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Trợ lý :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Trợ lý số
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <ChildCard>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Tên khách hàng :
                      </Typography>
                    </Grid>{' '}
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Nguyễn Khương Đinh Văn
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Số điện thoại :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        0123456789
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Email :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        nguyenvana@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Địa chỉ :
                      </Typography>
                    </Grid>{' '}
                    <Grid item xs={8}>
                      {' '}
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Số 123, Đường Lê Lợi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt
                        Nam
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <ChildCard>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Đánh giá :
                      </Typography>
                    </Grid>{' '}
                    <Grid item xs={9}>
                      <Grid container>
                        <Grid item xs={4}>
                          <img src="https://picsum.photos/300/300" alt="" width={70} height={70} />
                        </Grid>
                        <Grid item xs={4}>
                          {' '}
                          <img src="https://picsum.photos/300/300" alt="" width={70} height={70} />
                        </Grid>
                        <Grid item xs={4}>
                          <img src="https://picsum.photos/300/300" alt="" width={70} height={70} />
                        </Grid>
                      </Grid>{' '}
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Sản phẩm chất lượng tuyệt vời, vượt xa mong đợi của mình. Đóng gói rất cẩn
                        thận, giao hàng nhanh chóng. Sẽ tiếp tục ủng hộ shop trong tương lai!
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <ChildCard>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                        Ghi chú :
                      </Typography>
                    </Grid>{' '}
                    <Grid item xs={10}>
                      {' '}
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        Đây là quà tặng, vui lòng đóng gói cẩn thận và đẹp mắt. Nếu có thể, xin thêm
                        thiệp chúc mừng với nội dung: 'Gửi tặng người đặc biệt nhất, chúc em luôn
                        vui vẻ và hạnh phúc. Yêu em!'
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box my={3}>
            <ChildCard>
              <Grid container>
                <Grid item xs={1.5}>
                  <Stack direction="row" alignItems="center">
                    <Avatar
                      src="https://picsum.photos/300/300"
                      alt=""
                      sx={{
                        borderRadius: '10px',
                        height: '90px',
                        width: '90px',
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={8.5}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="500">
                        {text.length > 50 ? text.substring(0, 80) + '...' : text}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="overline" sx={{ mt: 1, flexGrow: 1, color: 'gray' }}>
                        Phân loại hàng: Dao A + 5 lưỡi
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight="500" sx={{ flexGrow: 1 }}>
                        x2
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  <Typography variant="h6" fontWeight="500">
                    {price.toLocaleString('vi-VN')}₫
                  </Typography>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>

          <Box sx={{ mt: 3 }}>
            <ChildCard>
              <Box p={{ sx: 0 }}>
                <Typography variant="h5" fontWeight={600} mb={3}>
                  Đơn hàng
                </Typography>

                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Giá trị đơn hàng
                  </Typography>
                  <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                    {/* {(total + (pointsEarned === null ? 0 : pointsEarned)).toLocaleString(
                              'vn-VN',
                            )}{' '} */}
                    1.253.000 ₫
                  </Typography>
                </Stack>

                {/* Giảm giá */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Khuyến mãi
                  </Typography>
                  <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                    {/* -{discountProduct.toLocaleString('vn-VN')}{' '} */}
                    253.000 ₫
                  </Typography>
                </Stack>
                {/* Vận chuyển */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Phí vận chuyển
                  </Typography>
                  <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                    {/* -{discountProduct.toLocaleString('vn-VN')}{' '} */}
                    -25.000 ₫
                  </Typography>
                </Stack>

                {/* Tổng cộng */}
                <Stack direction="row" justifyContent="space-between" mb={1}>
                  <Typography variant="h6">Tổng thanh toán</Typography>
                  <Typography
                    variant="h4"
                    color="error"
                    display={'flex'}
                    alignItems={'center'}
                    gap="3px"
                  >
                    1.225.000 ₫
                  </Typography>
                </Stack>
              </Box>
            </ChildCard>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DialogDetailListOrder;
