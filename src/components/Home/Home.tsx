import './Home.css';

const Home = () => {
    return (

        <div className='home'>
            <div className='header'>
                <div className='container'>
                    <h1 className='header__title'>
                        <strong>Hi, I'm <span>Vladislav</span>, a Web Developer</strong>
                    </h1>
                    <h1 className='header__text'>building modern and user-focused web applications.</h1>
                </div>
            </div>
            <section className='skills'>
                <div className='container'>
                    <div className='skills__content'>
                        <div className='skills__frontend'>
                            <h1>Frontend</h1>
                            <p>Next.js, React, Redux, NextAuth, JavaScript, TypeScript, HTML, CSS</p>
                        </div>
                        <div className='skills__backend'>
                            <h1>Backend</h1>
                            <p>Node.js, Express, PostgreSQL, Prisma</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home;