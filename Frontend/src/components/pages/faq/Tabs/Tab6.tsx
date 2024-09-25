<<<<<<< HEAD
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { fetchUrls } from 'src/store/apps/resources/url/UrlSlice';
import { AppDispatch, AppState } from 'src/store/Store';
import DialogURL from '../dialog/DIalogURL';
import BlankCard from 'src/components/apps/assistant/AssistantEditor/BlankCard';
=======

import DataRow from '../DataTable/TableTab6';
import DialogURL from '../dialog/DIalogURL';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
import { IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
>>>>>>> 78148bd8d10412f6f033cdb15168a139e9df85d2

interface PropsTab6 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
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
        dataIndex: 'idCode',
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

const Tab6: React.FC<PropsTab6> = ({ value, open, setOpen }) => {
<<<<<<< HEAD
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(6);
  const dispatch = useDispatch<AppDispatch>();
  const dataUrls = useSelector((state: AppState) => state.urlReducer.urls);
  useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  //   const handleChangePage = (newPage: number) => {
  //     setPage(newPage);
  //   };
  //   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  //   };
  //   const paginatedData = DataRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'tilte',
    },
    {
      title: 'Mô tả',
      dataIndex: 'describe',
    },
    {
      title: 'Liên kết',
      dataIndex: 'url',
    },
  ];

  return (
    <>
      <Box>
        <BlankCard>
          <CustomTable columns={columns} dataSource={dataUrls} />
        </BlankCard>
      </Box>
      <DialogURL open={open} setOpen={setOpen} value={value} />
    </>
  );
=======

    const [dataSelect, setDataSelect] = useState<string[]>([]);
    const handleColumnChange = (event: any) => {
        const {
            target: { value },
        } = event;
        console.log('test: ', event);
        if (value)
            setDataSelect(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                }}
            >
                <Select
                    multiple
                    value={dataSelect}
                    displayEmpty
                    onChange={handleColumnChange}
                    renderValue={() => 'Bộ Lọc'}
                    sx={{}}
                >
                    {column.map((header: any) => {
                        console.log('header.isValids', header.isValids);

                        // const isValidColumn = header.isValids ?? true;
                        // const isSelected =
                        // isValidColumn ? !dataSelect.includes(header.dataIndex) : dataSelect.includes(header.dataIndex);
                        const isValidColumn = header.isValids !== undefined ? header.isValids : true;

                        const isSelected = isValidColumn
                            ? !dataSelect.includes(header.dataIndex)
                            : dataSelect.includes(header.dataIndex);

                        return (
                            <MenuItem key={header.dataIndex} value={header.dataIndex}>
                                <Checkbox checked={isSelected} />
                                <ListItemText primary={header.title} />
                            </MenuItem>
                        );
                    })}
                </Select>
            </Grid>
            <Grid item xs={12}>
                <CustomTable
                    dataSource={DataRow}
                    columns={column}
                    dataSelect={dataSelect}
                />
            </Grid>

            <DialogURL
                open={open}
                setOpen={setOpen}
                value={value}
            />
        </Grid>
    );
>>>>>>> 78148bd8d10412f6f033cdb15168a139e9df85d2
};

export default Tab6;
