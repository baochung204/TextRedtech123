import { Avatar, Box, Button, CardContent, Checkbox, Dialog, DialogTitle, Fab, FormControlLabel, Grid, List, ListItem, ListItemText, Stack, Tooltip, Typography } from "@mui/material"

import starBg from 'src/assets/images/backgrounds/gold.png';
import BlankCard from '../AssistantEditor/BlankCard';
import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
const ranks = ['Rank 1', 'Rank 2', 'Rank 3'];


const Strategy = () => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState(ranks[1]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);

  };




    return (
        
    <Box>
        
      <Tooltip title="Thêm" onClick={handleClickOpen}>
            <Fab size="small" color="secondary" aria-label="plus">
                <IconPlus width={18} />
            </Fab>
        </Tooltip>
      <Typography ml={-38} variant="subtitle1" component="div">
        {selectedValue.split('\n').map((value, index) => (
            <React.Fragment key={index}>
              <Box>
                <CardContent sx={{}}>
                    <Box textAlign="center">
                    <img src={starBg} alt="star" width={130} />
                    <Typography variant="h5">{value}</Typography>
                    </Box>
                </CardContent>
                </Box>
            </React.Fragment>
          ))}
      </Typography>
      <Dialog onClose={() => handleClose(selectedValue)} open={open} >
        <DialogTitle 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>Chọn chiến lược<CloseIcon onClick={handleClose} style={{cursor:'pointer',opacity:0.7}}/></DialogTitle>
            <List sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                pt: 0,
                overflow: 'hidden', // Ẩn scroll
                flexWrap: 'wrap', // Cho phép nội dung xuống dòng
                justifyContent: 'center', // Căn giữa các phần tử nếu cần
            }}>
            {ranks.map((rank) => (
                <Box key={rank} onClick={() => handleClose(rank)}>
                <CardContent sx={{ p: '30px', cursor:'pointer' }}>
                    
                    <Box textAlign="center">
                    <img src={starBg} alt="star" width={130} />
                    <Typography variant="h5">{rank}</Typography>
                    </Box>
                </CardContent>
                </Box>
            ))}
        </List>
      </Dialog>

    </Box>
    )
}
export default Strategy;