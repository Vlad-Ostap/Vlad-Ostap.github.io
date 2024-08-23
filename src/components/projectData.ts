import ClothingStoreImg from '../assets/projects-img/Clothing store.png';
import FlexiCubeImg from '../assets/projects-img/FlexiCube.png';
import BookLibraryImg from '../assets/projects-img/Book library.png';
import TodoListImg from '../assets/projects-img/Todo list.png';
import GamingWebsiteImg from '../assets/projects-img/Gaming website.png'

export interface ProjectInterface {
    id: number,
    img: string,
    title: string,
    skills: string,
}

export const ProjectData: ProjectInterface[] = [
    {
        id: 1,
        img: ClothingStoreImg,
        title: 'Cloting store',
        skills: 'ReactJS, redux-toolkit, react-router-dom, Node.js, HTML, CSS',
    },
    {
        id: 2,
        img: FlexiCubeImg,
        title: 'FlexiCube',
        skills: 'JavaScript, HTML, CSS',
    },
    {
        id: 3,
        img: BookLibraryImg,
        title: 'Book library',
        skills: 'ReactJS, redux-toolkit, react-router-dom, Node.js, HTML, CSS',
    },
    {
        id: 4,
        img: TodoListImg,
        title: 'Todo list',
        skills: 'ReactJS, HTML, CSS Modules',
    },
    {
        id: 5,
        img: GamingWebsiteImg,
        title: 'Gaming website',
        skills: 'HTML, CSS',
    },
]