import { Avatar, Box, Button, CardContent, Grid, Stack, Typography } from "@mui/material"

import starBg from 'src/assets/images/backgrounds/gold.png';
import BlankCard from '../AssistantEditor/BlankCard';



const Strategy = () => {
    return (
    <Box>
      <CardContent sx={{ p: '30px' }}>
        <Box textAlign="center">
          <img src={starBg} alt="star" width={130} />
          <Typography variant="h5">Golden Rank</Typography>
        </Box>
      </CardContent>
    </Box>
    )
}
export default Strategy;