import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
                <div className='container'>
                    <a href="https://www.linkedin.com/in/vladislav-ostapiuk" target='_blank'>
                        <svg className='linkedin__img'>
                            <use href='#linkedin'></use>
                        </svg>
                    </a>

                    <a href="https://github.com/QuantumMooncake" target='_blank'>
                        <svg className='github__img'>
                            <use href='#github'></use>
                        </svg>
                    </a>
                </div>
            </footer>
    )
}

export default Footer;