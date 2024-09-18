import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

interface RowProps {
    images: string;
    id: string;
    titleurl: string;
    descriptionurl: string;
    url: string;
    fullName: string;
    electron: string;
    idCode: string
}

const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
    return `#${randomNumber.toString().padStart(6, '0')}`; // Pad with leading zeros if necessary
}

const DataRow: RowProps[] = [
    {
        images: img1,
        id: '1',
        titleurl: 'Amazing Landscape',
        descriptionurl: 'Discover the beauty of nature with this stunning landscape.',
        url: 'https://example.com/landscape',
        fullName: 'John Doe',
        electron: 'Electron enthusiast',
        idCode: generateIdCode()
    },
    {
        images: img2,
        id: '2',
        titleurl: 'City at Night',
        descriptionurl: 'Explore the vibrant city lights and nightlife.',
        url: 'https://example.com/city-night',
        fullName: 'Jane Smith',
        electron: 'Electron engineer',
        idCode: generateIdCode()
    },
    {
        images: img3,
        id: '3',
        titleurl: 'Mountain Adventures',
        descriptionurl: 'Get ready for an adventure in the mountains.',
        url: 'https://example.com/mountain-adventures',
        fullName: 'Michael Johnson',
        electron: 'Electron developer',
        idCode: generateIdCode()
    },
    {
        images: img4,
        id: '4',
        titleurl: 'Tropical Beach',
        descriptionurl: 'Relax on the warm sands of a tropical paradise.',
        url: 'https://example.com/tropical-beach',
        fullName: 'Emily Davis',
        electron: 'Electron architect',
        idCode: generateIdCode()
    },
    {
        images: img5,
        id: '5',
        titleurl: 'Historic Castle',
        descriptionurl: 'Step back in time with a visit to this historic castle.',
        url: 'https://example.com/historic-castle',
        fullName: 'William Brown',
        electron: 'Electron expert',
        idCode: generateIdCode()
    }
];

export default DataRow;