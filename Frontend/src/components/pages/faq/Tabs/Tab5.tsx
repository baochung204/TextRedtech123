// import {
//   Grid,
//   Box,
//   IconButton,
//   Select,
//   MenuItem,
//   Checkbox,
//   ListItemText,
// } from '@mui/material';
// import React, { useState } from 'react';
// import DialogImage from '../dialog/DialogImage';
// import CustomTable from 'src/components/ComponentTables/CustomTable';
// import { IconEye, IconTrash } from '@tabler/icons-react';
// import DataTable5 from '../DataTable/TableTab5';

// interface PropsTab5 {
//   value: string;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen }) => {
//   const [key, setKey] = useState<string | null>(null);

//   const [checkTest, setCheckTest] = useState<boolean>(false);
//   const [dataSelect, setDataSelect] = useState<string[]>([]);


//   const column = [
//     {
//       title: 'ID',
//       dataIndex: 'idCode',
//       isValids: false
//     },
//     {
//       title: 'Ngày tạo',
//       dataIndex: 'createDate'
//     },
//     {
//       title: 'Hình ảnh',
//       dataIndex: 'images',
//       render: (value: string) => {
//         return (
//           <Box
//             component="img"
//             src={value}
//             alt=""
//             width={50}
//           />
//         )

//       }
//     },
//     {
//       title: 'Tên ảnh',
//       dataIndex: 'imgName'
//     },
//     {
//       title: 'Mô tả',
//       dataIndex: 'moTa'
//     },
//     {
//       title: 'Tiêu đề',
//       dataIndex: 'title'
//     },
//     {
//       title: 'Hoạt động',
//       dataIndex: 'action',
//       render: (_row: DataTable5, value: DataTable5) => {
//         return (
//           <Grid container >
//             <Grid item xs={4}>
//               <IconButton
//                 onClick={() => {
//                   setKey(`${value.idCode}`);
//                   setOpen(true)
//                 }}
//               >
//                 <IconEye stroke={2} style={{ color: '#5D87FF' }} />
//               </IconButton>
//             </Grid>
//             <Grid item xs={4}>
//               <IconButton
//                 onClick={() => setCheckTest(!checkTest)}
//               >
//                 <IconTrash stroke={2} style={{ color: '#FA896B' }} />
//               </IconButton>
//             </Grid>
//           </Grid>


//         )
//       }
//     },
//   ];

//   const handleColumnChange = (event: any) => {
//     const { target: { value } } = event;
//     console.log("aasas", value);

//     setDataSelect(
//       typeof value === 'string' ? value.split(',') : value
//     );
//     console.log(dataSelect);

//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid
//         item
//         xs={12}
//         sx={{
//           display: 'flex',
//           justifyContent: 'end',
//         }}
//       >
//         <Select
//           multiple
//           value={dataSelect}
//           displayEmpty
//           onChange={handleColumnChange}
//           renderValue={(value) => value && 'Bộ Lọc'}
//           sx={{

//           }}
//         >
//           {column.map((header: any) => {
//             // const isValidColumn = header.isValids ?? true;
//             // return (

//             //   <MenuItem key={header.dataIndex} value={header.dataIndex}>
//             //     <Checkbox checked={isValidColumn ? !dataSelect.includes(header.dataIndex) : dataSelect.includes(header.dataIndex)} />
//             //     <ListItemText primary={header.title} />
//             //   </MenuItem>
//             // )
//             const isValidColumn = header.isValids ?? true;
//             const isSelected = isValidColumn ? !dataSelect.includes(header.dataIndex) : dataSelect.includes(header.dataIndex);

//             return (
//               <MenuItem key={header.dataIndex} value={header.dataIndex}>
//                 <Checkbox checked={isSelected} />
//                 <ListItemText primary={header.title} />
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </Grid>
//       <Grid item xs={12}>

//         <CustomTable
//           dataSource={DataTable5}
//           columns={column}
//           dataSelect={dataSelect}
//         />
//       </Grid>

//       <DialogImage
//         open={open}
//         setOpen={setOpen}
//         value={value}
//         selectedItemId1={key}
//         setSelectedItemId1={setKey}
//       />
//     </Grid>
//   );
// };

// export default Tab5;


import {
  Grid,
  Box,
  IconButton,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import DialogImage from '../dialog/DialogImage';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { IconEye, IconTrash } from '@tabler/icons-react';
import DataTable5 from '../DataTable/TableTab5';


interface PropsTab5 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tab5: React.FC<PropsTab5> = ({ value, open, setOpen }) => {
  const [key, setKey] = useState<string | null>(null);
  const [checkTest, setCheckTest] = useState<boolean>(false);
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const column = [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createDate',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'images',
      render: (value: string) => {
        return <Box component="img" src={value} alt="" width={50} />;
      },
    },
    {
      title: 'Tên ảnh',
      dataIndex: 'imgName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
      render: (_row: DataTable5, value: DataTable5) => {
        return (
          <Grid container>
            <Grid item xs={4}>
              <IconButton
                onClick={() => {
                  setKey(`${value.idCode}`);
                  setOpen(true);
                }}
              >
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setCheckTest(!checkTest)}>
                <IconTrash stroke={2} style={{ color: '#FA896B' }} />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  console.log(column);


  const handleColumnChange = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log('test: ', event);
    if (value)
      setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Select
          multiple
          value={dataSelect}
          displayEmpty
          onChange={handleColumnChange}
          renderValue={() => 'Bộ Lọc'}
          sx={{}}
        >
          {column.map((header: any) => {
            console.log('header.isValids', header.isValids);

            // const isValidColumn = header.isValids ?? true;
            // const isSelected =
            // isValidColumn ? !dataSelect.includes(header.dataIndex) : dataSelect.includes(header.dataIndex);
            const isValidColumn = header.isValids !== undefined ? header.isValids : true;

            const isSelected = isValidColumn
              ? !dataSelect.includes(header.dataIndex)
              : dataSelect.includes(header.dataIndex);

            return (// Nếu isValids là false
              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                <Checkbox checked={isSelected} />
                <ListItemText primary={header.title} />
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          dataSource={DataTable5}
          columns={column}
          dataSelect={dataSelect}
        />
      </Grid>

      <DialogImage
        open={open}
        setOpen={setOpen}
        value={value}
        selectedItemId1={key}
        setSelectedItemId1={setKey}
      />
    </Grid>
  );
};

export default Tab5;


