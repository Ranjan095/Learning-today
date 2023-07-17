/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Assets/assets";
import "./Notes.css";
import { Link } from "react-router-dom";
export const Notes = () => {
  let [data, setData] = useState([]);

  let token = localStorage.getItem("token");
  let getData = () => {
    axios
      .get(`${BASE_URL}/note`, {
        headers: {
          Authorization: `berear ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let handleDelete = (id) => {
    // console.log(id);
    axios
      .delete(`${BASE_URL}/note/delete/${id}`, {
        headers: {
          Authorization: `Berear ${token}`,
        },
      })
      .then((res) => {
        alert("note has been deleted");
        getData();
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="container">
        <Link to={"/createNote"}>Create Note</Link>
      <h1>{`Total Notes : ${data.length}`}</h1>
      {data.length < 1 && <h2>Please Create Notes</h2>}
      <div id="notes">
        {data.map((ele) => {
          return (
            <div key={ele._id} className="box-note">
              <p>
                Author : <b>{ele.author}</b>
              </p>
              <p>
                Category : <b>{ele.category}</b>
              </p>
              <p>
                {" "}
                <b>{ele.discription}</b>
              </p>
              <div className="editDeleteButton">
                {" "}
                <button>Edit</button>
                <button onClick={() => handleDelete(ele._id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
