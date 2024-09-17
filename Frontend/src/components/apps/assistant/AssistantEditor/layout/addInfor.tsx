import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, Grid, MenuItem, Paper } from "@mui/material";

import { useState } from "react";
import CustomFormLabel from "src/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "src/components/forms/theme-elements/CustomSelect";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
import DateTime from "../DateTime";
import Sli from '../Sli';
import Checkboxes from '../Tags';

const AddInfor = () => {

    const [country, setCountry] = useState('1');
    const [language, setLanguage] = useState('1');
    const [gender, setGender] = useState('1');
    const [level, setLevel] = useState('1');

    const handleChangeCountry = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCountry(event.target.value as string);
    };
    const handleChangeLanguage = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string);
    };
    const handleChangeGender = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGender(event.target.value as string);
    };
    const handleLevel = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLevel(event.target.value as string);
    };



    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setAvatarPreview(URL.createObjectURL(file));
        }
    };


    return (
        <Paper elevation={3} sx={{ minHeight: '80%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Box mb={1.2} sx={{ maxHeight: '100%' }}>
                {/* Circular Avatar Placeholder */}
                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box sx={{ maxHeight: 'calc(65vh - 120px)', textAlign: 'center', justifyContent: 'center', mt: { md: 2 }, mb: '20px' }}>
                            <label htmlFor="avatar-upload">
                                <Avatar
                                    src={avatarPreview || ''}
                                    alt="avatar preview"
                                    sx={{
                                        width: { xs: 90, sm: 110, md: 130, lg: 200 },
                                        height: { xs: 90, sm: 110, md: 130, lg: 200 },
                                        margin: 'auto',
                                        fontSize: 50,
                                        backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
                                        color: '#9e9e9e',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '50%',
                                        border: 'none',  // Xóa đường viền mặc định
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            borderRadius: '50%',
                                            padding: '6px', // Độ rộng của đường viền
                                            background: 'linear-gradient(#50b2fc, #f44c66)', // Gradient màu
                                            '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                            maskComposite: 'exclude',
                                            zIndex: 1,  // Đảm bảo gradient ở sau avatar
                                        },
                                    }}
                                >
                                    {!avatarPreview && <PersonIcon fontSize="inherit" />}
                                </Avatar>

                            </label>
                            {/* Hidden file input */}
                            <input
                                id="avatar-upload"
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleAvatarChange}
                            />



                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>Tên</CustomFormLabel>
                        <CustomTextField size="small" id="name" placeholder="Nhập tên trợ lý mong muốn " variant="outlined" fullWidth />
                        <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                            <Grid item xs={12} sm={6} lg={7}>
                                <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Ngày sinh</CustomFormLabel>
                                <DateTime />
                            </Grid>
                            <Grid item xs={12} sm={6} lg={5}>
                                <CustomFormLabel sx={{ mt: 3 }} htmlFor="demo-simple-select">Giới tính</CustomFormLabel>
                                <CustomSelect
                                    size="small"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    onChange={handleChangeGender}
                                    fullWidth
                                >
                                    <MenuItem value={1}>Nam</MenuItem>
                                    <MenuItem value={2}>Nữ</MenuItem>

                                </CustomSelect>
                            </Grid>

                        </Grid>
                        
                        <CustomFormLabel sx={{ mt: 3 }} htmlFor="demo-simple-select">Trình độ học vẫn</CustomFormLabel>
                        <CustomSelect
                            size="small"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={level}
                            onChange={handleLevel}
                            fullWidth
                        >
                            <MenuItem value={1}>Tốt nghiệp cấp 3</MenuItem>
                            <MenuItem value={2}>Đại học</MenuItem>
                            <MenuItem value={3}>Trên đại học</MenuItem>
                        </CustomSelect>
                    </Grid>

                </Grid>
                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Chuyên môn</CustomFormLabel>
                        <Checkboxes />

                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <CustomFormLabel htmlFor="name" sx={{ mt: 3 }}>Tính cách</CustomFormLabel>
                        <Checkboxes />

                    </Grid>

                </Grid>
                <Grid container item xs={12} sm={12} lg={12} spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <CustomFormLabel htmlFor="demo-simple-select">Quốc gia</CustomFormLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            onChange={handleChangeCountry}
                            fullWidth
                        >
                            <MenuItem value={1}>Việt Nam</MenuItem>
                            <MenuItem value={2}>Trung Quốc</MenuItem>
                            <MenuItem value={3}>Nhật</MenuItem>
                        </CustomSelect>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <CustomFormLabel htmlFor="demo-simple-select">Ngôn ngữ</CustomFormLabel>
                        <CustomSelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language}
                            onChange={handleChangeLanguage}
                            fullWidth
                        >
                            <MenuItem value={1}>Việt Nam</MenuItem>
                            <MenuItem value={2}>Anh</MenuItem>
                        </CustomSelect>
                    </Grid>
                </Grid>
                {/* Số lượng file */}
                <Sli />
            </Box>
        </Paper>


    )
}

export default AddInfor;