import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProjectInterface } from '../projectData';
import './Project.css';

const Project: FC<ProjectInterface> = ({ id, img, title }) => {
    return (
        <Link to={`/project/${id}`}>
            <div className='project'>
                <img className='project__image' src={img} alt="" />
                <h2 className='project__title'>{title}</h2>
            </div>
        </Link>
    )
}

export default Project;