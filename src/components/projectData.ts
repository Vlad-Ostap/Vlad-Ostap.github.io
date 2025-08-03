import RoyalHeavenImg from '../assets/projects-img/Royal Heaven.png'
import ClothingStoreImg from '../assets/projects-img/Clothing store.png';
import FlexiCubeImg from '../assets/projects-img/FlexiCube.png';
import GamingWebsiteImg from '../assets/projects-img/Gaming website.png'
export interface ProjectInterface {
    id: number,
    img: string,
    title: string,
    skills: string,
    description: string,
}

export const ProjectData: ProjectInterface[] = [
    {
        id: 1,
        img: RoyalHeavenImg,
        title: 'RoyalHeaven',
        skills: 'Next.js (TypeScript), Prisma, PostgreSQL, NextAuth, HTML, CSS',
        description: 'A hotel booking web service built with Next.js and TypeScript, featuring a PostgreSQL database managed via Prisma ORM. Includes authentication with NextAuth, secure route handling, and a responsive UI for browsing and booking rooms.',
    },
    {
        id: 2,
        img: ClothingStoreImg,
        title: 'ClothingStore',
        skills: 'React.js, Redux Toolkit, React Router DOM, HTML, CSS',
        description: 'A clothing store built with React.js. Implements state management using Redux Toolkit and client-side routing with React Router DOM. Features product catalog browsing, filtering, and a responsive design.',
    },
    {
        id: 3,
        img: FlexiCubeImg,
        title: 'FlexiCube',
        skills: 'JavaScript, HTML, CSS',
        description: 'A simple static website developed using vanilla JavaScript, HTML, and CSS. Showcases animations and responsive design.',
    },
    {
        id: 4,
        img: GamingWebsiteImg,
        title: 'GamingSite',
        skills: 'HTML, CSS',
        description: 'A simple static gaming website designed with HTML and CSS, featuring a clean layout and responsive design to present gaming-related content effectively.',
    },
]