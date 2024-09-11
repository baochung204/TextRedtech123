import img1 from 'src/assets/images/rank/rank1.png';
import img2 from 'src/assets/images/rank/rank2.png';
import img3 from 'src/assets/images/rank/rank3.png';
import img4 from 'src/assets/images/rank/rank4.png';
import img5 from 'src/assets/images/rank/rank5.png';
import img6 from 'src/assets/images/rank/rank6.png';
import img7 from 'src/assets/images/rank/rank7.png';
import img8 from 'src/assets/images/rank/rank8.png';
import img9 from 'src/assets/images/rank/rank9.png';
import img10 from 'src/assets/images/rank/rank10.png';

interface ItemTab2 {
    images: string;
    id: string;
    functions: string;
    functionsLevel: string;
    functionsID: string;
}

const functionNames = [
    'Tăng trưởng thị trường',
    'Lãnh đạo chi phí',
    'Khác biệt hóa sản phẩm',
    'Thâm nhập thị trường',
    'Phát triển sản phẩm',
    'Chiến lược đổi mới',
    'Chiến lược tập trung',
    'Đa dạng hóa',
    'Mở rộng thị trường',
    'Liên minh chiến lược'
];

const functionLevels = ['Cấp 1', 'Cấp 2', 'Cấp 3', 'Cấp 4', 'Cấp 5', 'Cấp 6', 'Cấp 7', 'Cấp 8', 'Cấp 9', 'Cấp 10'];
const imagesArray = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

const getImageForLevel = (level: string) => {
    const levelIndex = parseInt(level.replace('Cấp ', ''), 10);
    // Return image based on level
    return levelIndex >= 1 && levelIndex <= 10 ? imagesArray[levelIndex - 1] : img1;
}

const getRandomID = () => `#FC${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

const DataTab2: ItemTab2[] = Array.from({ length: 20 }, (_, index) => {
    const level = functionLevels[index % functionLevels.length];
    return {
        images: getImageForLevel(level),
        id: (index + 1).toString(),
        functions: functionNames[index % functionNames.length],
        functionsLevel: level,
        functionsID: getRandomID(),
    };
});

export default DataTab2;
