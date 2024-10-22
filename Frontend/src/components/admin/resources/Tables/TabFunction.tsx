import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchFunctionListData } from 'src/store/admin/resources/function/table/functionListSlice';
import DialogFuncView from '../dialog/DialogFuncView';
import { FunctionRows } from '../mockData/TableFunction';
import { HeadCell } from '../types/HeadCell';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabFunction = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const functionList = useSelector((state: AppState) => state.function_list.dataa);

  useEffect(() => {
    dispatch(fetchFunctionListData());
  }, [dispatch]);

  console.log(functionList);
  const [selectId, setSelectId] = useState<string>();
  const FunctionCells: HeadCell[] = [
    {
      dataIndex: 'productId',
      title: 'ID',
    },
    {
      dataIndex: 'createDate',
      title: 'Ngày tạo',
    },
    {
      dataIndex: 'nameGroupFunction',
      title: 'Nhóm function',
    },
    {
      dataIndex: 'nameProduct',
      title: 'Tên function',
    },
    {
      dataIndex: 'badgeUrl',
      title: 'Huy hiệu',
      render: (value: string) => (
        <>
          <Avatar src={value} alt="value" sx={{ borderRadius: '50%' }} />
        </>
      ),
    },
    {
      dataIndex: 'level',
      title: 'Level',
    },
    {
      dataIndex: 'customer',
      title: 'Khách hàng sở hữu',
    },
    {
      dataIndex: 'applicationAssistant',
      title: 'Trợ lý áp dụng',
    },
    {
      dataIndex: 'sammary',
      title: 'Tóm tắt',
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
      <CustomTable columns={FunctionCells} dataSource={functionList} dataSelect={dataSelect} />
      <DialogFuncView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabFunction;
