import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar';
import Footer from '../Pages/shared/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default MainLayout;