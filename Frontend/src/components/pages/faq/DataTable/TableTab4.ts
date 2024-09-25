import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';

interface ItemTable4 {
    images: string;
    modelName: string;
    modelLocal: string;
    creationDate: Date;
    trainedTokens: string;
    idCode: string;
}

const generateIdCode = (modelName: string) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const modelPrefix = modelName.replace(/\s/g, '').slice(0, 3).toUpperCase();
    return `${modelPrefix}-${randomNumber.toString().padStart(6, '0')}`;
};

const generateTrainedTokens = (min: number, max: number) => {
    const tokens = Math.floor(Math.random() * (max - min + 1000000000)) + min;
    return `${tokens}`;
};


const generateCreationDate = () => {
    const today = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 30);
    const randomDate = new Date(today.setDate(today.getDate() - randomDaysAgo));
    return randomDate;
}

const DataTable4: ItemTable4[] = [
    {
        images: img1,
        modelName: 'GPT-0',
        modelLocal: 'Chat GPT',
        creationDate: generateCreationDate(),
        trainedTokens: generateTrainedTokens(100, 200),
        idCode: generateIdCode('Model S')
    },
    {
        images: img2,
        modelName: 'GPT-1',
        modelLocal: 'Chat GPT 1',
        creationDate: generateCreationDate(),
        trainedTokens: generateTrainedTokens(150, 250),
        idCode: generateIdCode('Mustang')
    },
    {
        images: img3,
        modelName: 'GPT-2',
        modelLocal: 'Chat GPT 2',
        creationDate: generateCreationDate(),
        trainedTokens: generateTrainedTokens(120, 220),
        idCode: generateIdCode('Corolla')
    },
    {
        images: img4,
        modelName: 'GPT-3',
        modelLocal: 'Chat GPT 3',
        creationDate: generateCreationDate(),
        trainedTokens: generateTrainedTokens(130, 230),
        idCode: generateIdCode('i8')
    },
    {
        images: img5,
        modelName: 'GPT-4',
        modelLocal: 'Chat GPT 4',
        creationDate: generateCreationDate(),
        trainedTokens: generateTrainedTokens(140, 240),
        idCode: generateIdCode('Civic')
    }
];

export default DataTable4;
