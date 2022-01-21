import React from 'react';
import { MdOutlineComment } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import moment from 'moment';

const Story = ({story}) => {
    return (
        <div className='w-full h-28 bg-mantis rounded-lg hover:shadow-xl mt-5 cursor-pointer transition transform duration-500 ease-in-out hover:shadow-md hover:-translate-y-1 hover:scale-105'>
            <a href={'https://news.ycombinator.com/item?id=' + story?.id} className='inline-block w-full h-full flex items-center'>
                <div className='w-fit h-fit ml-5 flex flex-col'>
                    <div className='flex flex-row group'>
                        <AiOutlineLike className='w-7 h-7 text-black group-hover:text-white transition duration-500 ease-in' />
                        <span className='text-lg ml-2 group-hover:text-white transition duration-500 ease-in'>{story.score}</span>
                    </div>

                    <div className='flex flex-row mt-2 group'>
                        <MdOutlineComment className='w-7 h-7 text-black group-hover:text-white transition duration-500 ease-in' />
                        <span className='text-lg ml-2 group-hover:text-white transition duration-500 ease-in'>{story.descendants}</span>
                    </div>
                </div>

                <div className='ml-5'>
                    <p className='text-black font-ptSans text-xl font-medium'>{story?.title.length > 50 ? story.title.slice(0, 50) + '...' : story.title}</p>
                    <div className='mt-2'>
                        <p className='text-lg'>by <span className='text-redCrayola'>{story.by}</span> on <span className='text-redCrayola'>{moment.unix(story.time).format('MMMM DD, YYYY')}</span></p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Story;
