import { IconButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { IconEye } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import assisstant from 'src/assets/Adminphoto/tro ly ap dung.png';
import customer from 'src/assets/Function/KHACH HANG SO HUU.png';
import model from 'src/assets/Model/MODEL.png';
import trainingtoken from 'src/assets/Model/Tranning tokens.png';
import { fetchOverviewModelData } from 'src/store/admin/resources/model/overview/modelSlice';
import { AppDispatch, AppState } from 'src/store/Store';

export const ModelCells: any = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'creationTime',
    title: 'Ngày tạo',
  },
  {
    dataIndex: 'modelName',
    title: 'Tên model',
  },
  {
    dataIndex: 'baseModel',
    title: 'Model gốc',
  },
  {
    dataIndex: 'trainingTokens',
    title: 'Training tokens',
  },
  {
    dataIndex: 'ownedCustomers',
    title: 'Khách hàng sở hữu',
  },
  {
    dataIndex: 'appliedAssistants',
    title: 'Trợ lý áp dụng',
  },
  {
    dataIndex: 'actions',
    title: 'Hoạt động',
    render: () => (
      <Box display={'flex'} sx={{ justifyContent: 'center' }}>
        <Tooltip title="Xem" placement="right">
          <IconButton>
            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton>
          {/* <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton> */}
        </Tooltip>
      </Box>
    ),
  },
];

export const ModelRows = [
  {
    id: 'MDL001',
    creationTime: '2024-09-01',
    modelName: 'Model Dự đoán Doanh thu',
    baseModel: 'GPT-4',
    trainingTokens: '1000000',
    ownedCustomers: '12',
    appliedAssistants: '3',
  },
  {
    id: 'MDL002',
    creationTime: '2024-09-02',
    modelName: 'Model Phân tích Tâm lý',
    baseModel: 'BERT',
    trainingTokens: '800000',
    ownedCustomers: '8',
    appliedAssistants: '2',
  },
  {
    id: 'MDL003',
    creationTime: '2024-09-03',
    modelName: 'Model Tối ưu Hóa Chi phí',
    baseModel: 'GPT-3',
    trainingTokens: '1200000',
    ownedCustomers: '15',
    appliedAssistants: '4',
  },
  {
    id: 'MDL004',
    creationTime: '2024-09-04',
    modelName: 'Model Dự báo Nhu cầu',
    baseModel: 'RoBERTa',
    trainingTokens: '950000',
    ownedCustomers: '10',
    appliedAssistants: '3',
  },
  {
    id: 'MDL005',
    creationTime: '2024-09-05',
    modelName: 'Model Phân tích Đối thủ',
    baseModel: 'GPT-4',
    trainingTokens: '1300000',
    ownedCustomers: '20',
    appliedAssistants: '5',
  },
  {
    id: 'MDL006',
    creationTime: '2024-09-06',
    modelName: 'Model Dự đoán Thị trường',
    baseModel: 'T5',
    trainingTokens: '1100000',
    ownedCustomers: '18',
    appliedAssistants: '6',
  },
];

const TableModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataModelOverview = useSelector((state: AppState) => state.overview_models.dataa);

  useEffect(() => {
    dispatch(fetchOverviewModelData());
  }, [dispatch]);

  // totalApplicationAsisstant: 7;
  // totalModel: 11;
  // totalOwnership: 3;
  // totalTranningToken: 450;
  const totalModel = dataModelOverview.totalModel;
  const totalTranningToken = dataModelOverview.totalTranningToken;
  const totalOwnership = dataModelOverview.totalOwnership;
  const totalApplicationAsisstant = dataModelOverview.totalApplicationAsisstant;

  // console.log(dataModelOverview);

  const Model = [
    {
      bgColor: 'primary.light',
      title: 'Model',
      total: totalModel,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={model} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Tranning tokens',
      total: totalTranningToken,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={trainingtoken} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Khách hàng sở hữu',
      total: totalOwnership,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={customer} width={30} />
          </Box>
        </>
      ),
    },
    {
      bgColor: 'primary.light',
      title: 'Trợ lý áp dụng',
      total: totalApplicationAsisstant,
      icons: (
        <>
          <Box
            textAlign="center"
            padding={1}
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={assisstant} width={30} />
          </Box>
        </>
      ),
    },
  ];
  return { Model, ModelCells, ModelRows };
};

export default TableModel;
