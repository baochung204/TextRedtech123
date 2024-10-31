import { Box, IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchFilesListData } from 'src/store/admin/resources/files/table/filesListSlice';
import DialogModelView from '../dialog/DialogModelView';
import { HeadCell } from '../types/HeadCell';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabFiles = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string>();
  const filesList = useSelector((state: AppState) => state.files_list.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchFilesListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  console.log('fileslist', filesList);
  const FilesCells: HeadCell[] = [
    {
      dataIndex: 'productId',
      title: 'ID',
    },
    {
      dataIndex: 'nameProduct',
      title: 'Tên file',
    },
    {
      dataIndex: 'customer',
      title: 'Khách hàng',
    },
    {
      dataIndex: 'type',
      title: 'Định dạng',
    },
    {
      dataIndex: 'size',
      title: 'Dung lượng',
    },
    {
      dataIndex: 'createDate',
      title: 'Ngày tải',
      render: (value: string) => {
        if (!value) return 'N/A'; // Handle undefined or invalid values
        const date = new Date(value);
        return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString('vi-VN');
      },
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
        columns={FilesCells}
        dataSource={filesList.content}
        dataSelect={dataSelect}
        count={filesList.totalElements}
        // rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <DialogModelView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabFiles;
