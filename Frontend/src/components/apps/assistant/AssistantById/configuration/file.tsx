// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import doc from 'src/assets/Formatfile/DOC.png';
import html from 'src/assets/Formatfile/HTML.png';
import json from 'src/assets/Formatfile/JSON.png';
import pdf from 'src/assets/Formatfile/PDF.png';
import DashboardCard from 'src/components/shared/DashboardCard';

const File = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;
  const error = theme.palette.error.main;
  const errorlight = theme.palette.error.light;
  const warninglight = theme.palette.warning.light;
  interface statType {
    title: string;
    level: number;
    color: string;
    lightcolor: string;
    icon: string;
  }

  const stats2: statType[] = [
    {
      title: 'San-pham-092004.xlsx',
      level: 23.5,
      color: primary,
      lightcolor: primarylight,
      icon: doc,
    },
    {
      title: 'Ky-nang-sales.pdf',
      level: 24.5,
      color: secondary,
      lightcolor: secondarylight,
      icon: html,
    },
    {
      title: 'FAQ.docx',
      level: 25.5,
      color: warning,
      lightcolor: warninglight,
      icon: json,
    },
    {
      title: 'infor-company.docx',
      level: 26.5,
      color: error,
      lightcolor: errorlight,
      icon: pdf,
    },
    {
      title: 'Ky-nang-2-sales.pdf',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: html,
    },
    {
      title: 'Ky-nang-5-sales.pdf',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: json,
    },
    {
      title: 'Ky-nang-9-sales.pdf',
      level: 27.5,
      color: error,
      lightcolor: errorlight,
      icon: pdf,
    },
  ];

  const totalMB = stats2.reduce((acc, stat) => acc + stat.level, 0);

  return (
    <DashboardCard title="File" subtitle="File được trang bị cho trợ lý">
      <Box>
        <Typography variant="h6">Total: {totalMB.toFixed(2)} MB</Typography>
        <SimpleBar style={{ maxHeight: '410px', overflowX: 'hidden' }}>
          <Box>
            <Stack spacing={3} mt={'26px'}>
              {stats2.map((stat, i) => (
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
                        color: stat.color,
                        width: 40,
                        height: 40,
                      }}
                      src={stat.icon}
                    ></Avatar>
                    <Box>
                      <Typography variant="h6" mb="4px">
                        {stat.title}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {stat.level} MB
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
