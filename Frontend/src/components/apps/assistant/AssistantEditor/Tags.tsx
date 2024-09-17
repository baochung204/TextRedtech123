// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip'; // Sử dụng Chip để hiển thị tag
import React, { useState } from 'react';
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
import top100Films from './data';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFBB33', '#33FFBB', '#BB33FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface Tag {
  title: string;
  year: number;
  color: string;
}

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([]); // Khởi tạo với mảng rỗng

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && (event.target as HTMLInputElement).value) {
      setTags((prevTags) => [
        ...prevTags,
        {
          title: (event.target as HTMLInputElement).value,
          year: new Date().getFullYear(),
          color: getRandomColor(),
        }, // Thêm tag với màu ngẫu nhiên
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
      onChange={(_event, newValue) =>
        setTags(newValue.map((tag) => ({ ...tag, color: getRandomColor() })))
      }
      renderTags={(value, getTagProps) =>
        value.map((option: any, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            style={{ backgroundColor: option.color, color: '#fff' }}
          />
        ))
      }
      renderInput={(params) => (
        <CustomTextField
          {...params}
          placeholder="Tags"
          aria-label="tags"
          onKeyDown={handleKeyDown}
        />
      )}
    />
  );
};

export default Tags;
