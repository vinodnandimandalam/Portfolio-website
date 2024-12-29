import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'


const getLink = (Icon, redirectUrl) => {
    return <a href={redirectUrl} target="_blank" rel="noopener noreferrer">{<Icon />}</a>
}

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>

            <div className='flex flex-shrink-0 items-center'>
                <img className="mx-2" src={logo} height={60} width={60} alt='logo' />
            </div>

            <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
                {getLink(FaLinkedin, `https://www.linkedin.com/in/vinod-nandimandalam-09a7661b3`)}
                {getLink(FaGithub, `https://github.com/vinodnandimandalam`)}
                {getLink(FaInstagram, `https://www.instagram.com/vinod_nandimandalam/profilecard/?igsh=MTNhZHd0ZWo0ZmZtZA==`)}
            </div>

        </nav>
    )
}

export default Navbar