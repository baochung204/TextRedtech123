import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

interface ItemTable3 {
    images: string;
    id: string;
    fullName: string;
    election: string;
    fileName: string;
    datas: string;
    creationDate: Date;
    formats: string;
    idCode: string;
}

// Hàm chọn ngẫu nhiên một ảnh từ danh sách ảnh
const getRandomImage = (): string => {
    const images = [img1, img2, img3, img4, img5];
    return images[Math.floor(Math.random() * images.length)];
};

const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
    return `#${randomNumber.toString().padStart(6, '0')}`; // Pad with leading zeros if necessary
}


const DataTable3: ItemTable3[] = [
    {
        images: getRandomImage(),
        id: '1',
        fullName: 'Nguyễn Văn A',
        election: 'General Election',
        fileName: 'file1.pdf',
        datas: 'Sample data 1',
        creationDate: new Date('2024-09-01'),
        formats: 'PDF',
        idCode: generateIdCode()
    },
    {
        images: getRandomImage(),
        id: '2',
        fullName: 'Trần Thị B',
        election: 'Local Election',
        fileName: 'file2.docx',
        datas: 'Sample data 2',
        creationDate: new Date('2024-09-02'),
        formats: 'DOCX',
        idCode: generateIdCode()
    },
    {
        images: getRandomImage(),
        id: '3',
        fullName: 'Lê Văn C',
        election: 'Presidential Election',
        fileName: 'file3.xlsx',
        datas: 'Sample data 3',
        creationDate: new Date('2024-09-03'),
        formats: 'XLSX',
        idCode: generateIdCode()
    },
    {
        images: getRandomImage(),
        id: '4',
        fullName: 'Hoàng Thị D',
        election: 'State Election',
        fileName: 'file4.pptx',
        datas: 'Sample data 4',
        creationDate: new Date('2024-09-04'),
        formats: 'PPTX',
        idCode: generateIdCode()
    },
    {
        images: getRandomImage(),
        id: '5',
        fullName: 'Nguyễn Thị E',
        election: 'Municipal Election',
        fileName: 'file5.txt',
        datas: 'Sample data 5',
        creationDate: new Date('2024-09-05'),
        formats: 'TXT',
        idCode: generateIdCode()
    }
];

export default DataTable3;
