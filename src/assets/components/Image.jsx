import React from "react";
import deskImg from "./../images/image-product-desktop.jpg";
import mobImg from "./../images/image-product-mobile.jpg";
const Image = () => {
  return (
    <div className="  max-w-[1440px] flex justify-center items-center ">
      <div className=" w-full md:h-screen mx-auto flex max-md:items-start items-center max-md:h-[270px]  ">
        <img
          className=" max-md:hidden w-[330px] mx-auto rounded-lg "
          src={deskImg}
        />
        <img
          className=" md:hidden w-[330px] mx-auto my-10 rounded-tl-lg rounded-tr-lg "
          src={mobImg}
        />
      </div>
    </div>
  );
};

export default Image;
