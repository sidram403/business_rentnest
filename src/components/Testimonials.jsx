import React from "react";
import styles from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

function Testimonials() {
  return (
    <section
      id="review"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1]  border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>What people are saying about us</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
