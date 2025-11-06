import React from 'react';
import Container from '../Container/Container';
import ProductsParent from '../Componants/PopularProducts/ProductsParent';
import halfCup from "../assets/images/more/4.png";
import rightImg from "../assets/images/more/5.png";
import { GiCoffeeCup } from 'react-icons/gi';
import { Link } from 'react-router';

const PopularProducts = () => {
    return (
      <div>
        <Container className={`relative mb-10`}>
          <div className="absolute md:top-27 lg:top-18 top-15 z-50">
            <img className="lg:w-45 md:w-30 w-19" src={halfCup} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 z-50">
            <img className="lg:w-55 md:w-45 w-23" src={rightImg} alt="" />
          </div>
          <p className="text-center text-xs pt-5">--- Sip & Savor ---</p>
          <h1 className="text-3xl text-[#331A15] font-semibold text-center py-3">
            Our Popular Products
          </h1>
          <div className="flex items-center justify-center">
            <Link
              to={"/addNewCoffee"}
              className="bg-[#331A15] btn rounded-md text-white"
            >
              Add Coffee <GiCoffeeCup className="" />
            </Link>
          </div>
          <div>{<ProductsParent></ProductsParent>}</div>
        </Container>
      </div>
    );
};

export default PopularProducts;