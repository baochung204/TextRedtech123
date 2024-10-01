import { Dialog, DialogTitle } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import ProductTable from "../product/ProductData";

interface PropUp {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setCheckValue: React.Dispatch<React.SetStateAction<string | null>>
    checkValue: string | null,
    seLectID: string | null
}

const DialogBuyProduct = ({ open, setOpen, setCheckValue, seLectID, checkValue }: PropUp) => {

    const emptyInitialValues = useMemo(
        () => ({
            id: '',
            danhmuc: '',
            anh: '',
            tensanpham: '',
            gianiemyet: '',
            giakhuyenmai: '',
            level: <></>,
            tags: '',
            soluongmua: '',
            tongdoanhthu: '',
            titrongdoanthu: '',
            ttsp: '',
            ha: '',
            secretkey: '',
            hdsd: '',
        }),
        [],
    );

    const [initialValues, setInitialValues] = useState(emptyInitialValues);


    const validationSchema = Yup.object({
        id: Yup.string(),
        danhmuc: Yup.string(),
        anh: Yup.string(),
        tensanpham: Yup.string(),
        gianiemyet: Yup.string(),
        giakhuyenmai: Yup.string(),
        tags: Yup.string(),
        soluongmua: Yup.string(),
        tongdoanhthu: Yup.string(),
        titrongdoanthu: Yup.string(),
        ttsp: Yup.string(),
        ha: Yup.string(),
        secretkey: Yup.string(),
        hdsd: Yup.string(),
    });

    const handleClose = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, resetForm: () => void,) => {
        setOpen(false);
        resetForm();
    };
    const handleSubmit = (values: typeof initialValues,{ resetForm }: FormikHelpers<typeof initialValues>,) => {
        if (checkValue === 'view' || checkValue === 'add') {
            setCheckValue('fix')
        } else {
            setOpen(false);
            console.log(values);
            setCheckValue(null)
            resetForm();
        }
    };


    useEffect(() => {
        if (checkValue === 'add') {
            setInitialValues(emptyInitialValues);
        } else {
            const data = ProductTable.find((item) => item.id === seLectID);
            if (data) {
                setInitialValues({
                    id: data.id,
                    danhmuc: data.danhmuc,
                    anh: data.anh,
                    tensanpham: data.tensanpham,
                    gianiemyet: data.gianiemyet,
                    giakhuyenmai: data.giakhuyenmai,
                    level: data.level,
                    tags: data.tags,
                    soluongmua: data.soluongmua,
                    tongdoanhthu: data.tongdoanhthu,
                    titrongdoanthu: data.titrongdoanthu,
                    ttsp: data?.ttsp ?? '',
                    ha: data?.ha ?? '',
                    secretkey: data?.secretkey ?? '',
                    hdsd: data?.hdsd ?? '',
                });
            }
        }
    }, [checkValue, emptyInitialValues, seLectID]);

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth='md'
        >
            <DialogTitle sx={{ textAlign: 'center' }}>
                {checkValue === 'add' ? 'Thêm san phẩm' : checkValue === 'view' ? 'Xem sản phẩm' : 'Sửa sản phẩm'}
            </DialogTitle>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >

            </Formik>
        </Dialog>
    )
}

export default DialogBuyProduct
