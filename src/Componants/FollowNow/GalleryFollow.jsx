import React from 'react';
import img1 from "../../assets/images/cups/Rectangle 9.png"
import img2 from "../../assets/images/cups/Rectangle 10.png";
import img3 from "../../assets/images/cups/Rectangle 11.png";
import img4 from "../../assets/images/cups/Rectangle 12.png";
import img5 from "../../assets/images/cups/Rectangle 13.png";
import img6 from "../../assets/images/cups/Rectangle 14.png";
import img7 from "../../assets/images/cups/Rectangle 15.png";
import img8 from "../../assets/images/cups/Rectangle 16.png";

const GalleryFollow = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 md:p-0 md:w-3/4 mx-auto">
        <img className='w-full md:h-45 lg:h-55' src={img1} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img3} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img4} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img5} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img6} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img2} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img7} alt="" />
        <img className='w-full md:h-45 lg:h-55' src={img8} alt="" />
      </div>
    );
};

export default GalleryFollow;