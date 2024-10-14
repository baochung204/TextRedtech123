import DoneIcon from '@mui/icons-material/Done';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme
} from '@mui/material';
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react';
import { useState } from 'react';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

function not(a: readonly any[], b: readonly any[]) {
  return a.filter((value) => !b.some((item) => item.id === value.id));
}

function intersection(a: readonly any[], b: readonly any[]) {
  return a.filter((value) => b.some((item) => item.id === value.id));
}

// Danh sách các mục
const items: any = [
  {
    id: 1,
    title: 'Họ và tên',
  },
  {
    id: 2,
    title: 'Số điện thoại',
  },
  {
    id: 3,
    title: ' Địa chỉ',
  },
  {
    id: 4,
    title: 'Email',
  },
  {
    id: 5,
    title: 'Tên sản phẩm',
  },
  {
    id: 6,
    title: 'Đơn giá',
  },
  {
    id: 7,
    title: 'Số lượng',
  },
  {
    id: 8,
    title: 'Thành tiền tổng',
  },

  {
    id: 9,
    title: 'Đáng giá',
  },
  {
    id: 10,
    title: 'Ghi chú',
  },
];

const AddTextProduct = () => {
  const [checked, setChecked] = useState<readonly any[]>([]);
  const [left, setLeft] = useState<readonly any[]>(items.slice(0, 5));
  const [right, setRight] = useState<readonly any[]>(items.slice(5));
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (item: any) => () => {
    const currentIndex = checked.findIndex((i) => i.id === item.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
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

  const customList = (items: readonly any[]) => (
    <Paper
      variant="outlined"
      sx={{
        width: 260,
        height: 230,
        border: `1px solid ${borderColor}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <List
        dense
        role="list"
        sx={{
          overflowY: 'auto',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: '8px',
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
        {items.map((item) => {
          const labelId = `transfer-list-item-${item.id}-label`;
          return (
            <ListItem key={item.id} role="listitem" button onClick={handleToggle(item)}>
              <ListItemIcon>
                <CustomCheckbox
                  tabIndex={-1}
                  disableRipple
                  checked={checked.some((i) => i.id === item.id)}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
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
          <Grid container>
            <Grid item xs={6}>
              <CustomFormLabel htmlFor="name" sx={{ mt: 0 }}>
                Định nghĩa chuyển đổi
              </CustomFormLabel>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
              {' '}
              <Button
                variant="contained"
                color="inherit"
                size="small"
                component="span"
                style={{ marginBottom: '0px' }}
                onClick={handleClick}
              >
                {isClicked ? <DoneIcon fontSize="small" color='success' style={{ marginRight: '0px' }} /> : 'Lưu'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{customList(left)}</Grid>
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
            <Grid item>{customList(right)}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTextProduct;
