import { Avatar, Box, Button, CardContent, Checkbox, Dialog, DialogTitle, Fab, FormControlLabel, Grid, List, ListItem, ListItemText, Stack, Tooltip, Typography } from "@mui/material";
import starBg from 'src/assets/images/backgrounds/gold.png';
import BlankCard from '../AssistantEditor/BlankCard';
import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import rank1 from '../../../../assets/images/rank/rank1.png';
import rank2 from '../../../../assets/images/rank/rank2.png';
import rank3 from '../../../../assets/images/rank/rank3.png';

interface Ranks {
    rankName: string;
    rankImg: any;
}

const ranks: Ranks[] = [
    {
        rankName: 'Rank 1',
        rankImg: rank1,
    },
    {
        rankName: 'Rank 2',
        rankImg: rank2,
    },
    {
        rankName: 'Rank 3',
        rankImg: rank3,
    },
];

const Strategy = () => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<Ranks>(ranks[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: Ranks) => {
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

            <Box ml={-36}>
                <CardContent>
                    <Box textAlign="center">
                        <img src={selectedValue.rankImg} alt="rank" width={130} />
                        <Typography variant="h5">{selectedValue.rankName}</Typography>
                    </Box>
                </CardContent>
            </Box>

            <Dialog onClose={() => handleClose(selectedValue)} open={open}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Chọn chiến lược
                    <CloseIcon onClick={() => setOpen(false)} style={{ cursor: 'pointer', opacity: 0.7 }} />
                </DialogTitle>

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        pt: 0,
                        overflow: 'hidden',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {ranks.map((rank) => (
                        <Box key={rank.rankName} onClick={() => handleClose(rank)}>
                            <CardContent sx={{ p: '30px', cursor: 'pointer' }}>
                                <Box textAlign="center">
                                    <img src={rank.rankImg} alt="star" width={100} />
                                    <Typography variant="h5">{rank.rankName}</Typography>
                                </Box>
                            </CardContent>
                        </Box>
                    ))}
                </List>
            </Dialog>
        </Box>
    );
};

export default Strategy;
