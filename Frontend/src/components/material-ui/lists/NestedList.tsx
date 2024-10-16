// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React from 'react';

import {
  IconChevronDown,
  IconChevronUp,
  IconInbox,
  IconMailOpened,
  IconSend,
  IconStar,
} from '@tabler/icons-react';

const NestedList = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <IconSend width={20} height={20} />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <IconMailOpened width={20} height={20} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <IconInbox width={20} height={20} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <IconStar width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default NestedList;
