import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>
                Technologies
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-4'>

                <div
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandReactNative className='text-7xl text-blue-900' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandRedux className='text-7xl text-violet-500' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-pink-500' />
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </div>
            </div>
        </div>
    )
}

export default Technologies