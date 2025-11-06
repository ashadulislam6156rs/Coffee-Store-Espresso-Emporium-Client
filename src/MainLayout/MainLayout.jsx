import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
      <div>
        <header className="w-full mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="w-full mx-auto">
          <Outlet></Outlet>
        </main>
        <footer className="bg-[#f7f7f7] w-full mx-auto">
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default MainLayout;