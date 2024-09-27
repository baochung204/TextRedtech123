import { PaletteColor } from '@mui/material/styles/createPalette';

// Mở rộng kiểu PaletteColor để thêm thuộc tính `start`
declare module '@mui/material/styles' {
    interface PaletteColor {
        start?: string;
    }
  
}