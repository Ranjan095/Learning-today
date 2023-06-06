/** @format */

import React from "react";

export const Pagination = ({ totalPro, currentPage, handleClick }) => {
  let arr = [];
  for (let i = 1; i <= totalPro / 5; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <div>
      <h1>paginations: {totalPro}/5</h1>

      <div>
        {arr.map((ele, i) => (
          <button
            style={{
              margin: "5px",
              backgroundColor: currentPage == i + 1 ? "teal" : "white",
              color: currentPage == i + 1 ? "white" : "black",
            }}
            disabled={currentPage == i + 1}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
