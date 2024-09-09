import React from "react";
import {
    CardContent,
    Box,
    Stack,
    Avatar,
    Grid,
    Button,
    Typography,

} from '@mui/material';
import BlankCard from 'src/components/shared/BlankCard';
import { IconMapPin } from '@tabler/icons-react';
import DataTab1 from "../DataTable/TableTab1";

const Tab1 = () => {
    return (
        <Grid container spacing={2}>
            {DataTab1.map((items) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={items.id}>
                        <BlankCard>
                            <CardContent>
                                <Stack direction={'row'} gap={2} alignItems="center">
                                    <Avatar alt="Remy Sharp" src={items.images} />
                                    <Box>
                                        <Typography variant="h6" textOverflow={'ellipsis'} noWrap>
                                            {items.strategy}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                                        >
                                            <IconMapPin size="14" />
                                            {items.strategyLevel}
                                        </Typography>
                                    </Box>
                                    <Box ml="auto">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                        >
                                            {items.strategyID}
                                        </Button>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </BlankCard>
                    </Grid>
            )})}
        </Grid>
    )
}

export default Tab1;