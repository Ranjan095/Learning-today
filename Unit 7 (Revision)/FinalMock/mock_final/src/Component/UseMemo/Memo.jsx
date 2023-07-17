/** @format */

import React, { useMemo, useState } from "react";

const Memo = () => {
  let [add, setAdd] = useState(0);
  let [multi, setMulti] = useState(1);

  let addfun = () => {
    setAdd(add + 1);
    console.log("add", add);
  };
  let multiFun = () => {
    setMulti(multi * 2);
    console.log("multi", multi);
  };
  //  let check=()=>{
  //     console.log("check is calling")
  // return add+10
  //  }
  let check = useMemo(() => {
    console.log("check is calling");
    return add + 10;
  }, [add]);

  return (
    <div>
      <h1>ADD : {add}</h1>

      <h1>MULTI : {multi}</h1>

      <h1>Check : {check}</h1>
      <button onClick={addfun}>ADD</button>
      <button onClick={multiFun}>MULTIPLY</button>
    </div>
  );
};

export default Memo;
