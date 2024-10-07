import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import CustomSwitch from 'src/components/forms/theme-elements/CustomSwitch';
import BlankCard from 'src/components/shared/BlankCard';
import DialogFuncView from '../dialog/DialogFuncView';
import { FunctionRows } from '../mockData/TableFunction';
import { HeadCell } from '../types/HeadCell';
import { ModelRows } from '../mockData/TableModel';
import DialogModelView from '../dialog/DialogModelView';



interface PropsTabFunction {
    value: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dataSelect?: string[];
}

const TabModel = ({ value, open, setOpen, dataSelect }: PropsTabFunction) => {
    const [selectId, setSelectId] = useState<string | null>(null)
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
            render: ((_row: any, value: any) => (
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
            ))
        },
    ];

    return (
        <BlankCard>
            <CustomTable
                columns={ModelCells}
                dataSource={ModelRows}
                dataSelect={dataSelect}
            />
            <DialogModelView open={open} setOpen={setOpen} value={selectId} />
        </BlankCard>
    );
};

export default TabModel;
