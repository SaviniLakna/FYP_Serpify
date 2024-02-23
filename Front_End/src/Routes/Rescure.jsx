import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Assets/Images/resc.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";

import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

import { SimplePagination } from "../Components/Pagination";

function Rescure() {
  const rescureData = RescuresDB;
  const [searchInput, setSearchInput] = useState("");
  const [rowsToShow, setRowsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRescureData = rescureData.filter(
    (rescure) =>
      rescure.district.toLowerCase().includes(searchInput.toLowerCase()) ||
      rescure.coveringArea.toLowerCase().includes(searchInput.toLowerCase())
  );


  const totalPages = Math.ceil(filteredRescureData.length / rowsToShow);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  return (
    <div className="w-full h-screen">
      <Nav />

      <div className="body-wrapper w-full">
        <div className="hero-wrapper_sub w-full md:h-1/3  relative  bg-slate-700">
          <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
            {" "}
          </div>
          <img
            src={Hero}
            alt='"Hero'
            className="w-full h-full object-cover"
          ></img>
        </div>

        <div className="w-full md:p-10 p-3 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3">
          <h5> Home </h5> <NavigateNext /> <h5>Find Rescure</h5>
        </div>

        <div className="lg:w-[80%] w-[95%] mx-auto md:mt-[68px] mt-[24px]">
          <div className=" md:w-2/3 w-full mb-3 flex flex-row space-x-3 justify-start items-center">
            <div className="py-1 px-1 bg-slate-50 rounded-md border-[#565656] border-opacity-10 border-[1px]  md:w-1/3 w-2/3 flex flex-row justify-between relative">
              <input
                type="text"
                placeholder="Search District, Area..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-2 outline-none border-none"
              />
              <div className="bg-[#2C6E49]  text-white px-2 py-1 rounded-md ">
                Search
              </div>
            </div>

            <select
              onChange={(e) => setRowsToShow(parseInt(e.target.value))}
              className="w-1/5 py-2 px-2  border-[#565656] border-opacity-10 border-[1px] outline-none rounded-md"
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>

          <div className="w-full relative overflow-x-auto">
            <table className="w-full border-b-[1px] border-[#565656] border-opacity-10 ">
              <th className="p-2 text-center font-medium text-[14px] border-b-[1px] border-[#565656] border-opacity-10 bg-[#8EA604] bg-opacity-25">
                Name
              </th>
              <th className="p-2 text-center font-medium text-[14px] border-b-[1px]  border-collapse border-r-[1px] border-l-[1px] border-[#565656] border-opacity-10 bg-[#8EA604] bg-opacity-25">
                District
              </th>
              <th className="p-2 text-center font-medium text-[14px] border-b-[1px]  border-collapse border-r-[1px] border-l-[1px] border-[#565656] border-opacity-10 bg-[#8EA604] bg-opacity-25">
                Contact Number
              </th>
              <th className="p-2 text-center font-medium text-[14px] border-b-[1px] border-[#565656] border-opacity-10 bg-[#8EA604] bg-opacity-25">
                Covering Area
              </th>

              <tbody>
              {filteredRescureData
    .slice((currentPage - 1) * rowsToShow, currentPage * rowsToShow)
    .map((rescure, index) => (
                    <tr key={index}>
                      <td className="p-2 text-left font-normal text-[14px] border-b-[1px] border-collapse  border-[#565656] border-opacity-10">
                        {rescure.name}
                      </td>
                      <td className="p-2 text-left font-normal text-[14px] border-b-[1px] border-collapse border-r-[1px] border-l-[1px] border-[#565656] border-opacity-10">
                        {rescure.district}
                      </td>
                      <td className="p-2 text-left font-normal text-[14px] border-b-[1px] border-collapse border-r-[1px] border-l-[1px] border-[#565656] border-opacity-10">
                        {rescure.contact}
                      </td>
                      <td className="p-2 text-left font-normal text-[14px] border-b-[1px] border-collapse  border-[#565656] border-opacity-10">
                        {rescure.coveringArea}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          
        <div className="w-full py-2 ">
         <SimplePagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        </div>


        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rescure;
