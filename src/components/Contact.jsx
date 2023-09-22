import React from "react";
import styles from "../styles";

function Contact() {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div className="w-full flex text-center justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]  border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>Contact</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-row gap-2">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 21">
            <g
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2">
              <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
            </g>
          </svg>
          <h1 className="text-white font-poppins font-semibold">
            Bangaluru, Karnataka, India
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
            />
          </svg>
          <h1 className="text-white font-poppins font-semibold">
            +91 91087 61650
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
            />
          </svg>
          <h1 className="text-white font-poppins font-semibold">
            info@rentnest.com
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;
