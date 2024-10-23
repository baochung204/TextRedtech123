import { Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DialogModelView from '../dialog/DialogModelView';
import { ModelRows } from '../mockData/TableModel';
import { HeadCell } from '../types/HeadCell';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from 'src/store/Store';
import { fetchModelListData } from 'src/store/admin/resources/model/table/modelListSlice';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabModel = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string>();
  const modelList = useSelector((state: AppState) => state.model_list.dataa);

  useEffect(() => {
    dispatch(fetchModelListData());
  }, [dispatch]);

  console.log(modelList);
  const ModelCells: HeadCell[] = [
    {
      dataIndex: 'productId',
      title: 'ID',
    },
    {
      dataIndex: 'createDate',
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
      dataIndex: 'trainingToken',
      title: 'Training tokens',
    },
    {
      dataIndex: 'totalOwnership',
      title: 'Khách hàng sở hữu',
    },
    {
      dataIndex: 'totalApplicationAssistant',
      title: 'Trợ lý áp dụng',
    },
    {
      dataIndex: 'actions',
      title: 'Hoạt động',
      render: (_row: any, value: any) => (
        <Box display={'flex'} sx={{ justifyContent: 'center' }}>
          <Tooltip title="Xem" placement="right">
            <IconButton
              onClick={() => {
                setOpen(true);
                setSelectId(value.id);
              }}
            >
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

  return (
    <>
      <CustomTable columns={ModelCells} dataSource={modelList} dataSelect={dataSelect} />
      <DialogModelView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabModel;
