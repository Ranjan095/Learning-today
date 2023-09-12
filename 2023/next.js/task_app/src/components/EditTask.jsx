/** @format */
// "use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let obj = {
  title: "",
  status: "",
  description: "",
};

const EditTask = ({ showEditModal, setShowEditModal, taskId }) => {
  let [loading, setLoading] = useState(false);
  let [task, setTask] = useState(obj);
  //   console.log(taskId);
  let getTask = async () => {
    try {
      let response = await axios.get(`/api/task/${taskId}`);
      console.log(response.data);
      let { title, status, description } = response.data;
      setTask({ ...task, title, status, description });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTask();
  }, [taskId]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(`/api/task/${taskId}`, task)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setShowEditModal(false);
        toast.success("task has been edited..", {
          position: "top-center",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error("Oops somthing went wrong..", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="min-w-full">
      <ToastContainer />
      <Modal isVisible={showEditModal} onClose={() => setShowEditModal(false)}>
        <div>
          <div className="grid place-content-center">
            <h1 className="text-2xl">Edit Task</h1>
            <div className="border-b-4 border-yellow-300 rounded-full"></div>
          </div>
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="mt-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Title{" "}
                </label>
                <div className="mt-2">
                  <input
                    required
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={task.title}
                    placeholder="Title"
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Status{" "}
                </label>
              </div>
              <div className="mt-2">
                <select
                  required
                  value={task.status}
                  onChange={(e) => setTask({ ...task, status: e.target.value })}
                  className="flex h-10 rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>pending</option>
                  <option>progress</option>
                  <option>completed</option>
                </select>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Description{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    required
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                    value={task.description}
                    className="flex h-10 w-full rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditTask;
