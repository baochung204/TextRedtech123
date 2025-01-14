import React from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { setLanguage } from 'src/store/customizer/CustomizerSlice';
import FlagEn from 'src/assets/images/flag/icon-flag-en.svg';
import FlagVn from 'src/assets/images/flag/icon-flag-vn.svg';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { AppState } from 'src/store/Store';

const Languages = [
  {
    flagname: 'Tiếng Việt (VN)',
    icon: FlagVn,
    value: 'vn',
  },
  {
    flagname: 'Tiếng Anh (UK)',
    icon: FlagEn,
    value: 'en',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  // Lấy giá trị ngôn ngữ từ state, mặc định là 'vn' nếu không có giá trị
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0]; // Mặc định là lá cờ Việt Nam
  const { i18n } = useTranslation();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langValue: string) => {
    dispatch(setLanguage(langValue));
    i18n.changeLanguage(langValue); // Thay đổi ngôn ngữ trong i18n
    setAnchorEl(null); // Đóng menu sau khi chọn ngôn ngữ
  };

  useEffect(() => {
    // Thay đổi ngôn ngữ mặc định là 'vn' nếu không có giá trị trong customizer
    i18n.changeLanguage(customizer.isLanguage || 'vn');
  }, [customizer.isLanguage, i18n]);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/* Hiển thị lá cờ hiện tại, mặc định là lá cờ Việt Nam */}
        <Avatar src={currentLang.icon} alt={currentLang.value} sx={{ width: 20, height: 20 }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 2, px: 3 }}
            onClick={() => handleLanguageChange(option.value)}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
