import u1 from 'src/assets/images/profile/user-1.jpg';
import u2 from 'src/assets/images/profile/user-2.jpg';
import u3 from 'src/assets/images/profile/user-3.jpg';
import u4 from 'src/assets/images/profile/user-4.jpg';
import u5 from 'src/assets/images/profile/user-5.jpg';
import u6 from 'src/assets/images/profile/user-6.jpg';
import u7 from 'src/assets/images/profile/user-7.jpg';
import u8 from 'src/assets/images/profile/user-8.jpg';
import u9 from 'src/assets/images/profile/user-9.jpg';
import u10 from 'src/assets/images/profile/user-10.jpg';


interface BlogTable {
    id: string;
    createdAt: Date;
    avt: string
    title: string;
    author: string
    tags: string;
    url: string
    description: string
    content: string
    pricePoint: number;
    status: string;
    view: number
    like: number
}

const images = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

const BlogTable: BlogTable[] = [
    {
        id: '1',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'Bún bò huế',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
    {
        id: '2',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'Frontend',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
    {
        id: '3',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
    {
        id: '4',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
    {
        id: '5',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã ẩn",
        view: 200,
        like: 150
    },
    {
        id: '6',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Chưa duyệt",
        view: 200,
        like: 150
    },
    {
        id: '7',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã ẩn",
        view: 200,
        like: 150
    },
    {
        id: '8',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'Web Development',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Chưa duyệt",
        view: 200,
        like: 150
    },
    {
        id: '9',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'Web Development',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
    {
        id: '10',
        createdAt: new Date('2023-11-22'),
        avt: getRandomImage(),
        title: 'Những bí quyết đầu tiên khi phát triển một ứng dụng web',
        author: 'Nguyễn Thùy Dung',
        tags: 'JavaScript',
        url: 'https://example.com/blog/web-development-1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada arcu. Nulla facil',
        content: "Kịch tính",
        pricePoint: 25.99,
        status: "Đã đăng",
        view: 200,
        like: 150
    },
];

export default BlogTable;