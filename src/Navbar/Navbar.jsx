import React from 'react';
import logo from "../assets/images/more/logo1.png"
import Container from '../Container/Container';

const Navbar = () => {
    return (
      <div>
        <nav className="w-full mx-auto bg-[#372727]">
          <Container>
            <div className="md:h-16 flex gap-1 items-center justify-center">
              <img className="md:w-14 w-10" src={logo} alt="" />
              <h1 className="md:text-2xl text-xl font-bold text-white">
                Espresso Emporium
              </h1>
            </div>
          </Container>
        </nav>
      </div>
    );
};

export default Navbar;