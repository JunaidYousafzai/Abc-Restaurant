import React from "react";

function Card({props}) {
  return (
    <>
      <div className="max-w-xs mt-10 overflow-hidden m-3  rounded-lg shadow-lg bg-green-600">
        <img
          className="object-cover w-full h-48 mt-2"
          src={`${props.strMealThumb}`}
          alt="NIKE AIR"
        />
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold  uppercase text-white">
            {props.strMeal}
          </h1>
          <p className="mt-1 text-sm text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
          <div className="flex items-center justify-between px-4 py-2 ">
          <h1 className="text-lg font-bold text-white">$129</h1>
          <button className="px-2 py-1 text-xs font-semibold text-green-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-green-200 focus:bg-green-400 focus:outline-none">
            Add to cart
          </button>
        </div>  
        </div>
      </div>
    </>
  );
}

export default Card;
