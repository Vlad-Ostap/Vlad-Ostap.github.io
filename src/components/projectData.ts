import RoyalHeavenImg from '../assets/projects-img/Royal Heaven.png'
import ClothingStoreImg from '../assets/projects-img/Clothing store.png';
import FlexiCubeImg from '../assets/projects-img/FlexiCube.png';
import GamingWebsiteImg from '../assets/projects-img/Gaming website.png'
import SnowElbrusImg from '../assets/projects-img/SnowElbrus.png'

export interface ProjectInterface {
    id: number,
    img: string,
    title: string,
    skills: string,
    description: string,
    githubLink: string,
    visitLink: string,
}

export const ProjectData: ProjectInterface[] = [
    {
        id: 1,
        img: SnowElbrusImg,
        title: 'SnowElbrus',
        skills: 'HTML, CSS, JavaScript, SEO Optimization, Splide.js',
        description: 'A modern ski instructor website designed for lesson booking on Elbrus. Developed as a custom project for a client. Includes responsive UI, interactive image gallery with Splide.js, pricing cards, and quick booking via Telegram and Google Forms. Built with a focus on performance, accessibility, and SEO.',
        githubLink: 'https://github.com/Vlad-Ostap/Portfolio-projects/tree/main/SnowElbrus',
        visitLink: 'https://snowelbrus.ru',
    },
    {
        id: 2,
        img: RoyalHeavenImg,
        title: 'RoyalHeaven',
        skills: 'Next.js (TypeScript), Prisma, PostgreSQL, NextAuth, HTML, CSS',
        description: 'A hotel booking web service built with Next.js and TypeScript, featuring a PostgreSQL database managed via Prisma ORM. Includes authentication with NextAuth, secure route handling, and a responsive UI for browsing and booking rooms.',
        githubLink: 'https://github.com/Vlad-Ostap/Diploma-project',
        visitLink: 'https://ostap.uk',
    },
    {
        id: 3,
        img: ClothingStoreImg,
        title: 'ClothingStore',
        skills: 'React.js, Redux Toolkit, React Router DOM, HTML, CSS',
        description: 'A clothing store built with React.js. Implements state management using Redux Toolkit and client-side routing with React Router DOM. Features product catalog browsing, filtering, and a responsive design.',
        githubLink: 'https://github.com/Vlad-Ostap/Portfolio-projects/tree/main/ClothingStore',
        visitLink: 'https://app.ostap.uk/ClothingStore',
    },
    {
        id: 4,
        img: FlexiCubeImg,
        title: 'FlexiCube',
        skills: 'JavaScript, HTML, CSS',
        description: 'A simple static website developed using vanilla JavaScript, HTML, and CSS. Showcases animations and responsive design.',
        githubLink: 'https://github.com/Vlad-Ostap/Portfolio-projects/tree/main/FlexiCube',
        visitLink: 'https://app.ostap.uk/FlexiCube',
    },
    {
        id: 5,
        img: GamingWebsiteImg,
        title: 'GamingSite',
        skills: 'HTML, CSS',
        description: 'A simple static gaming website designed with HTML and CSS, featuring a clean layout and responsive design to present gaming-related content effectively.',
        githubLink: 'https://github.com/Vlad-Ostap/Portfolio-projects/tree/main/GamingSite',
        visitLink: 'https://app.ostap.uk/GamingSite',
    },
]