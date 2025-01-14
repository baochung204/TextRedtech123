// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box, Card, CardContent, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AppState, useSelector } from 'src/store/Store';

type Props = {
  title: string;
  description?: string;
  footer?: string | JSX.Element;
  children: JSX.Element;
  text?: string;
};

const Affilatec3 = ({ children, footer, text }: Props) => {
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
      <Box sx={{ textAlign: 'center', marginY: '30px' }}>
        {' '}
        <h2>{text}</h2>
      </Box>
      <CardContent sx={{ m: 0, p: 0 }}>{children}</CardContent>
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

export default Affilatec3;
