import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CustomTable from 'src/components/ComponentTables/CustomTable';
import { AppState, dispatch } from 'src/store/Store';
import { fetchModelListData } from 'src/store/admin/resources/model/table/modelListSlice';
import DialogModelView from '../dialog/DialogModelView';
import { ImageCells, ImageRows } from './mockData/TableImage';

interface PropsTabFunction {
  value: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSelect?: string[];
}

const TabGallary = ({ open, setOpen, dataSelect }: PropsTabFunction) => {
  const [selectId, setSelectId] = useState<string>();
  const modelList = useSelector((state: AppState) => state.model_list.dataa);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    dispatch(fetchModelListData({ page_no: page, page_size: rowsPerPage }));
  }, [rowsPerPage, page]);

  console.log(modelList);

  return (
    <>
      <CustomTable
        columns={ImageCells}
        dataSource={ImageRows}
        dataSelect={dataSelect}
        count={5}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
      <DialogModelView open={open} setOpen={setOpen} value={selectId as any} />
    </>
  );
};

export default TabGallary;
