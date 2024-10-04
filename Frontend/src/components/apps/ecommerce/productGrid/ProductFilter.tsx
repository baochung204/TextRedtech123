// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useDispatch, useSelector } from 'src/store/Store';
import {
  ListItemText,
  ListItemButton,
  List,
  Divider,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { filterProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import {
  IconHanger,
  IconCircles,
  IconNotebook,
  IconMoodSmile,
  IconDeviceLaptop,
} from '@tabler/icons-react';
import { ProductFiterType } from 'src/types/apps/eCommerce';

const ProductFilter = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.ecommerceReducer.products);
  const active = useSelector((state) => state.ecommerceReducer.filters);

  const customizer = useSelector((state) => state.customizer);
  const br = `${customizer.borderRadius}px`;

  // const getUniqueData = (data: string[], attr: any) => {
  //   let newVal = data.map((curElem) => {
  //     return curElem[attr];
  //   });
  //   if (attr === 'colors') {
  //     newVal = newVal.flat();
  //   }

  //   return (newVal = ['All', ...Array.from(new Set(newVal))]);
  // };

  // const filterbyGender = getUniqueData(products, 'gender');
  // const filterbyColors = getUniqueData(products, 'colors');

  const filterCategory: ProductFiterType[] = [
    {
      id: 1,
      filterbyTitle: 'Danh mục',
    },
    {
      id: 2,
      name: 'Tất cả',
      sort: 'All',
      icon: IconCircles,
    },
    {
      id: 3,
      name: 'Chiến lược',
      sort: 'fashion',
      icon: IconHanger,
    },
    {
      id: 9,
      name: 'Function',
      sort: 'chatbox',
      icon: IconNotebook,
    },
    {
      id: 10,
      name: 'Files',
      sort: 'openai',
      icon: IconMoodSmile,
    },
    {
      id: 11,
      name: 'Model',
      sort: 'electronics',
      icon: IconDeviceLaptop,
    },
    {
      id: 6,
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
              selected={active.category === `${filter.sort}`}
              onClick={() => dispatch(filterProducts({ category: `${filter.sort}` }))}
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
