import React from 'react';
import Rating from "@mui/material/Rating";
import { AiFillShopping } from "react-icons/ai";
import { motion } from "framer-motion";
import { item } from "../helpers/framer-motion";

const ProductDiv = ({shoe}) => {
    return (
        <>
        <motion.div
              variants={item}
              className="border-2 rounded-md  lg:max-w-xs md:max-w-xs w-[90%] md:w-full lg:w-full h-[25rem]
             shadow-sm relative "
            >
              <img
                src={shoe.image}
                className=" mx-auto h-[50%] w-[80%] "
                alt={shoe.name}
              />
              <div className="flex flex-col justify-center gap-5 h-[40%] bg-white px-3  ">
                <h2 className="text-[#797575] font-bold"> {shoe.name} </h2>
                <h2>For : {shoe.gender} </h2>
                <Rating
                  name="read-only"
                  size="small"
                  value={shoe.rating}
                  readOnly
                />
                <h2 className="font-bold"> ${shoe.price} </h2>
               
              </div>
              <button
                className="flex items-center justify-center
            show-btn w-full py-2.5 rounded-b-lg gap-2 bg-black text-white  absolute bottom-0"
              >
                Add to cart
                <AiFillShopping size={24} />
              </button>
            </motion.div>
        </>
    );
};

export default ProductDiv;