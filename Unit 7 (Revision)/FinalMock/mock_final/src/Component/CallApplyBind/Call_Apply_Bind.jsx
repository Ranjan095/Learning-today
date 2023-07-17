/** @format */

import React from "react";

const Call_Apply_Bind = () => {
  let obj = {
    name: "Ranjan",
    age: 26,
  };
function getInfo(vill, sch) {
    console.log(
      `my name is ${this.name} and age is ${this.age} village is ${vill} school is ${sch}`
    );
  };
  getInfo.call(obj,"Durgauli","R.K.Mission");
  getInfo.apply(obj,["Durgauli","R.K.Mission"]);
  let duplicateFun = getInfo.bind(obj,"Durgauli","R.K.Mission");
  duplicateFun();

  return (
    <div>
      <h1>Call_Apply_Bind</h1>
    </div>
  );
};

export default Call_Apply_Bind;
