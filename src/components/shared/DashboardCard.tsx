import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography, Stack, Box, TextField } from '@mui/material';
import { useSelector } from 'src/store/Store';
import { AppState } from 'src/store/Store';

type Props = {
  searchValue?: string; // Giá trị ô tìm kiếm
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Xử lý thay đổi ô tìm kiếm
  showSearchBox?: boolean; // Quyết định có hiển thị ô tìm kiếm hay không
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const DashboardCard = ({
  searchValue,
  onSearchChange,
  showSearchBox = false, // Mặc định không hiển thị ô tìm kiếm
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{ padding: 0, border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none' }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: '30px' }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems={'center'}
            mb={3}
          >
            <Box>
              {showSearchBox && (
                <TextField
                  label="Tìm kiếm tại đây"
                  variant="outlined"
                  sx={{ width: '300px', height: '50px' }}
                  fullWidth
                  value={searchValue}
                  onChange={onSearchChange}
                />
              )}

              {subtitle && (
                <Typography variant="subtitle2" color="textSecondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {action}
          </Stack>

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
