/** @format */

import React from "react";
import { motion } from "framer-motion";
export const Animation = () => {
  return (
    <div>
      <motion.div
        animate={{ x: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {" "}
        <div
          style={{
            width: "400px",
            background: "yellow",
            padding: "20px",
            margin: "100px",
          }}
        >
          <h1>Animation</h1>
          <button>Click</button>
        </div>
      </motion.div>
    </div>
  );
};
