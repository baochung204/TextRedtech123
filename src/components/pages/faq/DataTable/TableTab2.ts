import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';


interface ItemTab2 {
    images: string;
    id: string;
    functions: string;
    functionsLevel: string;
    functionsID: string;
}


const functionNames = [
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

const imagesArray = [img1, img2, img3, img4, img5];
const functionLevels = ['level1', 'level2', 'level3', 'level4', 'level5'];
const getRandomID = () => `#FC${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
const getRandomLevel = () => functionLevels[Math.floor(Math.random() * functionLevels.length)];

const DataTab2: ItemTab2[] = Array.from({ length: 20 }, (_, index) => ({
    images: imagesArray[index % imagesArray.length],
    id: (index + 1).toString(),
    functions: functionNames[index % functionNames.length],
    functionsLevel: getRandomLevel(),
    functionsID: getRandomID(),
}));


export default DataTab2;