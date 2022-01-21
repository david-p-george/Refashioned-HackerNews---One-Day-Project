import React from "react";
import Navbar from './Navbar'
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className='w-full lg:w-3/6 lg:absolute top-[50px] left-[25%] 2xl:left-[25%] md:w-4/6 md:absolute md:left-[20%] h-fit'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
