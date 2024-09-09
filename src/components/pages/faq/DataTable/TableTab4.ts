import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

interface ItemTable4 {
    id: string;
    fullName: string;
    election: string;
    images: string;
    modelName: string;
    modelLocal: string;
    creationDate: Date;
    trainedTokens: string;
}

const DataTable4: ItemTable4[] = [
    {
        id: '1',
        fullName: 'John Doe',
        election: 'Candidate A',
        images: img1,
        modelName: 'Model X1',
        modelLocal: 'Local Model X1',
        creationDate: new Date('2024-08-15'),
        trainedTokens: '150K'
    },
    {
        id: '2',
        fullName: 'Jane Smith',
        election: 'Candidate B',
        images: img2,
        modelName: 'Model Y2',
        modelLocal: 'Local Model Y2',
        creationDate: new Date('2024-08-20'),
        trainedTokens: '200K'
    },
    {
        id: '3',
        fullName: 'Emily Johnson',
        election: 'Candidate C',
        images: img3,
        modelName: 'Model Z3',
        modelLocal: 'Local Model Z3',
        creationDate: new Date('2024-09-01'),
        trainedTokens: '180K'
    },
    {
        id: '4',
        fullName: 'Michael Brown',
        election: 'Candidate D',
        images: img4,
        modelName: 'Model A4',
        modelLocal: 'Local Model A4',
        creationDate: new Date('2024-09-05'),
        trainedTokens: '220K'
    },
    {
        id: '5',
        fullName: 'Sarah Davis',
        election: 'Candidate E',
        images: img5,
        modelName: 'Model B5',
        modelLocal: 'Local Model B5',
        creationDate: new Date('2024-09-10'),
        trainedTokens: '170K'
    }
];

export default DataTable4;
