import DataRow from '../DataTable/TableTab6';
import DialogURL from '../dialog/DIalogURL';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { Box, IconButton } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';

interface PropsTab6 {
    value: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dataSelect: string[]
}

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen, dataSelect }) => {

    const column = [
        {
            title: 'ID',
            dataIndex: 'idCode'
        },
        {
            title: 'Tiêu đề URL',
            dataIndex: 'titleurl'
        },
        {
            title: 'Mô tả URL',
            dataIndex: 'descriptionurl'
        },
        {
            title: 'URL',
            dataIndex: 'url',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (value: string) =>
            (
                <IconButton
                    onClick={() => console.log(value)}
                >
                    <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                </IconButton>
            )

        }
    ]

    return (
        <Box
            sx={{
            paddingTop: 1
        }}
        >
            <CustomTable
                dataSource={DataRow}
                columns={column}
                dataSelect={dataSelect}
            />

            <DialogURL
                open={open}
                setOpen={setOpen}
                value={value}
            />
        </Box>
    );
};

export default Tab6;
