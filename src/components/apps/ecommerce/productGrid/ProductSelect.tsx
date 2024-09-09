import React from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Stack } from '@mui/material';
import { useSelector } from 'src/store/Store';
import { sortByProducts } from 'src/store/apps/eCommerce/ECommerceSlice';
import { dispatch } from 'src/store/Store';

const ProductSelect = () => {
  const checkactive = useSelector((state) => state.ecommerceReducer.sortBy);

  const filterbySort = [
    { id: 1, value: 'newest', label: 'Mới nhất' },
    { id: 2, value: 'priceDesc', label: 'Giá: Cao-Thấp' },
    { id: 3, value: 'priceAsc', label: 'Giá: Thấp-Cao' },
    { id: 4, value: 'discount', label: 'Giảm giá' },
  ];

  const handleChange = (event) => {
    dispatch(sortByProducts(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: 180 }} size="small">
      <InputLabel>Sắp xếp theo</InputLabel>
      <Select value={checkactive} onChange={handleChange} label="Sắp xếp theo">
        {filterbySort.map((filter) => (
          <MenuItem key={filter.id} value={filter.value}>
            {filter.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductSelect;
