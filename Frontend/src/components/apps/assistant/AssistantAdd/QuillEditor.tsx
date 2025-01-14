// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Paper } from '@mui/material';



const QuillEditor = () => {
  const [text, setText] = useState('');

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    
        <Paper
          sx={{ border: `0px solid ${borderColor}` }}
          variant="outlined"
        >
          <ReactQuill
            
            value={text}
            onChange={(value) => {
              setText(value);
            }}
            placeholder="Nhập vào đây..."
            style={{
              height: '100px',
            }}
          />
        </Paper>
     
  );
};

export default QuillEditor;
