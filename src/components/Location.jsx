import React from "react";
import styles from "../styles";

function Location() {
  return (
    <section
      id="location"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div className="w-full flex text-center justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]  border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>Location - Bangaluru</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123005915!2d77.30127814132629!3d12.95379021332858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1695378433118!5m2!1sen!2sin"
          style={{ border: "0" }}
          height="450"
          width="1024"
          allowfullscreen=""
          loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default Location;
