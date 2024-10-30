import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ChildCard from 'src/components/shared/ChildCard';
import { AppState } from 'src/store/Store';

const DialogDetailListOrder = () => {
  const convertHistoryDetail = useSelector((state: AppState) => state.detailConvertHistory.dataa);
  console.log('convertHistoryDetail', convertHistoryDetail);

  const personalConvert = [convertHistoryDetail.convertInfo];
  const personalInfor = [convertHistoryDetail.customerInfo];
  const orderInfo = convertHistoryDetail.orderInfo;
  const orderInforProduct = orderInfo.product;
  const orderInforProductClassification = [orderInfo.product[0]?.classification];
  const priceConvert = [orderInfo.product[0]];
  const price = priceConvert[0]?.quantity * priceConvert[0]?.unitPrice;

  console.log('orderInfo', orderInfo.totalPrice);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display={'flex'} alignItems="center" justifyContent={'center'} marginBottom={2}>
            <Typography variant="h3">Chi tiết chuyển đổi </Typography>
          </Box>
        </Grid>
        {personalConvert?.map((info, index) => (
          <Grid item xs={12} key={index}>
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
                          {info.conversationId}
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
                          {info.date}
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
                          {info.mediaChannel}
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
                          {info.chatBotName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ChildCard>
            </Box>
          </Grid>
        ))}

        {personalInfor?.map((info, index) => (
          <Grid item xs={12} key={index}>
            <Box>
              <ChildCard>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                          Tên khách hàng :
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                          {info.customerName}
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
                          {info.phoneNumber}
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
                          {info?.email}
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
                          {info.address}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ChildCard>
            </Box>
          </Grid>
        ))}

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
                      {/* <Grid container>
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
                      </Grid> */}
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        {/* {convertHistoryDetail?.rate} */}
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
                        {String(convertHistoryDetail.note)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ChildCard>
          </Box>
        </Grid>

        <Grid item xs={12}>
          {orderInforProduct?.map((info, index) => (
            <Box my={3} key={index}>
              <ChildCard>
                <Grid container>
                  <Grid item xs={1.5}>
                    <Stack direction="row" alignItems="center">
                      <Avatar
                        src={orderInforProductClassification[0].image}
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
                          {info.name.length > 50 ? info.name.substring(0, 80) + '...' : info.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="overline" sx={{ mt: 1, flexGrow: 1, color: 'gray' }}>
                          {orderInforProductClassification[0].name}{' '}
                          {orderInforProductClassification[0].color}{' '}
                          {orderInforProductClassification[0].price}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" fontWeight="500" sx={{ flexGrow: 1 }}>
                          x{priceConvert[0].quantity}
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
          ))}

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
                    {price.toLocaleString('vn-VN')}
                  </Typography>
                </Stack>

                {/* Giảm giá */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Khuyến mãi
                  </Typography>
                  <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                    {orderInfo.discount.toLocaleString('vn-VN')}
                  </Typography>
                </Stack>
                {/* Vận chuyển */}
                <Stack direction="row" justifyContent="space-between" mb={3}>
                  <Typography variant="h6" fontWeight={400}>
                    Phí vận chuyển
                  </Typography>
                  <Typography variant="h6" display={'flex'} alignItems={'center'} gap="3px">
                    {orderInfo.shippingCost.toLocaleString('vn-VN')}
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
                    {orderInfo.totalPrice.toLocaleString('vn-VN')}
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
