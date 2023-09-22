import React from "react";
import styles, { layout } from "../styles";
import { house2 } from "../assets";

function About() {
  return (
    <>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center text-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1] border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>About RentNest </h1>
      </div>
      <section id="about" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={house2}
            alt="house2"
            className="w-[100%] h-[100%]  z-[5] object-contain "
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className={`${layout.sectionInfo} text-center`}>
          <p className={`${styles.paragraph} mt-5`}>
            RentNest is your go-to platform for streamlined and stress-free
            rental experiences. As we work diligently on developing our website,
            we are committed to revolutionizing the rental industry by providing
            a comprehensive solution that caters to the needs of students,
            professionals, and property retailers alike.
          </p>
          <p className={`${styles.paragraph} mt-5`}>
            Students and professionals often face an arduous journey in search
            of suitable accommodations. The process can be overwhelming,
            time-consuming, and fraught with uncertainty. On the other hand,
            property retailers invest significant effort in showcasing their
            offerings, only to find their hard work going unnoticed in a sea of
            competition.
          </p>
          <p className={`${styles.paragraph} mt-5`}>
            At RentNest, we are driven by a single mission: to bridge the gap
            between those seeking homes and those offering them. Our platform
            acts as a direct link that connects individuals with ideal housing
            options. We understand the significance of finding a home that meets
            your needs and preferences, which is why we are dedicated to making
            the process efficient, secure, and hassle-free.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
