import React from 'react'
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Avatar, Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataTable4 from '../DataTable/TableTab4';


const Tab4 = () => {
  return (
    <Box>
      {/* <Box display="flex" justifyContent="flex-end">
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddCircleIcon
            sx={{
              fontSize: 30
            }}
          />
        </IconButton>
      </Box> */}
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
            {DataTable4.map((items) => (
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
                  <Stack direction="row" spacing={2}>
                    <Avatar src={items.images} variant="rounded" alt={items.images} sx={{ width: 48, height: 48 }} />
                    <Box>
                      <Typography variant='subtitle2' fontWeight={500}>
                        {items.fullName}
                      </Typography>
                      <Typography color="textSecondary" fontSize="11px" variant="subtitle2">
                        {items.election}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell >
                  <Typography variant='subtitle2' fontWeight={400}>
                    {items.modelName}
                  </Typography>

                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={400}>
                    {items.modelLocal}
                  </Typography>

                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={400}>
                    {items.creationDate.toLocaleDateString()}
                  </Typography>

                </TableCell>
                <TableCell >
                  <Typography variant='subtitle2' fontWeight={400}>
                    {items.trainedTokens}
                  </Typography>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Tab4