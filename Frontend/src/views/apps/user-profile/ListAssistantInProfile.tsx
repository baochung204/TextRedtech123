// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import ListAssistant from 'src/components/apps/assistant/listAssistant/AssistantList';

const ListAssistantInProfile = () => {
  return (
    <PageContainer title="Trợ lý" description="this is  page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <ListAssistant />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ListAssistantInProfile;
