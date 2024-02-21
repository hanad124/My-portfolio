import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='w-full mt-16'>
            <div className='w-full'>
                <h1 className='text-lg md:text-xl font-bold'>Connect with me</h1>
                <div className='w-full space-y-4 mt-10'>
                    <p className='space-x-2 tracking-widest'>
                        <span className='text-lg font-medium'>Email</span> :
                        <Link to="https://mailto:miirshe@gmail.com" target='_blank'  className='text-base'> miirshe@gmail.com</Link>
                    </p>
                    <p className='space-x-2 tracking-widest'>
                        <span className='text-lg font-medium'>Phone</span> :
                        <Link to='https://Wa.me/+252618302314' target='_blank' className='text-base'>252618302314</Link>
                    </p>
                </div>
                <div className='w-full flex flex-row justify-start items-center gap-5 mt-5'>
                    <Link to='https://github.com/Miirshe' target='_blank'> <FaGithub size={20} /> </Link>
                    <Link to='https://twitter.com/miirshe' target='_blank'> <FaTwitter size={20} /> </Link>
                    <Link to='https://www.linkedin.com/in/miirshe' target='_blank'> <FaLinkedin size={20} /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact