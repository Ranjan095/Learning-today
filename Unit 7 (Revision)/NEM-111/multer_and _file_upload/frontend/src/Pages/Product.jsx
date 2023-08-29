/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const Product = () => {
  let [file, setFile] = useState("");

  let handleChange = (e) => {
    let file = e.target.files[0];
    // transform(file);
    setFile(file);
    // console.log(file);
  };

  let transform = (file) => {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFile(reader.result);
        // console.log(reader.result);
      };
    } else {
      setFile("");
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("avatar", file);

    axios
      .post("http://localhost:8080/product/upload", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>File upload</h1>

      <div style={{ display: "flex" }}>
        <form
          action="/upload"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input multiple type="file" onChange={handleChange} />
          {/* <input type="file" onChange={handleChange} />
          <input type="file" onChange={handleChange} /> */}
          <input type="submit" />
        </form>
        <div>
          <h3>upload your image</h3>
          <div style={{ height: "200px", width: "200px", border: "1px solid" }}>
            <img
              height={"100%"}
              width={"100%"}
              src={file ? file : ""}
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
