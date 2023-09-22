import React from "react";
import styles from "../styles";
import { product } from "../constants";
import ProductCard from "./ProductCard";

function Features() {
  return (
    <section
      id="features"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center text-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1] border-b-[1px] border-b-[#3F3E45] text-gradient">
        <h1 className={styles.heading2}>Featured Properties</h1>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container relative-[1]">
        {product.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Features;
