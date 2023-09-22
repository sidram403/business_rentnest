import React from "react";
import styles from "../styles";

function About() {
  return (
    <section
      id="about"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]  border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>About RentNest</h1>
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <p className={`${styles.paragraph} text-center px-20 mt-5 `}>
        RentNest is your go-to platform for streamlined and stress-free rental
        experiences. As we work diligently on developing our website, we are
        committed to revolutionizing the rental industry by providing a
        comprehensive solution that caters to the needs of students,
        professionals, and property retailers alike.
      </p>
      <p className={`${styles.paragraph} text-center px-20 mt-5 `}>
        Students and professionals often face an arduous journey in search of
        suitable accommodations. The process can be overwhelming,
        time-consuming, and fraught with uncertainty. On the other hand,
        property retailers invest significant effort in showcasing their
        offerings, only to find their hard work going unnoticed in a sea of
        competition.
      </p>
      <p className={`${styles.paragraph} text-center px-20 mt-5 `}>
        At RentNest, we are driven by a single mission: to bridge the gap
        between those seeking homes and those offering them. Our platform acts
        as a direct link that connects individuals with ideal housing options.
        We understand the significance of finding a home that meets your needs
        and preferences, which is why we are dedicated to making the process
        efficient, secure, and hassle-free.
      </p>
    </section>
  );
}

export default About;
