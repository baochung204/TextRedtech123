
interface RowProps {
    titleurl: string;
    descriptionurl: string;
    url: string;
    idCode: string
}

const generateIdCode = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); 
    return `#${randomNumber.toString().padStart(6, '0')}`; 
}

const DataRow: RowProps[] = [
    {
        titleurl: 'Amazing Landscape',
        descriptionurl: 'Discover the beauty of nature with this stunning landscape.',
        url: 'https://example.com/landscape', 
        idCode: generateIdCode()
    },
    {
        titleurl: 'City at Night',
        descriptionurl: 'Explore the vibrant city lights and nightlife.',
        url: 'https://example.com/city-night',
        idCode: generateIdCode()
    },
    {
        titleurl: 'Mountain Adventures',
        descriptionurl: 'Get ready for an adventure in the mountains.',
        url: 'https://example.com/mountain-adventures',
        idCode: generateIdCode()
    },
    {
        titleurl: 'Tropical Beach',
        descriptionurl: 'Relax on the warm sands of a tropical paradise.',
        url: 'https://example.com/tropical-beach',
        idCode: generateIdCode()
    },
    {
        titleurl: 'Historic Castle',
        descriptionurl: 'Step back in time with a visit to this historic castle.',
        url: 'https://example.com/historic-castle',
        idCode: generateIdCode()
    }
];

export default DataRow;