import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchCampaignListData } from 'src/store/admin/resources/campaign/table/campaignListSlice';
import DialogStrView from '../dialog/DialogStrView';
import { HeadCell } from '../types/HeadCell';

interface PropsTabStr {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}
interface DataRow {
  id: number;
  groupCompaignName: string;
  badgeUrl: string;
  nameProduc: string;
  level: number;
  customOwnership: number;
  applicationAssistant: number;
  sammary: string;
  content: string;
  createDate: string;
  nameEmployee: string;
}

const TabStr = ({ open, setOpen, dataSelect }: PropsTabStr) => {
  const campaignList = useSelector((state: AppState) => state.campaign_list.dataa);

  useEffect(() => {
    dispatch(fetchCampaignListData());
  }, [dispatch]);

  console.log(campaignList);

  const [selectId, setSelectId] = useState<string | null>(null);
  const StrategyCells: HeadCell[] = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      dataIndex: 'groupCompaignName',
      title: 'Nhóm chiến lược',
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
      dataIndex: 'nameProduc',
      title: 'Tên chiến lược',
    },
    {
      dataIndex: 'level',
      title: 'Level',
    },
    {
      dataIndex: 'customOwnership',
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
      dataIndex: 'content',
      title: 'Nội dung',
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
      dataIndex: 'nameEmployee',
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
      <CustomTable columns={StrategyCells} dataSource={campaignList} dataSelect={dataSelect} />
      <DialogStrView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabStr;
