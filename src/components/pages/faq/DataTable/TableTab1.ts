import img1 from 'src/assets/images/badge/badge.png';
import img2 from 'src/assets/images/badge/badge2.png';
import img3 from 'src/assets/images/badge/badge3.png';

interface ItemTab1 {
    images: string;
    id: string;
    strategy: string;
    strategyLevel: string;
    strategyID: string;
    isActive: boolean
}

const strategyNames = [
    'Tăng trưởng',
    'Lãnh đạo chi phí',
    'Khác biệt hóa',
    'Thâm nhập thị trường',
    'Phát triển sản phẩm',
    'Đổi mới',
    'Tập trung',
    'Đa dạng hóa',
    'Mở rộng thị trường',
    'Liên minh chiến lược'
];

const strategyLevels = ['Cấp 1', 'Cấp 2', 'Cấp 3', 'Cấp 4', 'Cấp 5', 'Cấp 6', 'Cấp 7', 'Cấp 8', 'Cấp 9', 'Cấp 10'];

const getImageForLevel = (level: string) => {
    const levelIndex = parseInt(level.replace('Cấp ', ''), 10);
    // Return image based on level
    return levelIndex >= 1 && levelIndex <= 10 ? imagesArray[levelIndex - 1] : img1;
}

const getRandomID = () => `#SI${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

const imagesArray = [img1, img2, img3, img1, img2, img3, img1, img1, img2, img3];
const DataTab1: ItemTab1[] = Array.from({ length: 20 }, (_, index) => {
    const level = strategyLevels[index % strategyLevels.length];
    return {
        images: getImageForLevel(level),
        id: (index + 1).toString(),
        strategy: strategyNames[index % strategyNames.length],
        strategyLevel: level,
        strategyID: getRandomID(),
        isActive: true
    };
});

export default DataTab1;
