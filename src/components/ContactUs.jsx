import React from "react";
import styles from "../styles";

function ContactUs() {
  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div className="w-full flex text-center justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]  border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>ContactUs</h1>
      </div>
      <div className="flex flex-col justify-center w-full relative-[1]">
        <form className="items-center justify-center">
          <div className="mb-6 mr-20 ml-20">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className=" mr-20 ml-20">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6 mr-20 ml-20">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-white">
              Your Message
            </label>
            <textarea
              type="texterea"
              id="message"
              rows={5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />

            <button
              type="submit"
              className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
