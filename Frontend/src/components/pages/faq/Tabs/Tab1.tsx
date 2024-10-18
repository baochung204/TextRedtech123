import {
  Avatar,
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStr } from 'src/store/apps/resources/str/strSlice';
import { AppDispatch, AppState } from 'src/store/Store';
// import { fetchStrData } from 'src/store/user/user-resources/userSlice';
import DataTab1 from '../DataTable/TableTab1';
import DialogStragety from '../dialog/DialogStragety';
import { Str } from 'src/types/apps/str';
import BlankCard from 'src/components/shared/BlankCard';

const Tab1 = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const dispatch = useDispatch<AppDispatch>();
  const dataStr = useSelector((state: AppState) => state.str.data || []);
  console.log('aaa', dataStr);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchStr({ page, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Str[]>([
    {
      badgeUrl: '',
      campaignId: '',
      campaignName: '',
      groupCampaignName: '',
      level: '',
      summary: '',
    },
  ]);

  const handleClick = (items: Str) => {
    setOpen(true);
    setData([
      {
        badgeUrl: items.badgeUrl,
        campaignId: items.campaignId,
        campaignName: items.campaignName,
        level: items.level,
        groupCampaignName: items.groupCampaignName,
        summary: items.summary,
      },
    ]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {dataStr.content?.map((items: any) => (
          <Grid item xs={12} sm={6} md={4} key={items.campaignId}>
            <BlankCard>
              <CardContent
                onClick={() => handleClick(items)}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Stack direction={'row'} gap={2} alignItems="center">
                  <Avatar alt="Remy Sharp" src={items.badgeUrl} />
                  <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                      {items.campaignName}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      {items.level}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Button variant="outlined" color="primary" size="small">
                      {items.campaignId}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[15, 18, 21]}
        component="div"
        count={DataTab1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số hàng trên mỗi trang"
      />
      <DialogStragety open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default Tab1;
