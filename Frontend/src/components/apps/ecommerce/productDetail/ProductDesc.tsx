// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect } from 'react';

import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import ChildCard from 'src/components/shared/ChildCard';

import { useDispatch, useSelector } from 'src/store/Store';
import { fetchProducts } from 'src/store/apps/eCommerce/ECommerceSlice';

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

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={2.2}>
          <Typography variant="h6" fontWeight="500">
            {label}:
          </Typography>
        </Grid>
        <Grid item xs={9.8}>
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            {Array.isArray(value) ? value.join(', ') : value}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const detailInformationData = productData?.detailInformation;
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
          <Box
            sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'none',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#E3E3E3',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#d6d6d6',
              },
            }}
          >
            {' '}
            <Grid container spacing={1}>
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
                        value={detailInformationData.assistantPack.expertise || []}
                      />

                      <DetailRow
                        label="Tính cách"
                        value={detailInformationData.assistantPack.personality || []}
                      />

                      <DetailRow
                        label="Tên file"
                        value={detailInformationData.assistantPack.fileNames || []}
                      />

                      <DetailRow
                        label="Tên function"
                        value={detailInformationData.assistantPack.functionNames || []}
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
          </Box>
        </TabPanel>
        {/* ------------------------------------------- */}
        {/* Reviews Tab */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              maxHeight: '300px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '10px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'none',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#E3E3E3',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#d6d6d6',
              },
            }}
          >
            <Typography variant="body1">{productData?.userManual}</Typography>
          </Box>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
