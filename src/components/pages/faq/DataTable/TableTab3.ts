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

const getRandomImage = (): string => {
    const images = [img1, img2, img3, img4, img5];
    return images[Math.floor(Math.random() * images.length)];
};

const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `#${randomNumber.toString().padStart(6, '0')}`;
}


const DataTable3: ItemTable3[] = [
    {
        images: getRandomImage(),
        id: '1',
        fullName: 'Nguyễn Văn A',
        election: 'General Election',
        fileName: 'file1.pdf',
        datas: '123Kb',
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
        datas: '453Kb',
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
        datas: '863Kb',
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
        datas: '533Kb',
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
        datas: '243Kb',
        creationDate: new Date('2024-09-05'),
        formats: 'TXT',
        idCode: generateIdCode()
    }
];

export default DataTable3;
