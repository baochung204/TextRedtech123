import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from '@mui/material';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react';
import { useState } from 'react';
import Scrollbar_y from 'src/components/custom-scroll/Scrollbar_y';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const AddFunction = () => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [left, setLeft] = useState<readonly number[]>([0, 1, 2, 3]);
  const [right, setRight] = useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  const customList = (items: readonly number[]) => (
    <Paper
      variant="outlined"
      sx={{
        width: 260,
        height: 230,
        border: `1px solid ${borderColor}`,
        position: 'relative',
        overflow: 'hidden', // Loại bỏ scrollbar gốc
      }}
    >
      <List
        dense
        role="list"
        sx={{
          overflowY: 'auto',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: '8 px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#e6e6e6',
          },
        }}
      >
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <CustomCheckbox
                  tabIndex={-1}
                  disableRipple
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Paper elevation={3} sx={{ minHeight: '5%', p: 2, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={12}>
          <Box fontWeight="600" mb={1}>
            Định nghĩa chuyển đổi
          </Box>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item sx={{}}>
              {customList(left)}
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllRight}
                  disabled={left.length === 0}
                  aria-label="move all right"
                >
                  <IconChevronsRight width={20} height={20} />
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  <IconChevronRight width={20} height={20} />
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  <IconChevronLeft width={20} height={20} />
                </Button>
                <Button
                  sx={{ my: 0.5 }}
                  variant="outlined"
                  size="small"
                  onClick={handleAllLeft}
                  disabled={right.length === 0}
                  aria-label="move all left"
                >
                  <IconChevronsLeft width={20} height={20} />
                </Button>
              </Grid>
            </Grid>
            <Grid sx={{}} item>
              {customList(right)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddFunction;
