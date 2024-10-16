// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { IconBeach, IconBriefcase, IconPhoto } from '@tabler/icons-react';

const FolderList = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconPhoto width={20} height={20} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconBriefcase width={20} height={20} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <IconBeach width={20} height={20} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </>
  );
};

export default FolderList;
