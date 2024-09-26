// import React, { useEffect, useState } from 'react';
// import DataTable3 from '../DataTable/TableTab3';
// import DialogFile from '../dialog/DialogFile';
// import CustomTable from 'src/components/ComponentTables/CustomTable';
// import { Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
// import { IconEye, IconTrash } from '@tabler/icons-react';

// interface PropsTab3 {
//   value: string;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   dataSelected?: string[]
// }
// interface ItemTable3 {
//   fileName: string;
//   datas: string;
//   creationDate: Date;
//   formats: string;
//   idCode: string;
//   isCheck: boolean
// }

// const Tab3 = ({ value, open, setOpen }: PropsTab3) => {
//   const [dataSelect, setDataSelect] = useState<string[]>([]);

//   const column = [
//     {
//       title: 'ID',
//       dataIndex: 'idCode',
//     },
//     {
//       title: 'Tên file',
//       dataIndex: 'fileName'
//     },
//     {
//       title: 'Dung lượng',
//       dataIndex: 'datas',

//     },
//     {
//       title: 'Ngày tải',
//       dataIndex: 'creationDate',
//       render: (value: Date) => {
//         return new Date(value).toLocaleDateString();
//       },
//     },
//     {
//       title: 'Định dạng',
//       dataIndex: 'formats'
//     },
//     {
//       title: 'Hành động',
//       dataIndex: 'isCheck',
//       render: (value: ItemTable3, row: ItemTable3) => {
//         console.log(value, row);
//         return (
//           <>
//             <Grid container >
//               <Grid item xs={4}>
//                 {value &&
//                   <IconButton
//                     onClick={() => {
//                       console.log(row.idCode);
//                     }}
//                   >
//                     <IconEye stroke={2} style={{ color: '#5D87FF' }} />
//                   </IconButton>
//                 }
//               </Grid>
//               <Grid item xs={4}>
//                 <IconButton>
//                   <IconTrash stroke={2} style={{ color: '#FA896B' }} />
//                 </IconButton>
//               </Grid>
//             </Grid>


//           </>
//         )
//       }
//     }
//   ]

//   useEffect(() => {
//     const hiddenColumns = column
//       .filter(col => col.isValids === false)
//       .map(col => col.dataIndex || '');

//     setDataSelect(hiddenColumns);
//   }, []);

//   const handleColumnChange = (event: any) => {
//     const {
//       target: { value },
//     } = event;
//     setDataSelect(typeof value === 'string' ? value.split(',') : value);
//   };

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid
//           item
//           xs={12}
//           sx={{
//             display: 'flex',
//             justifyContent: 'end',
//           }}
//         >
//           <Select
//             multiple
//             value={dataSelect}
//             displayEmpty
//             onChange={handleColumnChange}
//             renderValue={() => 'Bộ Lọc'}
//           >
//             {column.map((header: any) => {

//               console.log(`check ${header.title}`, dataSelect.includes(header.dataIndex))

//               const isSelected = dataSelect.includes(header.dataIndex);

//               return (
//                 <MenuItem key={header.dataIndex} value={header.dataIndex}>
//                   <Checkbox checked={!isSelected} />
//                   <ListItemText primary={header.title} />
//                 </MenuItem>
//               );
//             })}
//           </Select>
//         </Grid>
//         <Grid item xs={12}>
//           <CustomTable
//             dataSource={DataTable3}
//             columns={column}
//             dataSelect={dataSelect}
//           />
//         </Grid>

//         <DialogFile open={open} setOpen={setOpen} value={value} />
//       </Grid>

//     </>
//   );
// };

// export default Tab3;
import React, { useEffect, useMemo, useState } from 'react';
import DataTable3 from '../DataTable/TableTab3';
import DialogFile from '../dialog/DialogFile';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { Checkbox, Grid, IconButton, ListItemText, MenuItem, Select } from '@mui/material';
import { IconEye, IconTrash } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { AppDispatch, AppState } from 'src/store/Store';
import { useSelector } from 'react-redux';
import { fetchFile } from 'src/store/apps/resources/file/fileSlice';

interface PropsTab3 {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelected?: string[];
}

interface ItemTable3 {
  fileName: string;
  datas: string;
  creationDate: Date;
  formats: string;
  idCode: string;
  isCheck: boolean;
}

interface Column {
  title: string;
  dataIndex: string;
  render?: (value: any, row?: any) => React.ReactNode;
  isValids?: boolean; // Add the optional isValids property
}

const Tab3 = ({ value, open, setOpen }: PropsTab3) => {
  const [dataSelect, setDataSelect] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>()
  const dataFile = useSelector((state: AppState)=> state.file.data)
  useEffect(()=>{
    dispatch(fetchFile())
  },[dispatch])
  const column = useMemo<Column[]>(() => [
    {
      title: 'ID',
      dataIndex: 'idCode',
    },
    {
      title: 'Tên file',
      dataIndex: 'fileName'
    },
    {
      title: 'Dung lượng',
      dataIndex: 'datas',
    },
    {
      title: 'Ngày tải',
      dataIndex: 'creationDate',
      render: (value: Date) => new Date(value).toLocaleDateString(),
    },
    {
      title: 'Định dạng',
      dataIndex: 'formats'
    },
    {
      title: 'Hành động',
      dataIndex: 'isCheck',
      render: (value: ItemTable3, row: ItemTable3) => (
        <Grid container>
          <Grid item xs={4}>
            {value && (
              <IconButton onClick={() => console.log(row.idCode)}>
                <IconEye stroke={2} style={{ color: '#5D87FF' }} />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={4}>
            <IconButton>
              <IconTrash stroke={2} style={{ color: '#FA896B' }} />
            </IconButton>
          </Grid>
        </Grid>
      )
    }
  ], []);

  useEffect(() => {
    const hasIsValids = column.some(col => 'isValids' in col);

    if (hasIsValids) {
      const hiddenColumns = column
        .filter(col => col.isValids === false)
        .map(col => col.dataIndex || '');

      setDataSelect(hiddenColumns);
    } else {
      setDataSelect([]);
    }
  }, [column]);

  const handleColumnChange = (event: any) => {
    const { target: { value } } = event;
    setDataSelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
        <Select
          multiple
          value={dataSelect}
          displayEmpty
          onChange={handleColumnChange}
          renderValue={() => 'Bộ Lọc'}
        >
          {column.map((header: any) => {
            const isSelected = dataSelect.includes(header.dataIndex);
            return (
              <MenuItem key={header.dataIndex} value={header.dataIndex}>
                <Checkbox checked={!isSelected} />
                <ListItemText primary={header.title} />
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          dataSource={DataTable3}
          columns={column}
          dataSelect={dataSelect}
        />
      </Grid>

      <DialogFile open={open} setOpen={setOpen} value={value} />
    </Grid>
  );
};

export default Tab3;
