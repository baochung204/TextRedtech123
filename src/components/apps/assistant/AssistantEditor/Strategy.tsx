import { Avatar, Box, Button, CardContent, Grid, Stack, Typography } from "@mui/material"
import { IconMapPin } from "@tabler/icons-react"
import BlankCard from "src/components/shared/BlankCard"
import rank1 from 'src/assets/images/rank/rank1.png';



const Strategy = () => {
    return (
        <Grid item xs={12} lg={12} mt={2}>
            <Box display="flex" alignItems="center">
                <Grid xs={12} sm={10}>
                    <img
                        src={rank1}
                        alt=""
                        style={{
                        width: '90%',
                        height: '100%',
                        zIndex: 2,
                        position: 'relative',
                        }}
                    />
                </Grid>
                <Grid xs={12} sm={6} lg={5}>
                <Box
                    fontSize={22}
                    fontWeight={600}
                    color="#ff5722"
                    letterSpacing="0.5px"
                    padding="4px 12px"
                    borderRadius="8px"
                    backgroundColor="#f0f0f0"
                    display="inline-block"
                    boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
                    >
                    Diamond
                </Box>



                </Grid>
            </Box>
                
        </Grid>
    )
}
export default Strategy;