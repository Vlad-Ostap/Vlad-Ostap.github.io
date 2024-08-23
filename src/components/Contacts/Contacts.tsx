import './Contacts.css'

const Contatcs = () => {
    return (
        <div className='contacts'>
            <div className='container'>
                <h1 className='title'>Contacts</h1>
                <ul className='contacts__list'>
                    <li className='contacts__list__item'>
                        <h2 className='title-2'>Location</h2>
                        <p>Georgia, Batumi</p>
                    </li>
                    <li className='contacts__list__item'>
                        <h2 className='title-2'>Telegram / WhatsApp / Viber</h2>
                        <p>+995 591 17 11 39</p>
                    </li>
                    <li className='contacts__list__itemtitle-2'>
                        <h2 className='title-2'>Email</h2>
                        <p>
                            <a href='mailto:vladostap2003@gmail.com'>vladostap2003@gmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contatcs;