import React from "react";
import cart from "./../images/icon-cart.svg";
const DEsc = () => {
  return (
    <div className="  max-w-[1440px] flex justify-center items-center ">
      <div className=" w-[330px] h-[500px] max-md:h-[500px] bg-White">
        <h2 className=" font-medium uppercase tracking-[4px] px-8 md:mt-8 opacity-60 max-md:mt-8">
          perfume
        </h2>
        <h1 className=" px-9 my-4 font-fraunceBold md:text-4xl text-3xl">
          Gabrielle <br /> Essence Eau <br /> De Perfum
        </h1>
        <p className="px-9 font-medium mt-8 text-[14px]">
          A floral, solar and voluptuous <br /> interpretation composed by{" "}
          <br />
          olvier polge, Perfumer-Creator <br /> for the House of CHANEL
        </p>
        <div className="flex">
          <h1 className=" font-fraunceBold my-10 text-3xl px-8 text-Darkcyan">
            $149.99
          </h1>
          <h2 className=" font-bold my-12 text-[14px] px-8 opacity-70">
            <strike>$169.99</strike>{" "}
          </h2>
        </div>
        <div className="flex justify-center">
          <button className=" w-[80%] h-12 font-bold bg-Darkcyan rounded-lg text-White flex items-center justify-center">
            <img className="mx-2" src={cart} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DEsc;
