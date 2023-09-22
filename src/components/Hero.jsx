import React from "react";
import styles from "../styles";
import { house } from "../assets";

function Hero() {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75-px]">
              Discover <br className="sm:block hidden" />
              Affordable
              <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Student Housing </span>{" "}
            </h1>
          </div>

          <h1 className=" font-poppins font-semibold sm:text-[68px] text-[52px] text-white sm:leading-[100px] leading-[75-px] w-full">
            in India.
          </h1>
          <p
            className={`${styles.paragraph} sm:max-w-[420px] max-w-[470px] mt-5`}>
            Find your perfect rental house or PG accommodation with RentNest,
            offering quality housing option for students and servicemen.
          </p>
          <div className="sm:flex hidden md:mr-4 mr-0">
            <a href="#features">
              <button className="mt-4 text-black bg-b-gradient  font-semibold py-2 px-4 rounded cursor-pointer">
                Explore Now
              </button>
            </a>
          </div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img
            src={house}
            alt="billing"
            className="w-[100%] h-[100%] mt-2 relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className={`sm:hidden ${styles.flexCenter}`}>
          <a href="#features">
            <button className="mt-4 text-black bg-b-gradient  font-semibold py-2 px-4 rounded cursor-pointer">
              Explore Now
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
