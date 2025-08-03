import './Home.css';

const Home = () => {
    return (

        <div className='home'>
            <div className='header'>
                <div className='container'>
                    <h1 className='header__title'>
                        <strong>Hi, my name is <span>Vladislav</span>, a frontend developer</strong>
                    </h1>
                    <h1 className='header__text'>with a passion for learning and creating.</h1>
                </div>
            </div>
            <section className='skills'>
                <div className='container'>
                    <div className='skills__content'>
                        <div className='skills__frontend'>
                            <h1>Frontend</h1>
                            <p>Next.js, React.js, Redux, NextAuth, JavaScript, TypeScript, React Router DOM, HTML, CSS</p>
                        </div>
                        <div className='skills__backend'>
                            <h1>Backend</h1>
                            <p>Prisma (ORM), PostgreSQL, Node.js, Express</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home;