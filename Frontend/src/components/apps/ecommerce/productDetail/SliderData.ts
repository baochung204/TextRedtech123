import img1 from 'src/assets/images/products/s25.jpg';
import img2 from 'src/assets/images/products/s24.jpg';
import img3 from 'src/assets/images/products/s25.jpg';
import img4 from 'src/assets/images/products/s20.jpg';
import img5 from 'src/assets/images/products/s21.jpg';
import img6 from 'src/assets/images/products/s22.jpg';
import img7 from 'src/assets/images/products/s23.jpg';

interface DataType {
  id: number;
  imgPath: string;
}

const SliderData: DataType[] = [
  {
    imgPath: img1,
    id: 1,
  },
  {
    imgPath: img2,
    id: 2,
  },
  {
    imgPath: img3,
    id: 3,
  },
  {
    imgPath: img4,
    id: 4,
  },
  {
    imgPath: img5,
    id: 5,
  },
  {
    imgPath: img6,
    id: 6,
  },
  {
    imgPath: img7,
    id: 7,
  },
];

export default SliderData;
