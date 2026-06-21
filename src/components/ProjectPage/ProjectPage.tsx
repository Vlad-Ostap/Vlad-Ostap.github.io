import { useParams } from 'react-router-dom';
import { ProjectData } from '../projectData';
import './ProjectPage.css';

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>();

    const project = ProjectData.find(project => project.id === Number(id));

    if (!project) {
        return (
            <div className='container'>
                <h1 className='error__message'>
                    The project does not exist
                </h1>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='project__page'>
                <h1 className='project__name'>
                    {project.title}
                </h1>

                <img
                    className='project__img'
                    src={project.img}
                    alt={project.title}
                />

                <div className='project__info'>
                    <h2 className='project__section-title'>
                        Technologies
                    </h2>

                    <div className='project__tech'>
                        {project.skills.map(skill => (
                            <span
                                key={skill}
                                className='project__tech-tag'
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <h2 className='project__section-title'>
                        About the project
                    </h2>

                    <p className='project__description'>
                        {project.description}
                    </p>
                </div>

                <div className='projects__links'>
                    {project.githubLink && (
                        <a
                            className='link__btn'
                            href={project.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <svg className='link__btn__img'>
                                <use href='#github'></use>
                            </svg>

                            <span>GitHub Repo</span>
                        </a>
                    )}

                    {project.visitLink && (
                        <a
                            className='link__btn'
                            href={project.visitLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <svg className='link__btn__img'>
                                <use href='#visit-site'></use>
                            </svg>

                            <span>Visit site</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;