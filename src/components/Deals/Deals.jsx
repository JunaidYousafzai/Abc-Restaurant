import React from "react";

function Deals({ props }) {
  return (
    <>
      <section class=" bg-green-900 m-4">
        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            style={{ backgroundImage: `url(${props.strMealThumb})` }}
            class="w-full h-64 bg-green-300 bg-center bg-cover rounded-lg shadow-md"
          ></div>

          <div class="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64 bg-green-800">
            <h3 class="py-2 font-bold tracking-wide text-center  uppercase text-white">
              {props.strMeal}
            </h3>

            <div class="flex items-center justify-between px-3 py-2  text-gray-300 bg-green-700">
              <span class="font-bold ">$129</span>
              <button class="px-2 py-1 text-xs font-semibold text-gray-600 uppercase  bg-white rounded-md focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;
