import React from 'react'
import { FaJava } from 'react-icons/fa';
import { SiCsharp, SiFirebase, SiMongodb, SiMysql, SiPhp, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Dots from './Dots';
const Skills = () => {
    return (
        <div className='w-full mt-16'>
            <div className='w-full'>
                <h1 className='text-lg md:text-xl font-bold'>Languages and Tools</h1>
                <div className='w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 justify-start items-center gap-10 mt-10'>
                    <SiCsharp className='inline' size={40} />
                    <SiFirebase className='inline' size={40} />
                    <FaJava className='inline' size={40} />
                    <SiTypescript className='inline' size={40} />
                    <SiMongodb className='inline' size={40} />
                    <SiMysql className='inline' size={40} />
                    <SiPhp className='inline' size={40} />
                    <SiPostman className='inline' size={40} />
                    <SiPython className='inline' size={40} />
                    <SiReact className='inline' size={40} />
                    <SiTailwindcss className='inline' size={40} />
                </div>
            </div>
            <Dots/>
        </div>
    )
}

export default Skills