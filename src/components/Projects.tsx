import React from 'react'
import Dots from './Dots'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='w-full mt-16'>
            <h1 className='text-lg md:text-xl font-bold'>Projects</h1>
            <div className='w-full space-y-5 mt-10'>
                <ul className='w-full space-y-2 list-disc list-inside'>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/sharafdin/yonode' target='_blank'>Yonode</Link>
                        <span> : is a Node.js toolkit that streamlines your workflow, enabling you to craft efficient server solutions rapidly.</span>
                    </li>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/sharafdin/markdown-master' target='_blank'>Markdown Master</Link>
                        <span> : Unleash the power of our pre-production extension, transforming your Markdown writing experience. Compose Markdown effortlessly with a user-friendly GUI, while enjoying real-time previewing. Generate files or seamlessly copy to platforms like GitHub. Stay tuned for the official release and revolutionize your Markdown workflow like never before.</span>
                    </li>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/WorkHubSo/WorkHubSo' target='_blank'>WorkHubSo</Link>
                        <span> : Connecting job seekers and employers in Somalia. Building a job search platform with features like profile creation, resume uploads, job alerts, and employer profiles. Providing career resources and industry insights.</span>
                    </li>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/JUST-4EVER/CAZA-MART' target='_blank'>CAZA-MART</Link>
                        <span> : is an open-source ecommerce platform built for modern businesses. It provides a comprehensive set of features and tools to help businesses establish and manage their online stores effectively.</span>
                    </li>


                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/Miirshe/doctor-appointment_app' target='_blank'>Doctor Appointment App</Link>
                        <span> : this is doctor appointment platform, dedicated to connecting healthcare professionals and patients in a convenient and efficient manner. By leveraging advanced technology, I streamline the process of scheduling appointments, ensuring that patients have access to the right doctors at their preferred hospitals. With a user-friendly interface.</span>
                    </li>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/Miirshe/sinay-petroleum-system' target='_blank'> Sinay Petroluem Systems</Link>
                        <span> : a system that sales and purchase fuel and allows company manage thier own some features that they need like employee , users and user has rollType , customer , purchase , sales fuel , and has two main reports only by groups like sales this beauty system building java , styles css and some other javafx , mysql.</span>
                    </li>

                    <li className='text-base tracking-widest leading-10 font-light text-justify'>
                        <Link className="font-semibold underline" to='https://github.com/Miirshe/keep_notes' target='_blank'> Keep Notes </Link>
                        <span> : I`m now working same like actual google keep note building react js , redux tolkit ,tailwind , and firebase</span>
                    </li>

                </ul>
            </div>
            <Dots />
        </div>
    )
}

export default Projects