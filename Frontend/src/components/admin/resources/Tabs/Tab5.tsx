import {
  Avatar,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Checkbox,
} from '@mui/material';
import React, { useState } from 'react';
import DataTable5 from '../DataTable/TableTab5';
import DialogImage from '../dialog/DialogImage';

interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeadTable {
  head: string;
}

const headDate: HeadTable[] = [
  {
    head: 'ID',
  },
  {
    head: 'Ngày tạo',
  },
  {
    head: 'Hình ảnh',
  },
  {
    head: 'Tên ảnh',
  },
  {
    head: 'Mô tả',
  },
  {
    head: 'Tiêu đề',
  },
  {
    head: 'Hoạt động',
  },
];

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen }) => {
  const [key, setKey] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = DataTable5.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleSelect = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const [checkTest, setCheckTest] = useState<boolean>(false);
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < DataTable5.length}
                  checked={DataTable5.length > 0 && selected.length === DataTable5.length}
                  onChange={(event) => {
                    if (event.target.checked) {
                      const newSelecteds = DataTable5.map((item) => item.idCode);
                      setSelected(newSelecteds);
                    } else {
                      setSelected([]);
                    }
                  }}
                  sx={{ display: `${checkTest ? '' : 'none'}` }}
                />
              </TableCell>
              {headDate.map((item, index) => (
                <TableCell key={index}>
                  <Typography variant="h6">{item.head}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => {
              const isItemSelected = isSelected(item.idCode);
              return (
                <TableRow key={index} selected={isItemSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      onChange={() => handleSelect(item.idCode)}
                      sx={{
                        border: '1px !important',
                        display: `${checkTest ? '' : 'none'}`,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.idCode}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.createDate}</Typography>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      src={item.images}
                      variant="rounded"
                      alt={item.images}
                      sx={{ width: 48, height: 48 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.imgName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.moTa}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">{item.title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setKey(`${item.idCode}`);
                            setOpen(true);
                          }}
                        >
                          Sửa
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => setCheckTest(!checkTest)}
                        >
                          Xóa
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={DataTable5.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_event, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
      />
    </>
  );
};

export default Tab5;
