import { IconButton, InputAdornment, TextField } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface PropsI {
  onSearch: (searchName: string) => void;
}

export default function ProductSearch({ onSearch }: PropsI) {
  const [searchName, setSearchName] = useState<string>('');
  const [debouncedSearchName, setDebouncedSearchName] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchName(searchName.trim());
    }, 250);
    return () => clearTimeout(handler);
  }, [searchName]);

  useEffect(() => {
    if (debouncedSearchName) {
      onSearch(debouncedSearchName);
    } else {
      onSearch('');
    }
  }, [debouncedSearchName, onSearch]);

  const onHandleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const trimmedSearchName = searchName.trim();
      if (trimmedSearchName) {
        onSearch(trimmedSearchName);
      } else {
        onSearch('');
      }
    }
  };

  return (
    <TextField
      id="outlined-search"
      placeholder="Tìm kiếm sản phẩm"
      size="small"
      type="search"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton sx={{ ml: '-5px' }} onClick={() => onSearch(searchName.trim())}>
              <IconSearch size="14" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      onChange={onHandleSearchChange}
      onKeyDown={handleKeyDown}
    />
  );
}
