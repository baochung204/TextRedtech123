// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Stack, Typography } from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import doc from 'src/assets/Formatfile/DOC.png';
import html from 'src/assets/Formatfile/HTML.png';
import json from 'src/assets/Formatfile/JSON.png';
import pdf from 'src/assets/Formatfile/PDF.png';
import file from 'src/assets/Formatfile/file.png';
import DashboardCard from 'src/components/shared/DashboardCard';
import { ChatBotResourceType } from 'src/store/user/chatbots/type/assistantByIdType';
interface IProps {
  chatBotResource: ChatBotResourceType | null;
}

const File = ({ chatBotResource }: IProps) => {
  const files = chatBotResource?.chatbotFiles;

  const handleCheckIconFile = (type: string) => {
    if (type) {
      if (type === 'DOCX' || type === 'DOC') {
        return doc;
      } else if (type === 'HTML') {
        return html;
      } else if (type === 'JSON') {
        return json;
      } else if (type === 'pdf') {
        return pdf;
      } else {
        return file;
      }
    }
  };
  return (
    <DashboardCard title="File" subtitle="File được trang bị cho trợ lý">
      <Box>
        {/* <Typography variant="h6">Total: {totalMB.toFixed(2)} MB</Typography> */}
        <Typography variant="h6">Total: {chatBotResource?.storageFile}</Typography>
        <SimpleBar style={{ maxHeight: '410px', overflowX: 'hidden' }}>
          <Box>
            <Stack spacing={3} mt={'26px'}>
              {files?.map((stat, i) => (
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
                        width: 40,
                        height: 40,
                      }}
                      src={handleCheckIconFile(stat?.type)}
                    />
                    <Box>
                      <Typography variant="h6" mb="4px">
                        {stat?.fileName}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {stat?.size}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Box>
        </SimpleBar>
      </Box>
    </DashboardCard>
  );
};

export default File;
