import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import BlankCard from 'src/components/shared/BlankCard';
import DialogStrView from '../dialog/DialogStrView';
import { StrategyRows } from '../mockData/TableStr';
import { HeadCell } from '../types/HeadCell';


interface PropsTabStr {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabStr = ({ value, open, setOpen, dataSelect }: PropsTabStr) => {
  const [selectId, setSelectId] = useState<string | null>(null)
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
      render: ((value: string) => (
        <>
          <Avatar src={value} alt="value" sx={{ borderRadius: '50%' }} />
        </>
      ))
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
      dataIndex: 'dateCreate',
      title: 'Ngày tạo',
    },
    {
      dataIndex: 'creator',
      title: 'Người tạo',
    },
    // {
    //   dataIndex: 'status',
    //   title: 'Trạng thái',
    //   render: (_row: any, value: any) => (
    //     <Typography color="textSecondary" variant="subtitle2">
    //       <CustomSwitch color="primary" defaultChecked={value.status ? true : false} />
    //     </Typography>
    //   ),
    // },
    {
      dataIndex: 'actions',
      title: 'Hoạt động',
      render: (_row: any, value: any) => (
        // console.log(value)
        <Box display={'flex'} sx={{ justifyContent: 'center' }}>
          <Tooltip title='Xem' placement='right'>
            <IconButton onClick={() => { setOpen(true); setSelectId(value.id) }}>
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
    <BlankCard>
      <CustomTable columns={StrategyCells} dataSource={StrategyRows} dataSelect={dataSelect} />
      <DialogStrView open={open} setOpen={setOpen} value={selectId} />
    </BlankCard>
  );
};

export default TabStr;
