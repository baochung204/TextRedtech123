import PersonIcon from '@mui/icons-material/Person';
import { Alert, Avatar, Box, Divider, Snackbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { StrategyRows } from '../mockData/TableStr';

interface PropsDialog {
    value: string,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogStrView: React.FC<PropsDialog> = ({ value, open, setOpen }) => {
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        strategyGroup: '',
        strategyName: '',
        badge: '',
        level: '',
        ownedCustomers: '',
        appliedAssistants: '',
        summary: '',
        content: '',
        dateCreate: '',
        creator:''
    });

    const [errors, setErrors] = useState({
        strategyName: '',
        strategyGroup: '',
        badge: '',
        level: '',
        summary: '',
        content: '',
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setIsEditMode(false);
    };

    const handleSubmit = () => {
        if (isEditMode) {
            const newErrors = validateForm();
            if (Object.values(newErrors).some(error => error !== '')) {
                setErrors(newErrors);
            } else {
                // Lưu thay đổi
                setIsEditMode(false); // Thoát chế độ chỉnh sửa sau khi lưu
                setOpenSnackbar(true);
                setTimeout(() => {
                    setOpenSnackbar(false);
                }, 3000);
            }
        } else {
            // Kích hoạt chế độ chỉnh sửa
            setIsEditMode(true);
        }
    };

    const validateForm = () => {
        const newErrors = {
            strategyName: '', strategyGroup: '', badge: '',
            level: '',
            summary: '',
            content: '',
        };

        if (!formData.strategyName) {
            newErrors.strategyName = 'Tên chiến lược không được để trống';
        }
        if (!formData.strategyGroup) {
            newErrors.strategyGroup = 'Nhóm chiến lược không được để trống';
        }
        if (!formData.badge) {
            newErrors.badge = 'Huy hiệu không được để trống';
        }
        if (!formData.level) {
            newErrors.level = 'Level không được để trống';
        }
        if (!formData.content) {
            newErrors.content = 'Nội dung không được để trống';
        }
        if (!formData.summary) {
            newErrors.summary = 'Tóm tắt không được để trống';
        }
        return newErrors;
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const fetchStrategyDetail = (id: string) => {
        const strategy = StrategyRows.find((item) => item.id === id);
        if (strategy) {
            setFormData({
                id: strategy.id,
                strategyGroup: strategy.strategyGroup,
                badge: strategy.badge,
                strategyName: strategy.strategyName,
                level: strategy.level,
                ownedCustomers: strategy.ownedCustomers,
                appliedAssistants: strategy.appliedAssistants,
                summary: strategy.summary,
                content: strategy.content,
                dateCreate: strategy.dateCreate,
                creator: strategy.creator
            });
        }
    };

    useEffect(() => {
        if (value) {
            fetchStrategyDetail(value);
        }
    }, [value]);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                sx={{
                    '& .MuiDialog-container': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    '& .MuiPaper-root': {
                        width: '100%',
                        maxWidth: '900px',
                    },
                }}
            >
                <DialogTitle>
                    <Typography fontWeight={600} variant='h3'>
                        {isEditMode ? 'Chỉnh sửa chiến lược' : 'Xem chiến lược'}
                    </Typography>
                </DialogTitle>
                <Divider sx={{ mx: '0px' }} />
                <DialogContent sx={{ pt: 0, px: 5 }}>
                    {isEditMode ? (<Grid container spacing={2}>
                        <Grid item xs={12} lg={4} md={12}>
                            <Box
                                sx={{ textAlign: 'center', justifyContent: 'center', mt: { md: 2 }, mb: '20px' }}
                            >
                                <label htmlFor="avatar-upload">
                                    <Avatar

                                        src={avatarPreview || ''}
                                        alt="avatar preview"
                                        sx={{
                                            width: { xs: 90, sm: 110, md: 130, lg: 160 },
                                            height: { xs: 90, sm: 110, md: 130, lg: 160 },
                                            margin: 'auto',
                                            fontSize: 50,
                                            backgroundColor: avatarPreview ? 'transparent' : '#f0f0f0',
                                            color: '#9e9e9e',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            zIndex: 1,
                                            borderRadius: '50%',
                                            border: 'none',
                                            '&:before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                borderRadius: '50%',
                                                padding: '6px',
                                                background: 'linear-gradient(#50b2fc, #f44c66)',
                                                '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                maskComposite: 'exclude',
                                                zIndex: 1,
                                            },
                                        }}
                                    >
                                        {!avatarPreview && <PersonIcon fontSize="inherit" />}
                                    </Avatar>
                                </label>
                                <input
                                    id="avatar-upload"
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handleAvatarChange}
                                />
                                <Typography mt={1} fontWeight={600}>
                                    Ảnh huy hiệu
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={8} md={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={9} md={6}>

                                </Grid>
                                <Grid item xs={12} lg={9} md={6}>

                                </Grid>
                            </Grid>
                            <CustomFormLabel htmlFor="name-text">Tên chiến lược</CustomFormLabel>
                            <CustomTextField
                                id="name-text"
                                variant="outlined"
                                fullWidth
                                placeholder="Nhập tên Function . . ."
                                value={formData.strategyName}
                                onChange={(e) => {
                                    setFormData({ ...formData, strategyName: e.target.value });
                                    if (errors.strategyName && e.target.value.trim() !== '') {
                                        setErrors({ ...errors, strategyName: '' });
                                    }
                                }}
                                error={!!errors.strategyName}
                                helperText={errors.strategyName}
                                disabled={!isEditMode}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={9} md={6}>
                                    <CustomFormLabel htmlFor="strategyGroup-text">Nhóm chiến lược</CustomFormLabel>
                                    <CustomTextField
                                        id="strategyGroup-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập tên nhóm chiến lược . . ."
                                        value={formData.strategyGroup}
                                        onChange={(e) => {
                                            setFormData({ ...formData, strategyGroup: e.target.value });
                                            if (errors.strategyGroup && e.target.value.trim() !== '') {
                                                setErrors({ ...errors, strategyGroup: '' });
                                            }
                                        }}
                                        error={!!errors.strategyGroup}
                                        helperText={errors.strategyGroup}
                                        disabled={!isEditMode}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={3} md={6}>
                                    <CustomFormLabel htmlFor="level-text">Level</CustomFormLabel>
                                    <CustomTextField
                                        id="level-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập level . . ."
                                        value={formData.level}
                                        onChange={(e) => {
                                            setFormData({ ...formData, level: e.target.value });
                                            if (errors.level && e.target.value.trim() !== '') {
                                                setErrors({ ...errors, level: '' });
                                            }
                                        }}
                                        error={!!errors.level}
                                        helperText={errors.level}
                                        disabled={!isEditMode}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} lg={12} md={12}>
                            <Divider sx={{ mx: '-30px' }} />
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="summary-text">Tóm tắt</CustomFormLabel>
                                    <CustomTextField
                                        id="summary-text"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Nhập tóm tắt . . ."
                                        multiline
                                        rows={5}
                                        value={formData.summary}
                                        onChange={(e) => {
                                            setFormData({ ...formData, summary: e.target.value });
                                            if (errors.summary && e.target.value.trim() !== '') {
                                                setErrors({ ...errors, summary: '' });
                                            }
                                        }}
                                        error={!!errors.summary}
                                        helperText={errors.summary}
                                        disabled={!isEditMode}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="content-text">Nội dung</CustomFormLabel>
                                    <CustomTextField
                                        id="content-text"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Nhập nội dung . . ."
                                        multiline
                                        rows={5}
                                        value={formData.content}
                                        onChange={(e) => {
                                            setFormData({ ...formData, content: e.target.value });
                                            if (errors.content && e.target.value.trim() !== '') {
                                                setErrors({ ...errors, content: '' });
                                            }
                                        }}
                                        error={!!errors.content}
                                        helperText={errors.content}
                                        disabled={!isEditMode}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    ) : (
                        <Grid item xs={12} lg={12} md={12}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} lg={6} md={6} sx={{}}>
                                    <CustomFormLabel prop htmlFor="strategyName-text">ID</CustomFormLabel>
                                    <CustomTextField 
                                        id="strategyName-text"
                                        variant="outlined"
                                        fullWidth
                                        value={formData.id}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="strategyName-text">Người tạo</CustomFormLabel>
                                    <CustomTextField
                                    
                                        id="strategyName-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập tên chiến lược . . ."
                                        value={formData.creator}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={12} md={6} >
                                    <CustomFormLabel htmlFor="strategyName-text">Tên chiến lược</CustomFormLabel>
                                    <CustomTextField
                                        id="strategyName-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập tên chiến lược . . ."
                                        value={formData.strategyName}
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="strategyGroup-text">Nhóm chiến lược</CustomFormLabel>
                                    <CustomTextField
                                        id="strategyGroup-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập nhóm chiến lược . . ."
                                        value={formData.strategyGroup}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="badge-text">Huy hiệu</CustomFormLabel>
                                    <CustomTextField
                                        id="badge-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập huy hiệu . . ."
                                        value={formData.badge}

                                    />
                                    
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="level-text">Level</CustomFormLabel>
                                    <CustomTextField
                                        id="level-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập level . . ."
                                        value={formData.level}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="ownedCustomers-text">Khách hàng sở hữu</CustomFormLabel>
                                    <CustomTextField
                                        id="ownedCustomers-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập khách hàng sở hữu . . ."
                                        value={formData.ownedCustomers}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>

                                    <CustomFormLabel htmlFor="appliedAssistants-text">Trợ lý đã áp dụng</CustomFormLabel>
                                    <CustomTextField
                                        id="appliedAssistants-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập trợ lý đã áp dụng . . ."
                                        value={formData.appliedAssistants}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="dateCreate-text">Ngày tạo</CustomFormLabel>
                                    <CustomTextField
                                        id="dateCreate-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập ngày tạo . . ."
                                        value={formData.dateCreate}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="summary-text">Tóm tắt</CustomFormLabel>
                                    <CustomTextField
                                        id="summary-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập tóm tắt . . ."
                                        multiline
                                        rows={5}
                                        value={formData.summary}

                                    />
                                </Grid>
                                <Grid item xs={12} lg={6} md={6}>
                                    <CustomFormLabel htmlFor="content-text">Nội dung</CustomFormLabel>
                                    <CustomTextField
                                        id="content-text"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Nhập nội dung . . ."
                                        multiline
                                        rows={5}
                                        value={formData.content}

                                    />
                                </Grid>

                                <Grid item xs={12} lg={6} md={6}>

                                </Grid>
                            </Grid>
                        </Grid>)}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{isEditMode ? 'Hủy' : 'Đóng'}</Button>
                    <Button variant='contained' onClick={handleSubmit}>{isEditMode ? 'Lưu' : 'Sửa'}</Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={openSnackbar} autoHideDuration={3000}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Thêm chiến lược thành công!
                </Alert>
            </Snackbar>
        </>
    );
};

export default DialogStrView;