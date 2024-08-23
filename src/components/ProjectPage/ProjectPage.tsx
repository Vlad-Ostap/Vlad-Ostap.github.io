import { useParams } from 'react-router-dom';
import { ProjectData } from '../projectData';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>();
    const project = ProjectData.find(project => project.id === Number(id));

    return (
        <div className='container'>
            {
                project ? 
                <div className='project__page'>
                    <h1 className='project__name'>{project.title}</h1>
                    <img className='project__img' src={project.img} alt="" />
                    <p className='project__skills'>Skills: {project.skills}</p>
                    <a className='github__btn' href="https://github.com/QuantumMooncake" target='__blank'>
                        <svg className='github__btn__img'>
                            <use href='#github' style={{ fill: 'black' }}></use>
                        </svg>
                        <p>Github repo</p>
                    </a>
                </div> : 
                <h1 className='error__message'>The project does not exist</h1>
            }
        </div>
    )
}

export default ProjectPage;