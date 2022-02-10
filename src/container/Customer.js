import React from "react";
import woman from "../assets/woman.jpg";
import woman2 from "../assets/woman2.jpg";
import man from "../assets/man.jpg";
const Customer = () => {
  return (
    <div className="title text-2xl  mt-6 mt-4 ">
      <div className="title flex justify-center text-4xl bold font-serif mt-8 mb-8 transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none" >
        Customer Feedback
      </div>
      <div className="customer1 transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none  shadow-xl flex justify-start m-4  rounded-xl border border-stone-400">
        <img src={woman} alt="customer 1" className="rounded  h-32 " />
        <div className="mx-4 text-base md:text-xl  px-1 pt-1 font-sans">
          " I am always satisfied with the service , shopping here is a delight!
          " - Jane Doe
        </div>
      </div>
      <div className="customer2 transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none shadow-xl  mt-6 flex  justify-start m-4  rounded-xl border border-stone-400">
        <img src={man} alt="customer 2" className="rounded h-32 md:h-32" />
        <div className="mx-4 text-base  md:text-xl px-1 pt-1 font-sans">
          " In valentines day I found the perfect watch for my partner , since
          then we have been married for 3 years " - John Doe
        </div>
      </div>
      <div className="customer3transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none  shadow-xl  mt-6 flex justify-start m-4  rounded-xl border border-stone-400">
        <img src={woman2} alt="customer 3" className="rounded h-32 md:h-32 " />
        <div className="mx-4  text-base md:text-xl px-1 pt-1  font-sans">
          " My grandpa collects watches when he needed a new rare piece I was
          recommended this place and was able to get it :) " - Emily Smith{" "}
        </div>
      </div>
    </div>
  );
};

export default Customer;
