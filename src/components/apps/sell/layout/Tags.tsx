import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import React, { useState } from 'react';
import CustomTextField from '../../../forms/theme-elements/CustomTextField';
import top100Films from './data';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A5', '#FFBB33', '#33FFBB', '#BB33FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Tags = () => {
  const [tags, setTags] = useState([
    { title: 'Forrest Gump', year: 1994, color: getRandomColor() },
  ]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && (event.target as HTMLInputElement).value) {
      setTags((prevTags) => [
        ...prevTags,
        {
          title: (event.target as HTMLInputElement).value,
          year: new Date().getFullYear(),
          color: getRandomColor(),
        },
      ]);
      event.preventDefault();
    }
  };

  return (
    <Autocomplete
      multiple
      fullWidth
      id="tags-outlined"
      size="medium"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      value={tags}
      filterSelectedOptions
      onChange={(_event, newValue) =>
        setTags(
          newValue.map((tag) => ({
            ...tag,
            year: tag.year || new Date().getFullYear(),
            color: getRandomColor(),
          })),
        )
      }
      renderTags={(value, getTagProps) =>
        value.map((option: any, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            style={{
              backgroundColor: option.color,
              color: '#fff',
              height: 24,
              margin: '0 1px',
            }}
          />
        ))
      }
      renderInput={(params) => (
        <CustomTextField
          {...params}
          placeholder="Tag . . ."
          aria-label="Tag . . ."
          onKeyDown={handleKeyDown}
          sx={{
            height: 40, // Thay đổi chiều cao của CustomTextField
            '& .MuiInputBase-input': {
              height: '13px', // Đảm bảo rằng chiều cao của input tự động điều chỉnh
            }
          }}
        />
      )}
      sx={{
        '& .MuiAutocomplete-input': {
          padding: '6px 8px', // Điều chỉnh padding của input để làm cho nó ngắn lại
        },
        '& .MuiAutocomplete-endAdornment': {
          top: '50%', // Điều chỉnh vị trí của end adornment để căn chỉnh tốt hơn
        },
        '& .MuiAutocomplete-tag': {
          margin: '0 2px', // Thay đổi khoảng cách giữa các tag
        },
      }}
    />
  );
};

export default Tags;
