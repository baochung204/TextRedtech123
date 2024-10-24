import { Avatar, Box, Stack, Typography } from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DashboardCard from 'src/components/shared/DashboardCard';
import {
  ChatBotFunction,
  ChatBotResourceType,
} from 'src/store/user/chatbots/type/assistantByIdType';
interface IProps {
  chatBotResource: ChatBotResourceType | null;
}
const Function = ({ chatBotResource }: IProps) => {
  const functions = chatBotResource?.chatBotFunctions;

  return (
    <DashboardCard title="Function " subtitle="Function được trang bị cho trợ lý">
      {/* Bọc nội dung trong SimpleBar để thêm thanh cuộn */}
      <SimpleBar style={{ maxHeight: '410px', overflowX: 'hidden' }}>
        <Box>
          <Stack spacing={3} mt={'26px'}>
            {functions?.map((stat: ChatBotFunction, i: number) => (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                key={i}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      // bgcolor: errorLight,
                      // color: stat.color,
                      width: 40,
                      height: 40,
                    }}
                    src={stat?.badgeUrl}
                    alt={stat?.name}
                  ></Avatar>
                  <Box>
                    <Typography variant="h6" mb="4px">
                      {stat?.name}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>
      </SimpleBar>
    </DashboardCard>
  );
};

export default Function;
