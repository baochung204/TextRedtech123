import React, { useState } from "react";
import { Badge, Box, Grid, IconButton, InputAdornment, ListItemText, MenuItem, Select, SelectChangeEvent, Tab, TextField } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconSearch } from "@tabler/icons-react";
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonnelTab from './component/personnelTab'
import TopCard from "src/components/widgets/cards/TopCard";

const dataSource = [
    {
        bgColor: 'primary.light',
        color: 'primary.main',
        title: 'Nhân viên',
        total: '120',
        icons:
            <PeopleAltIcon
                sx={{
                    fontSize: 40
                }}
            />
    },
    {
        bgColor: 'warning.light',
        color: 'warning.main',
        title: 'Admin',
        total: '5',
        icons:
            <PeopleAltIcon
                sx={{
                    fontSize: 40
                }}
            />
    },
    {
        bgColor: 'success.light',
        color: 'success.main',
        title: 'Hoạt động',
        total: '52',
        icons:
            <PeopleAltIcon
                sx={{
                    fontSize: 40
                }}
            />
    },
    {
        bgColor: 'error.light',
        color: 'error.main',
        title: 'Khóa',
        total: '12',
        icons:
            <PeopleAltIcon
                sx={{
                    fontSize: 40
                }}
            />
    }
]

interface FilmsData {
    title: string;
}

const FilmsData: FilmsData[] = [
    { title: 'Tỉ lệ chuyển đổi' },
    { title: 'Cấp Rank' },
    { title: 'Tổng doanh thu' },
];

const Personnels = () => {
    const [value, setValue] = React.useState('1');
    
    const [selectedItems, setSelectedItems] = useState<string>('');

    const [open, setOpen] = useState<boolean>(false)

    const handleChange1 = (event: SelectChangeEvent<string>) => {
        setSelectedItems(event.target.value);
    };

    const handleItemClick1 = (title: string) => {
        if (selectedItems === title) {
            setSelectedItems('');
        } else {
            setSelectedItems(title);
        }
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid container rowSpacing={3} >
            <Grid item xs={12}>
                <TopCard dataSource={dataSource} />
            </Grid>
            <Grid item xs={12} >
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Nhân viên" value="1" />
                                <Tab label="Phân quyền" value="2" />

                            </TabList>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <IconButton aria-label="filter" sx={{ mr: 1 }}>
                                    <Badge badgeContent={selectedItems ? 1 : 0} color="primary">
                                        <FilterListIcon />
                                    </Badge>
                                </IconButton>
                                <Select
                                    value={selectedItems}
                                    onChange={handleChange1}
                                    displayEmpty
                                    renderValue={(selected) => (selected === '' ? 'Bộ Lọc' : `Bộ Lọc`)}
                                    size="small"
                                    style={{ maxWidth: 100, marginRight: '10px' }}
                                >
                                    {FilmsData.map((film) => (
                                        <MenuItem
                                            key={film.title}
                                            value={film.title}
                                            onClick={() => handleItemClick1(film.title)}
                                        >
                                            <ListItemText primary={film.title} />
                                        </MenuItem>
                                    ))}
                                </Select>

                                <TextField
                                    id="outlined-search"
                                    placeholder="Tìm kiếm trợ lý"
                                    size="small"
                                    type="search"
                                    variant="outlined"
                                    inputProps={{ 'aria-label': 'Search Followers' }}
                                    sx={{ fontSize: { xs: '10px', sm: '16px', md: '16px' } }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconSearch size="12" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    fullWidth={true}
                                />
                                <IconButton
                                    color="primary"
                                    aria-label="Add to cart"
                                    onClick={() => {
                                        setOpen(true); console.log(open);
                                    }}
                                    sx={{
                                        pr: 1.5
                                    }}
                                >
                                    <AddCircleIcon
                                        sx={{ fontSize: 30 }}
                                    />
                                </IconButton>

                            </Box>
                        </Box>
                        <TabPanel value="1"><PersonnelTab value={value} open={open} setOpen={setOpen} /></TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </Box>  
            </Grid>

        </Grid>
    )
}

export default Personnels;