import React, { useState } from "react";

function Input({value,onChange}) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <div class="flex items-center justify-center mt-2">
          <input
            type="search"
            placeholder="Search Food By Name"
            class=" block w-[50%]  items-center rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-green-600 focus:outline-none focus:ring focus:ring-green-600 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-green-600"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default Input;
