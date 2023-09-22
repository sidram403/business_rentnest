import React from "react";

function ProductCard({ imgUrl, title, desc }) {
  return (
    <>
      <div className="flex justify-between flex-col px-5 py-5 w-full rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img
          src={imgUrl}
          alt="imgurl"
          className="w-[400px] h-[250px] rounded-[16px]"
        />
        <h2 className="font-poppins font-bold text-[22px] leading-[32px] text-gradient text-center my-10 ">
          {title}
        </h2>
        <div className="flex flex-row border-b-[1px] border-b-[#3F3E45]">
          <div className="flex flex-col ml-4 mb-5">
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white">
              {desc}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2 mb-2">
          <a href="#home">
            <button className="mt-4 text-black bg-b-gradient  font-semibold py-2 px-4 rounded cursor-pointer">
              Explore Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
