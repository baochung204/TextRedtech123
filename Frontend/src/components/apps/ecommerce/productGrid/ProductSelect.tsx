import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
interface PropsI {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setSortDir: React.Dispatch<React.SetStateAction<string>>;
}
const ProductSelect = ({ setSortBy, setSortDir }: PropsI) => {
  const filterbySort = [
    { id: 1, value: '1', name: 'createAt', label: 'Mới nhất', direction: 'false' },
    { id: 2, value: '2', name: 'priceAfterDiscount', label: 'Giá: Cao-Thấp', direction: 'false' },
    { id: 3, value: '3', name: 'priceAfterDiscount', label: 'Giá: Thấp-Cao', direction: 'true' },
    { id: 4, value: '4', name: 'discount', label: 'Giảm giá', direction: 'false' },
    { id: 5, value: '5', name: '', label: 'Đặt lại', direction: 'true' },
  ];
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value as string;
    const selectedFilter = filterbySort.find((filter) => filter.value === selectedValue);
    if (selectedFilter) {
      setSelectedValue(selectedValue);
      if (selectedFilter.name === '') {
        setSortBy('');
        setSortDir('');
        setSelectedValue('');
      } else {
        setSortBy(selectedFilter.name);
        setSortDir(selectedFilter.direction);
      }
    }
  };
  return (
    <FormControl sx={{ minWidth: 180 }} size="small">
      <InputLabel>Sắp xếp theo</InputLabel>
      <Select value={selectedValue} onChange={handleChange} label="Sắp xếp theo">
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
