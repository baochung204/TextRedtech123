import { Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchModelListData } from 'src/store/admin/resources/model/table/modelListSlice';
import DialogModelView from '../dialog/DialogModelView';
import { HeadCell } from '../types/HeadCell';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabUrl = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string>();
  const modelList = useSelector((state: AppState) => state.model_list.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchModelListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  console.log(modelList);
  const ModelCells: HeadCell[] = [
    {
      dataIndex: 'productId',
      title: 'ID',
    },
    {
      dataIndex: 'createDate',
      title: 'Ngày tạo',
      render: (value: string) => {
        if (!value) return 'N/A'; // Handle undefined or invalid values
        const date = new Date(value);
        return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString('vi-VN');
      },
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
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <>
      <CustomTable
        columns={ModelCells}
        dataSource={modelList.content}
        dataSelect={dataSelect}
        count={modelList.totalElements}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <DialogModelView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabUrl;
