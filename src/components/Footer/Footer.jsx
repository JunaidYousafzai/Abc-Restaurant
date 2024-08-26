import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div class="md:flex md:-mx-3 md:items-center md:justify-between">
        </div>
        <hr class="my-6  md:my-10 border-gray-700" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p class="font-semibold  text-white">
              Quick Link
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <Link to="/"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Home
              </Link >
              <Link
              to="/aboutus"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                About Us
              </Link>
              <Link
              to="/Contact"

                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 text-white">
              Industries
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Information Technology
              </a>
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p class="font-semibold text-gray-800 text-white">Services</p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Translation
              </a>
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                Content Creation
              </a>
            </div>
          </div>

          <div>
            <p class="font-semibold  text-white">
              Contact Us
            </p>

            <div class="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                class=" transition-colors duration-300 text-gray-300  hover:underline hover:text-green-500"
              >
                info@merakiui.com
              </a>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-10 border-gray-700" />

        <div class="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
          <h1>Junaid.</h1>
          </a>

          <p class="mt-4 text-sm text-gray-500 sm:mt-0 text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
