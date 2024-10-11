import u1 from 'src/assets/images/profile/user-1.jpg';
import u2 from 'src/assets/images/profile/user-2.jpg';
import u3 from 'src/assets/images/profile/user-3.jpg';
import u4 from 'src/assets/images/profile/user-4.jpg';
import u5 from 'src/assets/images/profile/user-5.jpg';
import u6 from 'src/assets/images/profile/user-6.jpg';
import u7 from 'src/assets/images/profile/user-7.jpg';
import u8 from 'src/assets/images/profile/user-8.jpg';
import u9 from 'src/assets/images/profile/user-9.jpg';
import u10 from 'src/assets/images/profile/user-10.jpg';
import { Rating } from '@mui/material';




const imageSources = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

interface ProductProps {
    id: string;
    danhmuc: string;
    anh: string[];
    tensanpham: string;
    gianiemyet: string;
    giakhuyenmai: string;
    level: JSX.Element;
    tags: string;
    soluongmua: string;
    tongdoanhthu: string;
    titrongdoanthu: string;
    ttsp?: string;
    ha?: string;
    secretkey?: string;
    hdsd?: string;
    mota: string,
    nhomFunction?: string,
    tenFunction?: string,
    codeFunction?: string,
    levelx?: string,
    khachHang?: string,
    troLy?: string,
    tomTat?: string,
    anhStrategy?: string[],
    nhomStrategy?: string,
    tenStrategy?: string,
    khachhangStrategy?: string,
    levelStrategy?: string,
    trolyStrategy?: string,
    tomtatStrategy?: string,
    noidungStrategy?: string
    files?: string
    detail?: string;
    guide?: string
}


const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `#${randomNumber.toString().padStart(6, '0')}`;
}


const ProductTable: ProductProps[] = [
    {
        id: generateIdCode(),
        danhmuc: 'Học máy',
        anh: [imageSources[Math.floor(Math.random() * imageSources.length)]],
        tensanpham: 'GPT-0',
        gianiemyet: '200.000',
        giakhuyenmai: '150.000',
        level: <Rating name="read-only" value={3} readOnly />,
        tags: 'tagTest',
        soluongmua: '100',
        tongdoanhthu: '300.000',
        titrongdoanthu: '20%',
        mota: 'Mo Ta',
        detail: "12334"
    },
    {
        id: generateIdCode(),
        danhmuc: 'Học máy',
        anh: [imageSources[Math.floor(Math.random() * imageSources.length)]],
        tensanpham: 'GPT-0',
        gianiemyet: '200.000',
        giakhuyenmai: '150.000',
        level: <Rating name="read-only" value={4} readOnly />,
        tags: 'tagTest',
        soluongmua: '100',
        tongdoanhthu: '300.000',
        titrongdoanthu: '20%',
        mota: 'Mo Ta',
        detail: "12334"
    },
    {
        id: generateIdCode(),
        danhmuc: 'Học máy',
        anh: [imageSources[Math.floor(Math.random() * imageSources.length)]],
        tensanpham: 'GPT-0',
        gianiemyet: '200.000',
        giakhuyenmai: '150.000',
        level: <Rating name="read-only" value={1} readOnly />,
        tags: 'tagTest',
        soluongmua: '100',
        tongdoanhthu: '300.000',
        titrongdoanthu: '20%',
        mota: 'Mo Ta',
        detail: "12334"
    },
    {
        id: generateIdCode(),
        danhmuc: 'Học máy',
        anh: [imageSources[Math.floor(Math.random() * imageSources.length)]],
        tensanpham: 'GPT-0',
        gianiemyet: '200.000',
        giakhuyenmai: '150.000',
        level: <Rating name="read-only" value={2} readOnly />,
        tags: 'tagTest',
        soluongmua: '100',
        tongdoanhthu: '300.000',
        titrongdoanthu: '20%',
        mota: 'Mo Ta',
        detail: "12334"
    },
    {
        id: generateIdCode(),
        danhmuc: 'Học máy',
        anh: [imageSources[Math.floor(Math.random() * imageSources.length)]],
        tensanpham: 'GPT-0',
        gianiemyet: '200.000',
        giakhuyenmai: '150.000',
        level: <Rating name="read-only" value={5} readOnly />,
        tags: 'tagTest',
        soluongmua: '100',
        tongdoanhthu: '300.000',
        titrongdoanthu: '20%',
        mota: 'Mo Ta',
        detail: "12334"
    },

]

export default ProductTable;