import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import Card from "../Card/Card";
import Input from "../Input/Input";

function Meal() {
  const { data, loading, error } = useContext(ApiContext);
  const [searchQuery,setSearchQuery] = useState("")
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filterData = data.filter(item=> item.strMeal.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <Input value={searchQuery} onChange={handleChange} />
      <div className="flex flex-wrap justify-center">
        {
          filterData.length >0 ?
        filterData.map((item,index)=>(
          <Card props={item} key={index}/>
        )):
        <h1 className="flex justify-center items-center text-[5vw] m-5">No Meals match Your data</h1>
        }
      </div>
    </>
  );
}

export default Meal;
