/** @format */

import axios from "axios";
import { GET_USER_SUCCESS } from "./userType";

let initialState = {
  name: "",
  email: "",
  id: "",
};

export let userReducer = async (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_SUCCESS: {
      try {
        let res = await axios.get("/api/current_user");
        let { name, id, email } = await res.data;
        return { ...state, name, id, email };
      } catch (error) {
        console.log("userReducer error ====>", error);
      }
    }
    default: {
      return state;
    }
  }
};
