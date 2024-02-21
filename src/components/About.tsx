import React from 'react'
import Dots from './Dots'

const About = () => {
    return (
        <div className='w-full mt-16'>
            <div className='w-full'>
                <h1 className='text-lg md:text-xl font-bold'>About Me</h1>
                <p className='w-full text-base tracking-widest leading-10 text-justify mt-5'>I am a MERN stack developer. Proficient in both front-end and back-end development,
                    I possess a deep understanding of web technologies and adhere to best practices. Detail-oriented and collaborative.
                    Committed to continuous learning, I stay abreast of the latest industry trends to enhance my skills and capabilities.</p>
            </div>
            <Dots/>
        </div>
    )
}

export default About