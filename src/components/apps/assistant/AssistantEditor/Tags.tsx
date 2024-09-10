// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip'; // Sử dụng Chip để hiển thị tag
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
import top100Films from './data';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFBB33', '#33FFBB', '#BB33FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Tags = () => {
  const [tags, setTags] = useState([{ title: 'Forrest Gump', color: getRandomColor() }]); // Tag mặc định với màu ngẫu nhiên
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.target.value) {
      setTags((prevTags) => [
        ...prevTags,
        { title: event.target.value, color: getRandomColor() }, // Thêm tag với màu ngẫu nhiên
      ]);
      event.preventDefault(); // Ngăn autocomplete chọn giá trị
    }
  };

  return (
    <Autocomplete
      multiple
      fullWidth
      id="tags-outlined"
      size="small"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      value={tags}
      filterSelectedOptions
      onChange={(event, newValue) =>
        setTags(newValue.map((tag) => ({ ...tag, color: getRandomColor() }))) // Cập nhật tag với màu ngẫu nhiên
      }
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            style={{ backgroundColor: option.color, color: '#fff' }} // Thêm màu ngẫu nhiên
          />
        ))
      }
      renderInput={(params) => (
        <CustomTextField
          {...params}
          placeholder="Favorites"
          aria-label="Favorites"
          onKeyDown={handleKeyDown} // Bắt sự kiện khi nhấn Enter
        />
      )}
    />
  );
};

export default Tags;
