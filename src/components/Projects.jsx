import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-6'>
            <h1 className='my-20 text-center text-4xl'>Projects</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='w-full flex flex-wrap'>
                        <div className='w-full lg:w-1/4'>
                            <img
                                src={project.image}
                                alt={project.title}
                                width={150}
                                height={150}
                                className='my-6 rounded-xl'
                            />
                        </div>

                        <div className='w-full mac-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded-none bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects