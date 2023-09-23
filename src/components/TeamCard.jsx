import React from "react";

function TeamCard({ imgUrl, name, role }) {
  return (
    <>
      <div className="flex justify-between flex-col px-5 py-5 w-full rounded-[20px] max-w-[360px] team-card">
        <div className="flex flex-row">
          <img
            src={imgUrl}
            alt="imgurl"
            className="w-[120px] h-[120px] rounded-full justify-center mr-5 mt-5 "
          />
          <div className="flex flex-col">
            <h2 className="font-poppins font-bold text-[18px] leading-[32px] text-gradient text-left border-b-[1px] border-b-[#3F3E45] sm:text-[22px] ">
              {name}
            </h2>
            <div className="flex flex-col ml-4 mb-5">
              <p className="font-poppins font-normal text-[16px] leading-[32px] text-white sm:text-[18px]">
                {role}
              </p>
              <p className="font-poppins font-normal text-[18px] leading-[32px] text-white">
                @RentNest
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamCard;
