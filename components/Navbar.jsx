import React from 'react';
import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='w-full h-fit flex'>
            <div className='flex w-fit mt-5 ml-5 mb-5'>
                <p className='text-linear-gradient text-5xl'>Top</p>
            </div>

            <div className='flex flex-row justify-around w-[250px] sm:w-[350px] ml-10 mt-6 mb-5'>
                <a href="/">
                    <p className='text-linear-gradient text-3xl'>Top</p>
                </a>

                <a href="/new">
                    <p className='text-linear-gradient text-3xl'>New</p>
                </a>

                <a href="/best">
                    <p className='text-linear-gradient text-3xl'>Best</p>
                </a>
            </div>

            <div className='text-white mt-5 ml-10 sm:ml-[280px]'>
                <AiFillGithub className='w-10 h-10'/>
            </div>
        </div>
    );
};

export default Navbar;
