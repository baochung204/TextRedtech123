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
  const primaryLight = theme.palette.primary.light;
  const warning = theme.palette.warning.main;
  const warningLight = theme.palette.warning.light;
  const secondary = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;
  const borderColor = theme.palette.divider;
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
            <Box>
              <Stack
                direction="row"
                spacing={2}
                mb={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6">Files</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {chatBotResource?.fileSlot} File
                  </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: primaryLight,
                    color: primary,
                    width: 'auto',
                    height: 24,
                  }}
                  label={`${
                    chatBotResource?.fileSlot && chatBotResource?.fileSlotMax
                      ? Math.floor(
                          (chatBotResource?.fileSlot / chatBotResource?.fileSlotMax) * 100,
                        ) ===
                        (chatBotResource?.fileSlot / chatBotResource?.fileSlotMax) * 100
                        ? (chatBotResource?.fileSlot / chatBotResource?.fileSlotMax) * 100
                        : (
                            (chatBotResource?.fileSlot / chatBotResource?.fileSlotMax) *
                            100
                          ).toFixed(1)
                      : 0
                  }%`}
                />
              </Stack>
              <LinearProgress
                // value={70}
                value={
                  chatBotResource?.fileSlot && chatBotResource?.fileSlotMax
                    ? (chatBotResource?.fileSlot / chatBotResource?.fileSlotMax) * 100
                    : 0
                }
                variant="determinate"
                color="primary"
              />
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                mb={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6">Dung lượng </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {chatBotResource?.storageFile}
                  </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: warningLight,
                    color: warning,
                    width: 'auto',
                    height: 24,
                  }}
                  label={`${
                    chatBotResource?.storage && chatBotResource?.storageMax
                      ? Math.floor(
                          (chatBotResource?.storage / chatBotResource?.storageMax) * 100,
                        ) ===
                        (chatBotResource?.storage / chatBotResource?.storageMax) * 100
                        ? (chatBotResource?.storage / chatBotResource?.storageMax) * 100
                        : ((chatBotResource?.storage / chatBotResource?.storageMax) * 100).toFixed(
                            1,
                          )
                      : 0
                  }%`}
                />
              </Stack>
              <LinearProgress
                // value={70}
                value={
                  chatBotResource?.storage && chatBotResource?.storageMax
                    ? (chatBotResource?.storage / chatBotResource?.storageMax) * 100
                    : 0
                }
                variant="determinate"
                color="warning"
              />
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={2}
                mb={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6">Functions </Typography>
                </Box>
                <Chip
                  sx={{
                    backgroundColor: secondaryLight,
                    color: secondary,
                    width: 'auto',
                    height: 24,
                  }}
                  label={chatBotResource?.functionSlot}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Paper>
  );
};

export default Configuration;
