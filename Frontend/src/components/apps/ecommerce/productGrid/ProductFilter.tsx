// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import {
  ListItemText,
  ListItemButton,
  List,
  Divider,
  ListItemIcon,
  Typography,
} from '@mui/material';
// import { filterProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import {
  IconHanger,
  IconCircles,
  IconNotebook,
  IconMoodSmile,
  IconDeviceLaptop,
} from '@tabler/icons-react';
import { ProductFiterType } from 'src/types/apps/eCommerce';
import { fetchProducts } from 'src/store/user/products/productsUseSlice';

const ProductFilter = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.ecommerceReducer.products);
  const active = useSelector((state: AppState) => state.products.data);
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
      sort: '',
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
              selected={active.category === `${filter.sort}`}
              onClick={() => dispatch(fetchProducts({ category: `${filter.sort}` }))}
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
