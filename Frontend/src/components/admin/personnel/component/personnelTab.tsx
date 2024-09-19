import {
  Avatar,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import Scrollbar_x from 'src/components/custom-scroll/Scrollbar_x';
import PersonnelTable from '../datatable/PersonnelTable';
import DialogPersonel from '../dialog/DialogPersonel';
interface PropsHeadTable {
  head: string;
}

const HeadTable: PropsHeadTable[] = [
  {
    head: 'ID',
  },
  {
    head: 'Ngày tạo',
  },
  {
    head: 'Nhân viên',
  },
  {
    head: 'Phòng ban',
  },
  {
    head: 'Email',
  },
  {
    head: 'Số điện thoại',
  },
  {
    head: 'Bài viết',
  },
  {
    head: 'Trạng thái',
  },
  {
    head: 'Hoạt động',
  },
];

interface PropsItem {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonnelTab = ({ value, open, setOpen }: PropsItem) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [key, setKey] = useState<string>('');
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = PersonnelTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer>
        <Scrollbar_x>
          <Table>
            <TableHead>
              <TableRow>
                {HeadTable.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Typography variant="h6">{item.head}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item, index) => {
                // const isItemSelected = isSelected(item.id);
                // console.log(isItemSelected);

                return (
                  <TableRow
                    key={index}
                    // selected={isItemSelected}
                  >
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.id}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.createdAt.toLocaleDateString()}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          src={item.avt}
                          variant="rounded"
                          alt={item.avt}
                          sx={{ width: 48, height: 48 }}
                        />
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography variant="h6">{item.employeeName}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="subtitle2">{item.position}</Typography>
                          </Grid>
                        </Grid>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.department}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.email}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.phoneNumber}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">{item.articleCount}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Typography variant="subtitle2">
                        {item.status ? (
                          <Typography color="success.dark" variant="subtitle2">
                            Hoạt động
                          </Typography>
                        ) : (
                          <Typography color="error" variant="subtitle2">
                            Khóa
                          </Typography>
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <IconButton onClick={() => setKey(item.id)}>
                        <IconEye stroke={2} style={{ color: '#5D87FF' }} />
                      </IconButton>
                      <IconButton>
                        <IconTrash stroke={2} style={{ color: '#FA896B' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar_x>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={PersonnelTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_event, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <DialogPersonel open={open} value={value} setOpen={setOpen} keyOption={key} />
    </>
  );
};

export default PersonnelTab;
