// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { AppState, dispatch, useSelector } from 'src/store/Store';
// import { filterProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import {
  IconCircles,
  IconDeviceLaptop,
  IconHanger,
  IconMoodSmile,
  IconNotebook,
} from '@tabler/icons-react';
import { setSelectedCategory } from 'src/store/RouterSlice';
import { ProductFiterType } from 'src/types/apps/eCommerce';
const ProductFilter = () => {
  const customizer = useSelector((state) => state.customizer);
  const br = `${customizer.borderRadius}px`;
  const selectedCategory = useSelector((state: AppState) => state.selectReducer.selectcategory);
  const handleClickItem = (item: string | null | undefined) => {
    if (item) dispatch(setSelectedCategory(item));
  };

  const filterCategory: ProductFiterType[] = [
    {
      id: 1,
      filterbyTitle: 'Danh mục',
    },
    {
      id: 2,
      name: 'Tất cả',
      sort: 'all',
      icon: IconCircles,
    },
    {
      id: 3,
      name: 'Chiến lược',
      sort: 'campaign',
      icon: IconHanger,
    },
    {
      id: 4,
      name: 'Function',
      sort: 'function',
      icon: IconNotebook,
    },
    {
      id: 5,
      name: 'Dung lượng File',
      sort: 'knowledge_file',
      icon: IconMoodSmile,
    },
    {
      id: 6,
      name: 'Số lượng File ',
      sort: 'storage_knowledge',
      icon: IconMoodSmile,
    },
    {
      id: 7,
      name: 'Model',
      sort: 'model',
      icon: IconDeviceLaptop,
    },
    {
      id: 8,
      name: 'Trợ lý',
      sort: 'assistant_pack',
      icon: IconMoodSmile,
    },
    {
      id: 9,
      devider: true,
    },
  ];

  return (
    <>
      <List>
        {filterCategory.map((filter) => {
          if (filter.filterbyTitle) {
            return (
              <Typography variant="subtitle2" fontWeight={600} px={3} mt={2} pb={2} key={filter.id}>
                {filter.filterbyTitle}
              </Typography>
            );
          } else if (filter.devider) {
            return <Divider key={filter.id} />;
          }

          return (
            <ListItemButton
              sx={{ mb: 1, mx: 3, borderRadius: br }}
              // selected={active.category === `${filter.sort}`}
              selected={selectedCategory === `${filter.sort}`}
              onClick={() => handleClickItem(filter.sort)}
              key={filter.id}
            >
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <filter.icon stroke="1.5" size="19" />
              </ListItemIcon>
              <ListItemText>{filter.name}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default ProductFilter;
