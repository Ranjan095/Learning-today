/** @format */

import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteTask = ({ showDeleteModal, setShowDeleteModal, taskId }) => {
  let [loading, setLoading] = useState(false);
  let handleDelete = () => {
    console.log(taskId);
    setLoading(true);
    axios
      .delete(`/api/task/${taskId}`)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        setShowDeleteModal(false);
        toast.success("task has been deleted",{
          position:"top-center"
        })
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error("Opps somthing went wrong",{
          position:"top-center"
        })
      });
  };

  return (
    <div>
      <ToastContainer/>
      <Modal isVisible={showDeleteModal} onClose={setShowDeleteModal}>
        <div className=" text-center">
          <h1 className="text-2xl font-bold">
            {loading ? "Deleting..." : "Delete"}
          </h1>

          <p>Are you sure want to delete?</p>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <button
            onClick={handleDelete}
            type="button"
            className=" rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            OK
          </button>
          <button
            onClick={() => setShowDeleteModal(false)}
            type="button"
            className="rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteTask;
