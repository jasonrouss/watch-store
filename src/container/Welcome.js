import React from "react";

const Welcome = () => {
  return (
    <>
   
      <div className="title mt-8  flex justify-center transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
        <div className="md:text-4xl sm:text-3xl text-2xl bold font-serif">Welcome</div>
      </div>
      <div className="titleWelcome mt-4 flex justify-center">
        <div className="md:text-2xl sm:text-xl text-lg mx-8 text-stone-800 font-sans italic transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
          “ Don’t waste your time in anger, regrets, worries, and grudges. Life
          is too short to be unhappy. ”
        </div>
      </div>

      <div className="welcomeCard  mt-8 flex justify-center transition transform  hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none">
        <div className="border shadow-xl m-4 font-sans text-md md:text-xl p-4 pt-2 rounded-lg border-stone-400  md:w-1/2 md:h-64">
          Founded on 10/4/2022 , our mission was to deliver high quality watches
          while making it as accessible as possible.
          <br />
          <br />
          We have a vast variety of watches to choose from and we are always
          looking for new brands to add to our collection.
          <br />
          <br />
          Perfect for kids , adults and couples you will find what you are
          looking for that special occasion or just for yourself.
        </div>
      </div>
     
    </>
  );
};

export default Welcome;
