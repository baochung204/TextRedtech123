import u1 from 'src/assets/images/profile/user-1.jpg';
import u10 from 'src/assets/images/profile/user-10.jpg';
import u2 from 'src/assets/images/profile/user-2.jpg';
import u3 from 'src/assets/images/profile/user-3.jpg';
import u4 from 'src/assets/images/profile/user-4.jpg';
import u5 from 'src/assets/images/profile/user-5.jpg';
import u6 from 'src/assets/images/profile/user-6.jpg';
import u7 from 'src/assets/images/profile/user-7.jpg';
import u8 from 'src/assets/images/profile/user-8.jpg';
import u9 from 'src/assets/images/profile/user-9.jpg';

interface DataTable5 {
    images: string;
    imgName: string;
    createDate: string;
    idCode: string,
    title: string,
    moTa: string
}

const imageSources = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

const generateRandomImageName = () => {
    const imageNames = ['image1.jpg', 'image2.png', 'image3.jpg', 'image4.png', 'image5.jpg', 'image6.png', 'image7.jpg', 'image8.png', 'image9.jpg', 'image10.png'];
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    return imageNames[randomIndex];
};

const generateRandomDate = () => {
    const start = new Date(2023, 0, 1); 
    const end = new Date(); 
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0]; 
};
const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); 
    return `#${randomNumber.toString().padStart(6, '0')}`; 
}
const DataTable5: DataTable5[] = Array.from({ length: 20 }, (_, index) => ({
    images: imageSources[Math.floor(Math.random() * imageSources.length)],
    imgName: generateRandomImageName(),
    createDate: generateRandomDate(),
    idCode: generateIdCode(),
    title: 'Ảnh test',
    moTa: 'Mô tả'
}));

export default DataTable5;