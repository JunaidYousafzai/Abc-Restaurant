import React from "react";
import Card from "../Card/Card";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import Deals from "../Deals/Deals";
import { NavLink } from "react-router-dom";

function Home() {
  const { data, loading, error } = useContext(ApiContext);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;
  const limitedData = data.slice(0, 8);
  const bestDeals = data.slice(9, 12);
  return (
    <>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl m-5">
            Abc Restaurant
          </h1>
          <p className="m-6  text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
          <NavLink
          to="/meals"
           className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg hover:bg-green-500 lg:mx-0 lg:w-auto focus:outline-none">
            Explore Meals
          </NavLink>
        </div>
      </div>
      <main className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-white">
        <div className="text-section">
          <h1>We Offer High Quality Food</h1>
          <h2>Here are Some of Our Best Dishes</h2>
        </div>
        <div className="best-dishes flex justify-center flex-wrap m-5 ">
          {console.log(limitedData)}
          {limitedData.map((item, index) => (
            <Card key={item.idMeal} props={item} />
          ))}
        </div>
      </main>

      <section >
        <h1 className="text-center lg:text-4xl md:text-2xl ">Our Best Deals</h1>
        <div className="Deals-container flex flex-wrap justify-center">
          {bestDeals.map((item, index) => (
            <Deals props={item} />
          ))}
        </div>
      </section>

  
    </>
  );
}

export default Home;
