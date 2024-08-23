import { ProjectData } from '../projectData';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    return (
        <div className='container'>
            <div className='projects'>
                <h1 className='projects__title'>Projects</h1>
                {
                    ProjectData.map((element) => {
                        return <Project key={element.id} {...element} />
                    })
                }
            </div>
        </div>

    )
}

export default Projects;