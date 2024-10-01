import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import AddInfor from 'src/components/apps/assistant/AssistantEditor/layout/addInfor';
import AddModel from 'src/components/apps/assistant/AssistantEditor/layout/addModel';
import Sli from 'src/components/apps/assistant/AssistantEditor/Sli';
import AddSearch from 'src/components/apps/assistant/AssistantEditor/layout/addSearch';
import AddFunction from 'src/components/apps/assistant/AssistantEditor/layout/addFunctions';
import ChatBot from 'src/components/apps/assistant/AssistantEditor/layout/ChatBot';
import Integration from 'src/components/apps/integration/Integration';
import AddText from 'src/components/apps/assistant/AssistantEditor/layout/addText';
import { Strategy } from '../resources/mockData/TableStr';

const AssistantEditer = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [checkId, setCheckId] = React.useState(false);
  const handleChange4 = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleCheckId = () => {
    setCheckId((prevCheckId) => !prevCheckId);
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
            <Button variant="contained" color="primary" onClick={handleCheckId}>
              {checkId ? (
                <>
                  <AddIcon fontSize="medium" style={{ marginRight: '10px' }} />
                  <Typography fontSize={15}>Tạo</Typography>
                </>
              ) : (
                <>
                  <SaveIcon fontSize="medium" style={{ marginRight: '10px' }} />
                  <Typography fontSize={15}>Lưu</Typography>
                </>
              )}
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
                  <Grid container>
                    <Grid item xs={12} sm={6} lg={12}>
                      <AddModel />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                      <AddText />
                    </Grid>
                    <Grid container spacing={2}>
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
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

          {/* Cột 2 */}
          <Grid container item xs={12} sm={12} lg={4} sx={{ height: '100%' }}>
            <Grid item xs={12}>
              {' '}
              {/* 1/3 chiều cao của parent */}
              <ChatBot />
            </Grid>
            <Grid item xs={12}>
              {' '}
              {/* 1/3 chiều cao của parent */}
              <Integration />
            </Grid>
            <Grid item xs={12}>
              {' '}
              {/* 1/3 chiều cao của parent */}
              <Strategy />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AssistantEditer;
