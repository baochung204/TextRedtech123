import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import DialogStrView from '../dialog/DialogStrView';
import { StrategyRows } from '../mockData/TableStr';
import { HeadCell } from '../types/HeadCell';

interface PropsTabStr {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabStr = ({ open, setOpen, dataSelect }: PropsTabStr) => {
  const [selectId, setSelectId] = useState<string | null>(null);
  const StrategyCells: HeadCell[] = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'strategyGroup',
      title: 'Nhóm chiến lược',
    },
    {
      dataIndex: 'badge',
      title: 'Huy hiệu',
      render: (value: string) => (
        <>
          <Avatar src={value} alt="value" sx={{ borderRadius: '50%' }} />
        </>
      ),
    },
    {
      dataIndex: 'strategyName',
      title: 'Tên chiến lược',
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
      dataIndex: 'content',
      title: 'Nội dung',
    },
    {
      dataIndex: 'creationTime',
      title: 'Ngày tạo',
    },
    {
      dataIndex: 'creator',
      title: 'Người tạo',
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
      <CustomTable columns={StrategyCells} dataSource={StrategyRows} dataSelect={dataSelect} />
      <DialogStrView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabStr;
