import img1 from 'src/assets/images/badge/badge.png';
import img2 from 'src/assets/images/badge/badge2.png';
import img3 from 'src/assets/images/badge/badge3.png';


interface ItemTab2 {
    images: string;
    id: string;
    functions: string;
    functionsLevel: string;
    functionsID: string;
    isActive: boolean
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
const imagesArray = [img1, img2, img3, img1, img2, img3, img1, img1, img2, img3];

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
        isActive: Math.random() < 0.5
    };
});

export default DataTab2;
