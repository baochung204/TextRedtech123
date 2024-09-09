import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

interface ItemTab1 {
    images: string;
    id: string;
    strategy: string;
    strategyLevel: string;
    strategyID: string;
}


const strategyNames = [
    'Growth Strategy',
    'Cost Leadership',
    'Differentiation',
    'Market Penetration',
    'Product Development',
    'Innovation Strategy',
    'Focus Strategy',
    'Diversification',
    'Market Expansion',
    'Strategic Alliances'
];




const strategyLevels = ['level1', 'level2', 'level3', 'level4', 'level5'];

const getRandomLevel = () => strategyLevels[Math.floor(Math.random() * strategyLevels.length)];
const getRandomID = () => `#SI${Math.random().toString(36).substring(2, 5).toUpperCase()}`;


const imagesArray = [img1, img2, img3, img4, img5];
const DataTab1: ItemTab1[] = Array.from({ length: 20 }, (_, index) => ({
    images: imagesArray[index % imagesArray.length],
    id: (index + 1).toString(),
    strategy: strategyNames[index % strategyNames.length],
    strategyLevel: getRandomLevel(),
    strategyID: getRandomID(),
}));




export default DataTab1;
