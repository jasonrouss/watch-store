import React from "react";
import couple from "../assets/couple.jpg";
import luxury from "../assets/luxury.jpg";
import omega from "../assets/omega.jpg";
const Products = () => {
  return (
    <div>
      <div className="title mt-4 flex justify-center transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <div className="md:text-4xl sm:text-3xl text-2xl bold font-serif">
          Products
        </div>
      </div>

      {/* First Row */}
      <div className="first-row mt-8 mb-4  md:flex gap-8  md:justify-around ">
        <div className="image-value1 mx-4 mt-8 flex justify-center">
          <img
            className=" md:h-72 sm:h-52 h-40 order-lasttransition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none "
            src={luxury}
            alt="inclusive design"
          />
        </div>
        <div className="value-title1 transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none md:w-1/2 m-8 font-sans flex justify-center border shadow-xl rounded-lg border-stone-400  p-8 text-lg md:text-xl text-stone-900 ">
          <p>
            We have many of desirable collecter watches from many famous brands,
            if you are looking to improve your inventory there is a good chance
            we have what you are looking for.
            <br />
            <br />
            "I’ve always been interested in science. I used to take watches
            apart and clocks apart, and there’s little screws, and a little this
            and that, and I found out if I dropped one of them, that thing ain’t
            gonna work." – Herbie Hancock
          </p>
        </div>
      </div>
      {/* Two Row */}

      <div className="first-row mt-8 mb-4  md:flex gap-8  md:justify-around ">
        <div className="image-value1 mx-4 mt-8 flex justify-center">
          <img
            className=" md:h-72 transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none sm:h-52 h-40 order-last"
            src={couple}
            alt="inclusive design"
          />
        </div>
        <div className="value-title1 transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none md:w-1/2 m-8 md:order-first  font-sans flex justify-center border shadow-xl rounded-lg border-stone-400  p-8 text-lg md:text-xl text-stone-900 ">
          <p>
            That special occasion coming up soon and your partner is a watche
            enthusiast , well you are in luck we have a variety of good quality
            affordable watches , the perfect gift for your perfect someone!
            <br />
            <br />" I collect watches because I’m always late, and I need to
            know exactly how late I’m going to be – in order to come up with a
            good excuse. " - Colin Hanks
          </p>
        </div>
      </div>

      {/* Third Row */}

      <div className="first-row mt-8 mb-4  md:flex gap-8  md:justify-around ">
        <div className="image-value1 mx-4 mt-8 flex justify-center">
          <img
            className=" md:h-72 transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none sm:h-52 h-40 order-last"
            src={omega}
            alt="inclusive design"
          />
        </div>
        <div className="value-title1transition transform  hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none  md:w-1/2 m-8  font-sans flex justify-center border shadow-xl rounded-lg border-stone-400  p-8 text-lg md:text-xl text-stone-900 ">
          <p>
            Watches in diffrent colors , for different ages and gender you will
            definitely find something that you will like that matches your style.
            <br />
            <br />" I am fascinated by Omega’s history. Particularly the First
            World War stuff, when they made watches for the flying corps, and
            the NASA side of it." -Eddie Redmayne
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
