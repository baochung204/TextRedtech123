import { Avatar, Box, Button, CardContent, Grid, Stack, Typography } from "@mui/material"
import { IconMapPin } from "@tabler/icons-react"
import BlankCard from "src/components/shared/BlankCard"
import img1 from 'src/assets/images/profile/user-1.jpg';


const Integration = () => {
    return (
        <Grid item xs={12} lg={12} mt={2}>
              <BlankCard>
                  <CardContent>
                  <Stack direction={'row'} gap={2} alignItems="center">
                      <Avatar alt="Remy Sharp" src={img1} />
                      <Box>
                      <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                          Redfood
                      </Typography>
                      <Typography
                          variant="caption"
                          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                          <IconMapPin size="14" />
                          565835121
                      </Typography>
                      </Box>
                      <Box ml="auto">
                        <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        >
                        Đã kết nối
                        </Button>
                      </Box>
                  </Stack>
                  </CardContent>
              </BlankCard>
              </Grid>
    )
}
export default Integration;