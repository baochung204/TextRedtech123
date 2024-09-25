

interface ItemTable3 {
    fileName: string;
    datas: string;
    creationDate: Date;
    formats: string;
    idCode: string;
    isCheck: boolean
}



const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `#${randomNumber.toString().padStart(6, '0')}`;
}


const DataTable3: ItemTable3[] = [
    {
        fileName: 'file1.pdf',
        datas: '123Kb',
        creationDate: new Date('2024-09-01'),
        formats: 'PDF',
        idCode: generateIdCode(),
        isCheck: true
    },
    {
        fileName: 'file2.docx',
        datas: '453Kb',
        creationDate: new Date('2024-09-02'),
        formats: 'DOCX',
        idCode: generateIdCode(),
        isCheck: false
    },
    {
        fileName: 'file3.xlsx',
        datas: '863Kb',
        creationDate: new Date('2024-09-03'),
        formats: 'XLSX',
        idCode: generateIdCode(),
        isCheck: true
    },
    {
        fileName: 'file4.pptx',
        datas: '533Kb',
        creationDate: new Date('2024-09-04'),
        formats: 'PPTX',
        idCode: generateIdCode(),
        isCheck: false
    },
    {
        fileName: 'file5.txt',
        datas: '243Kb',
        creationDate: new Date('2024-09-05'),
        formats: 'TXT',
        idCode: generateIdCode(),
        isCheck: true
    }
];

export default DataTable3;
