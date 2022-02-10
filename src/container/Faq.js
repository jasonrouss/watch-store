import React from "react";
import CardFaq from "../components/CardFaq";

const Faq = () => {
  return (
    <div>
      <div className="title text-4xl bold font-serif mt-6 mt-8 flex justify-center transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
        <div>FAQ</div>
      </div>
      <div className="flex justify-center ">
        <div className="card-project m-6 grid grid-cols-1  lg:grid-cols-2  gap-24">
          <CardFaq
            q="When do you open your shops ?"
            a="From 10 am till 12 pm , every weekday."
          />
          <CardFaq
            q="What is your refund policy ?"
            a="Return the item within 30 days of purchase with receipt."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
