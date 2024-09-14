import { CardContent, Box, Stack, Avatar, Grid, Button, Typography } from '@mui/material';
import BlankCard from 'src/components/shared/BlankCard';
import DataTab2 from '../DataTable/TableTab2';
import CircleIcon from '@mui/icons-material/Circle';



const Tab2 = () => {
  return (
    <Grid container spacing={2}>
      {DataTab2.map((items) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={items.id}>
            <BlankCard>
              <CardContent>
                <Stack direction={'row'} gap={2} alignItems="center">
                  <Avatar alt="Remy Sharp" src={items.images} />
                  <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                      {items.functions}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <CircleIcon sx={{ fontSize: '13px', color: `${items.isActive ? '#46AB5E' : ''}` }} />
                      {items.functionsLevel}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Button variant="outlined" color="primary" size="small">
                      {items.functionsID}
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Tab2;
