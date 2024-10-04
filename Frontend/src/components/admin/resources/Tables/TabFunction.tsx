import { Avatar, IconButton, Typography } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import BlankCard from 'src/components/shared/BlankCard';
import DialogFuncView from '../dialog/DialogFuncView';
import { FunctionRows } from '../mockData/TableFunction';
import { HeadCell } from '../types/HeadCell';



interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabFunction = ({ value, open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string | null>(null)
  const FunctionCells: HeadCell[] = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'creationTime',
      title: 'Ngày tạo',
    },
    {
      dataIndex: 'functionGroup',
      title: 'Nhóm function',
    },
    {
      dataIndex: 'functionName',
      title: 'Tên function',
    },
    {
      dataIndex: 'badge',
      title: 'Huy hiệu',
      render: ((value: string) => (
        <>
          <Avatar src={value} alt="value" sx={{ borderRadius: '50%' }} />
        </>
      ))
    },
    {
      dataIndex: 'level',
      title: 'Level',
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
      dataIndex: 'summary',
      title: 'Tóm tắt',
    },
    {
      dataIndex: 'functionCode',
      title: 'Code function',
    },
    {
      dataIndex: 'creator',
      title: 'Người tạo',
    },
    {
      dataIndex: 'status',
      title: 'Trạng thái',
      render: (_row: any, value: any) => (
        <Typography color="textSecondary" variant="subtitle2">
          <CustomSwitch color="primary" defaultChecked={value.status ? true : false} />
        </Typography>
      ),
    },
    {
      dataIndex: 'actions',
      title: 'Hoạt động',
      render: ((_row: any, value: any) => (
        <>
          <IconButton onClick={() => { setOpen(true); setSelectId(value.id) }}>
            <IconEye stroke={2} style={{ color: '#5D87FF' }} />
          </IconButton>
          <IconButton>
            <IconTrash stroke={2} style={{ color: '#FA896B' }} />
          </IconButton>
        </>
      ))
    },
  ];

  return (
    <BlankCard>
      <CustomTable
        columns={FunctionCells}
        dataSource={FunctionRows}
        dataSelect={dataSelect}
      />
      <DialogFuncView open={open} setOpen={setOpen} value={selectId} />
    </BlankCard>
  );
};

export default TabFunction;
