import React from 'react';
import { useRouter } from 'next/router';

import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
    const router = useRouter();

    const determineTitle = () => {
        const currentPath = router.asPath;

        switch (currentPath) {
            case '/':
                return 'Top';
                break;
            case '/new':
                return 'New';
                break;
            case '/best':
                return 'Best';
                break;
        }
    }

    return (
        <div className='w-full h-fit flex bg-redCrayola rounded-lg'>
            <div className='flex w-fit mt-4 ml-5 mb-5'>
                <p className='text-5xl cursor-pointer font-inter400 hover:text-mantis transition duration-500 ease-in'>{determineTitle()}</p>
            </div>

            <div className='flex flex-row justify-around w-[250px] lg:w-[350px] ml-6 lg:ml-10 mt-7 lg:mt-6 mb-5'>
                <a href="/" className=''>
                    <p className='font-inter400 text-2xl lg:text-3xl hover:text-mantis transition duration-500 ease-in'>Top</p>
                </a>

                <a href="/new">
                    <p className='font-inter400 text-2xl lg:text-3xl hover:text-mantis transition duration-500 ease-in'>New</p>
                </a>

                <a href="/best">
                    <p className='font-inter400 text-2xl lg:text-3xl hover:text-mantis transition duration-500 ease-in'>Best</p>
                </a>
            </div>

            <div className='text-white mt-5 ml-5 pr-2 lg:pr-3 sm:ml-[280px] md:ml-5 lg:ml-[60px] 2xl:ml-[300px]'>
                <a href="to-do" className=''>
                    <AiFillGithub className='w-10 h-10 text-black hover:text-mantis transition duration-500 ease-in'/>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
