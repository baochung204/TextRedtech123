// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';

import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useParams } from 'react-router';
import ChildCard from 'src/components/shared/ChildCard';

import { useDispatch, useSelector } from 'src/store/Store';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import { DetailInformationType, ProductType } from 'src/store/user/products/type/productByIdType';

interface TabProps {
  children: React.ReactNode;
  index: number;
  value?: number;
}

// progress

const TabPanel = (props: TabProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ProductDesc = () => {
  const [value, setValue] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const productData = useSelector((state: AppState) => state.productById.data);

  const dispatch = useDispatch();

  const Id: any = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // const product: any = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // interface DetailInformationI {
  //   title: string;
  //   name: string;
  // }
  // const titleDetailAssistant: DetailInformationI[] = [
  //   {
  //     title: ' Tên trợ lý',
  //     name: 'name',
  //   },
  //   {
  //     title: ' Giới tính',
  //     name: 'gender',
  //   },
  //   {
  //     title: ' Ngảy sinh ',
  //     name: 'dateOfBirth',
  //   },
  //   {
  //     title: ' Trình độ',
  //     name: 'education',
  //   },
  //   {
  //     title: ' Quốc gia',
  //     name: 'nation',
  //   },
  //   {
  //     title: ' Ngôn ngữ',
  //     name: 'language',
  //   },
  //   {
  //     title: ' Tính cách',
  //     name: 'maxFileQuantity',
  //   },
  //   {
  //     title: ' Tên file',
  //     name: 'fileNames',
  //   },
  //   {
  //     title: 'Số lượng file',
  //     name: 'maxFileQuantity',
  //   },

  //   {
  //     title: ' Bộ nhớ tôi đa',
  //     name: 'maxStorage',
  //   },
  //   {
  //     title: ' Tên model ',
  //     name: 'model',
  //   },
  //   {
  //     title: 'Tên chiến lược',
  //     name: 'campaign',
  //   },
  // ];
  const DetailRow = ({ label, value }) => (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
            {label}:
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
  const detailInformationData = productData?.detailInformation;
  console.log('data', detailInformationData?.assistantPack);
  return (
    <ChildCard>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            allowScrollButtonsMobile
            scrollButtons
            indicatorColor="primary"
          >
            <Tab label="Thông tin chi tiết" {...a11yProps(0)} />
            <Tab label="Hướng dẫn sử dụng" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ------------------------------------------- */}
        {/* Decription */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={0}>
          <Grid container>
            {detailInformationData?.detailInformation ||
            detailInformationData?.campaign ||
            detailInformationData?.model ||
            detailInformationData?.knowledgeFile ||
            detailInformationData?.assistantPack ||
            detailInformationData?.unit ||
            detailInformationData?.function ? (
              <>
                {detailInformationData?.function && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Nhóm function :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.function.groupFunction}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Level function :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.function.level}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                {detailInformationData?.campaign && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Nhóm chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.campaign.groupCampaign}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.campaign.campaignName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Level chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.campaign.level}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                {detailInformationData?.model && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên model :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.model.modelName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Model gốc :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.model.baseModel}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Token huấn huyện:
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.model.trainedToken}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                {detailInformationData?.knowledgeFile && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên file :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.knowledgeFile.fileName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Dung lương file :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.knowledgeFile.size}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Kiểu file :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.knowledgeFile.type}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                {/* {detailInformationData?.assistantPack && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên trợ lý :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Giới tính :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.gender}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Ngày sinh :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.dateOfBirth}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Học vấn :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.education}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Quốc gia :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.nation}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Ngôn ngữ :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.language}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Số lượng file tối đa :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.maxFileQuantity}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Dung lượng lưu trữ tối đa :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.maxStorage}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Chuyên môn :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          {detailInformationData.assistantPack.expertise?.map((item: string) => (
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                              {item}
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tính cách :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          {detailInformationData.assistantPack.personality?.map((item: string) => (
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                              {item}
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên file :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          {detailInformationData.assistantPack.fileNames?.map((item: string) => (
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                              {item}
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên function :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          {detailInformationData.assistantPack.functionNames?.map(
                            (item: string) => (
                              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                {item}
                              </Typography>
                            ),
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tính cách :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          {detailInformationData.assistantPack.personality?.map((item: string) => (
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                              {item}
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên model :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.model.modelName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Model gốc :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.model.baseModel}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Token huấn huyện:
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.model.trainedToken}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Nhóm chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.campaign.groupCampaign}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Tên chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.campaign.campaignName}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Level chiến lược :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.campaign.level}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )} */}
                {detailInformationData?.assistantPack && (
                  <>
                    <DetailRow
                      label="Tên trợ lý"
                      value={detailInformationData.assistantPack.name}
                    />
                    <DetailRow
                      label="Giới tính"
                      value={detailInformationData.assistantPack.gender}
                    />
                    <DetailRow
                      label="Ngày sinh"
                      value={detailInformationData.assistantPack.dateOfBirth}
                    />
                    <DetailRow
                      label="Học vấn"
                      value={detailInformationData.assistantPack.education}
                    />
                    <DetailRow
                      label="Quốc gia"
                      value={detailInformationData.assistantPack.nation}
                    />
                    <DetailRow
                      label="Ngôn ngữ"
                      value={detailInformationData.assistantPack.language}
                    />
                    <DetailRow
                      label="Số lượng file tối đa"
                      value={detailInformationData.assistantPack.maxFileQuantity}
                    />
                    <DetailRow
                      label="Dung lượng lưu trữ tối đa"
                      value={detailInformationData.assistantPack.maxStorage}
                    />

                    <DetailRow
                      label="Chuyên môn"
                      value={detailInformationData.assistantPack.expertise?.map((item: any) => (
                        <Typography variant="body1" key={item} sx={{ flexGrow: 1 }}>
                          {item}
                        </Typography>
                      ))}
                    />

                    <DetailRow
                      label="Tính cách"
                      value={detailInformationData.assistantPack.personality?.map((item: any) => (
                        <Typography variant="body1" key={item} sx={{ flexGrow: 1 }}>
                          {item}
                        </Typography>
                      ))}
                    />

                    <DetailRow
                      label="Tên file"
                      value={detailInformationData.assistantPack.fileNames?.map((item: any) => (
                        <Typography variant="body1" key={item} sx={{ flexGrow: 1 }}>
                          {item}
                        </Typography>
                      ))}
                    />

                    <DetailRow
                      label="Tên function"
                      value={detailInformationData.assistantPack.functionNames?.map((item) => (
                        <Typography variant="body1" key={item} sx={{ flexGrow: 1 }}>
                          {item}
                        </Typography>
                      ))}
                    />

                    <DetailRow
                      label="Tên model"
                      value={detailInformationData.assistantPack.model.modelName}
                    />
                    <DetailRow
                      label="Model gốc"
                      value={detailInformationData.assistantPack.model.baseModel}
                    />
                    <DetailRow
                      label="Token huấn luyện"
                      value={detailInformationData.assistantPack.model.trainedToken}
                    />
                    <DetailRow
                      label="Nhóm chiến lược"
                      value={detailInformationData.assistantPack.campaign.groupCampaign}
                    />
                    <DetailRow
                      label="Tên chiến lược"
                      value={detailInformationData.assistantPack.campaign.campaignName}
                    />
                    <DetailRow
                      label="Level chiến lược"
                      value={detailInformationData.assistantPack.campaign.level}
                    />
                  </>
                )}
                {detailInformationData?.unit && (
                  <>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Typography variant="h6" fontWeight="500" sx={{ width: '150px' }}>
                            Số lượng tối đa :
                          </Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1" sx={{ flexGrow: 1 }}>
                            {detailInformationData.assistantPack.unit}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
                {detailInformationData?.detailInformation && (
                  <Grid item xs={12} mt={2}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      {detailInformationData.detailInformation}
                    </Typography>
                  </Grid>
                )}
              </>
            ) : null}
          </Grid>
        </TabPanel>
        {/* ------------------------------------------- */}
        {/* Reviews Tab */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={1}>
          {/* <Grid container spacing={3}>
            {/* Section 1: Introduction */}
          {/* <Grid item xs={12}> */}
          <Typography variant="body1">{productData?.userManual}</Typography>
          {/* </Grid>
          </Grid> */}
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
