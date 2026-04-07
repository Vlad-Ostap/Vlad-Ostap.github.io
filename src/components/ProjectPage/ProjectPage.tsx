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
                        <div className='project__info'>
                            <p className='project__skills'>Skills: {project.skills}</p>
                            <p className='project__description'>Description: {project.description}</p>
                        </div>
                        <div className='projects__links'>
                            <a className='link__btn github' href={`${project.githubLink}`} target='__blank'>
                                <svg className='link__btn__img'>
                                    <use href='#github' style={{ fill: 'black' }}></use>
                                </svg>
                                <p>Github repo</p>
                            </a>
                            <a className='link__btn visit' href={`${project.visitLink}`} target='__blank'>
                                <svg className='link__btn__img visit'>
                                    <use href='#visit-site' style={{ fill: 'black' }}></use>
                                </svg>
                                <p>Visit site</p>
                            </a>
                        </div>
                    </div> :
                    <h1 className='error__message'>The project does not exist</h1>
            }
        </div>
    )
}

export default ProjectPage;