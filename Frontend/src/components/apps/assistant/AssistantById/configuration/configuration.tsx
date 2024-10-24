// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Box,
  CardContent,
  Chip,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Banner from 'src/assets/images/banner/trangbịtroly.png';
import { ChatBotResourceType } from 'src/store/user/chatbots/type/assistantByIdType';
interface IProps {
  chatBotResource: ChatBotResourceType | null;
}
const Configuration = ({ chatBotResource }: IProps) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const borderColor = theme.palette.divider;
  interface sellssData {
    product: string;
    parameter: number;
    percent: number;
    color: string;
  }

  const sellss: sellssData[] = [
    {
      product: 'File',
      parameter: `${chatBotResource?.fileSlot}`,
      percent: 75,
      color: 'primary',
    },
    {
      product: 'Dung lượng',
      parameter: 289,
      percent: 55,
      color: 'warning',
    },
    {
      product: 'Function',
      parameter: `${chatBotResource?.functionSlot}`,
      percent: 20,
      color: 'secondary',
    },
  ];
  return (
    <Paper
      sx={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: `1px solid ${borderColor}`,
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" color="white">
          Trang bị trợ lý
        </Typography>
        <Typography variant="subtitle1" color="white">
          Cấu hình
        </Typography>
      </CardContent>
      <Paper
        sx={{
          overflow: 'hidden',
          zIndex: '1',
          position: 'relative',
          mx: '10px',
          mt: '160px',
          mb: '10px',
        }}
      >
        <Box p={3}>
          <Stack spacing={3}>
            {/* {sellss.map((sell: any, i: number) => (
              <Box key={i}>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">{sell.product}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {sell.parameter}{' '}
                      {sell.product == 'File' ? ' File' : sell.product == 'Dung lượng' ? ' MB' : ''}
                    </Typography>
                  </Box>
                  <Chip
                    sx={{
                      backgroundColor: sell.color === 'primary' ? primarylight : secondarylight,
                      color: sell.color === 'primary' ? primary : secondary,
                      borderRadius: '4px',
                      width: 55,
                      height: 24,
                    }}
                    label={sell.percent + '%'}
                  />
                </Stack>
                <LinearProgress value={sell.percent} variant="determinate" color={sell.color} />
              </Box>
            ))} */}
            <Box>
              <Stack
                direction="row"
                spacing={2}
                mb={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6">File</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {chatBotResource?.fileSlot} File
                  </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: primarylight,
                    color: primary,
                    width: 55,
                    height: 24,
                  }}
                  label={70 + '%'}
                />
              </Stack>
              <LinearProgress value={70} variant="determinate" color="primary" />
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Paper>
  );
};

export default Configuration;
