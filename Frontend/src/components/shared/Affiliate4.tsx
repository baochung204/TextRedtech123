// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Divider, Box } from '@mui/material';
import { useSelector } from 'src/store/Store';
import { AppState } from 'src/store/Store';

type Props = {
  title: string;
  description?: string;
  footer?: string | JSX.Element;
  children: JSX.Element;
  text: string;
};

const Affiliate4 = ({ children, footer, text }: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{
        height: '100%',
        padding: 0,
        border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none',
      }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {/* <CardHeader title={title} sx={{ display: 'flex', justifyContent: 'center' }} />
      {description ? <CardContent>{description}</CardContent> : ''} */}
      <Box sx={{ textAlign: 'center', marginY: '30px' }}>
        {' '}
        <h2>{text}</h2>
        {/* Chi phí / Doanh thu  */}
      </Box>
      <CardContent sx={{ p: 0, m: 0 }}>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ''
      )}
    </Card>
  );
};

export default Affiliate4;
