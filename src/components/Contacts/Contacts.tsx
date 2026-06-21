import {
    FaGithub,
    FaLinkedin,
    FaTelegramPlane,
    FaEnvelope,
} from 'react-icons/fa';

import './Contacts.css';

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className='container'>
                <h1 className='contacts__title'>Get In Touch</h1>

                <p className='contacts__subtitle'>
                    I'm always open to discussing new projects, freelance opportunities,
                    or full-time positions.
                </p>

                <div className='contacts__grid'>
                    <div className='contact-card'>
                        <h2><FaEnvelope /> Email</h2>

                        <a
                            href='mailto:vladostap2003@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            vladostap2003@gmail.com
                        </a>
                    </div>

                    <div className='contact-card'>
                        <h2><FaTelegramPlane /> Telegram</h2>

                        <a
                            href='https://t.me/vladerron'
                            target='_blank'
                            rel='noreferrer'
                        >
                            @vladerron
                        </a>
                    </div>

                    <div className='contact-card'>
                        <h2><FaLinkedin /> LinkedIn</h2>

                        <a
                            href='https://linkedin.com/in/vladislav-ostapiuk'
                            target='_blank'
                            rel='noreferrer'
                        >
                            View Profile
                        </a>
                    </div>

                    <div className='contact-card'>
                        <h2><FaGithub /> GitHub</h2>

                        <a
                            href='https://github.com/Vlad-Ostap'
                            target='_blank'
                            rel='noreferrer'
                        >
                            github.com/Vlad-Ostap
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;