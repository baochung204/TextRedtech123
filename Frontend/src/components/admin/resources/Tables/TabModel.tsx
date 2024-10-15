import { Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import BlankCard from 'src/components/shared/BlankCard';
import DialogModelView from '../dialog/DialogModelView';
import { ModelRows } from '../mockData/TableModel';
import { HeadCell } from '../types/HeadCell';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabModel = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string>();
  const ModelCells: HeadCell[] = [
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
    <BlankCard>
      <CustomTable columns={ModelCells} dataSource={ModelRows} dataSelect={dataSelect} />
      <DialogModelView open={open} setOpen={setOpen} value={selectId as any} />
    </BlankCard>
  );
};

export default TabModel;
