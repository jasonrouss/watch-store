import React from "react";

const CardFaq = ({ q,a}) => {
  return (
    <div className=" mt-8 flex  flex-col space-y-4 border shadow-xl rounded-lg border-stone-400  p-8 text-lg md:text-xl text-stone-900 transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
      <div className="qT font-serif text-2xl">Question:</div>
 <div className="q italic font-sans">

"{q}"
 </div>
      <div className="aT text-2xl font-serif">Answer:</div>
      <div className="a bold font-sans">
        {a}
      </div>
    </div>
  );
};

export default CardFaq;
