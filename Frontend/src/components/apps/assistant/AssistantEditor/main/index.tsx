import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import ChatBot from '../layout/ChatBot';
import Integration from '../layout/Integration';
import Strategy from '../layout/Strategy';
import AddFunction from '../layout/addFunctions';
import AddInfor from '../layout/addInfor';
import AddModel from '../layout/addModel';
import AddSearch from '../layout/addSearch';
import Sli from '../Sli';


const AssistantEditor = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false); // Set initial state to 'false'

  const handleChange4 =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false); // Set to 'false' to close
    };

  return (
    <PageContainer title="Tạo Assistant" description="this is Custom Form page">
      <Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          mt={2}
          mb={2}
        >
          <Stack spacing={1} direction="row"></Stack>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="secondary">
              Lưu
            </Button>
          </Stack>
        </Stack>
        <Grid container spacing={2}>
          {/* Cột 1 */}
          <Grid item xs={12} sm={12} lg={8}>
            <Grid item xs={12} sm={12} lg={12}>
              <AddInfor />
            </Grid>

            <Grid item xs={12} sm={12} lg={12} mt={2}>
              <Accordion
                elevation={3}
                expanded={expanded === 'panel1'}
                onChange={handleChange4('panel1')}
              >
                <AccordionSummary
                  expandIcon={<IconChevronDown size="20" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">Cấu hình</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <AddModel />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                      <Sli />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <AddSearch />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <AddFunction />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

          {/* Cột 2 */}
          <Grid container item xs={12} sm={12} lg={4} sx={{ height: '100%' }}>
            <Grid item xs={12} sx={{ height: '50%' }}> {/* 1/3 chiều cao của parent */}
              <ChatBot />
            </Grid>
            <Grid item xs={12} sx={{ height: '25%' }}> {/* 1/3 chiều cao của parent */}
              <Integration />
            </Grid>
            <Grid item xs={12} sx={{ height: '25%' }}> {/* 1/3 chiều cao của parent */}
              <Strategy />
            </Grid>
          </Grid>


        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantEditor;
