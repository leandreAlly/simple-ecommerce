import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);
  const { id, title, image, category, price } = product;
  return (
    <div>
      <div
        className='border border-[#e4e4e4] h-[300px] mb-4 relative 
    overflow-hidden group transition '
      >
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto justify-center items-center'>
            <img
              className='mx-h-[160px] group-hover:scale-110 transition duration-300 '
              src={image}
              alt=''
            />
          </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;
