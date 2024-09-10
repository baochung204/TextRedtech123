import React from 'react'

import DataTable3 from '../DataTable/TableTab3'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Avatar, Box, Typography } from '@mui/material';
import DialogFile from '../../dialog/DialogFile';

interface PropsTab3 {
  value: string,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Tab3: React.FC<PropsTab3> = ({ value, open, setOpen }) => {
  return (
    <>
      <Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='subtitle2' fontWeight={600}>
                    STT
                  </Typography>
                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={600}>
                    ID
                  </Typography>
                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={600}>
                    Tên file
                  </Typography>
                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={600}>
                    Dung lượng
                  </Typography>
                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={600}>
                    Ngày tải
                  </Typography>
                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={600}>
                    Định dạng
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DataTable3.map((items) => (
                <TableRow
                  key={items.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.id}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {/* <Stack direction="row" spacing={2}>
                      <Avatar src={items.images} variant="rounded" alt={items.images} sx={{ width: 48, height: 48 }} />
                      <Box>
                        <Typography variant='subtitle2' fontWeight={500}>
                          {items.fullName}
                        </Typography>
                        <Typography color="textSecondary" fontSize="11px" variant="subtitle2">
                          {items.election}
                        </Typography>
                      </Box>
                    </Stack> */}
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.idCode}
                    </Typography>
                  </TableCell>

                  <TableCell >
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.fileName}
                    </Typography>

                  </TableCell>
                  <TableCell >
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.datas}
                    </Typography>

                  </TableCell>
                  <TableCell >
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.creationDate.toLocaleDateString()}
                    </Typography>

                  </TableCell>
                  <TableCell >
                    <Typography variant='subtitle2' fontWeight={400}>
                      {items.formats}
                    </Typography>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <DialogFile open={open} setOpen={setOpen} value={value} />
    </>
  )
}

export default Tab3