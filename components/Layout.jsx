import React from "react";
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='w-full sm:w-3/6 sm:absolute top-[50px] left-[25%] h-fit flex border border-white'>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
