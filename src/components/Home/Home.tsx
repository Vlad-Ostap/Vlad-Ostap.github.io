import './Home.css';

const Home = () => {
    return (

        <div className='home'>
            <div className='header'>
                <div className='container'>
                    <h1 className='header__title'>
                        <strong>Hi, I'm <span className='name'>Vladislav</span>, a <span className='role'>Web Developer</span></strong>
                    </h1>
                    <h1 className='header__text'>building modern and user-focused web applications.</h1>
                </div>
            </div>
            <section className='skills'>
                <div className='container'>
                    <h2 className='skills__title'>Tech Stack</h2>

                    <div className='skills__content'>
                        <div className='skill-card'>
                            <h3>Frontend</h3>

                            <div className='skill-tags'>
                                <span>Next.js</span>
                                <span>React</span>
                                <span>Redux</span>
                                <span>TypeScript</span>
                                <span>JavaScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </div>

                        <div className='skill-card'>
                            <h3>Backend</h3>

                            <div className='skill-tags'>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>Prisma</span>
                                <span>REST API</span>
                            </div>
                        </div>

                        <div className='skill-card'>
                            <h3>Tools & Services</h3>

                            <div className='skill-tags'>
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>Sanity CMS</span>
                                <span>Vercel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;