import { IconButton } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import { FunctionRows } from '../mockData/TableFunction';
import { HeadCell } from '../types/HeadCell';
import DialogFuncView from '../dialog/DialogFuncView';


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
      dataIndex: 'actions',
      title: 'Hoạt động',
      render: (() => (
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
