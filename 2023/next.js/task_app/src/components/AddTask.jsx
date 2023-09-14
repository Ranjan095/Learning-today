/** @format */

import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { toast } from "react-toastify";
let obj = {
  title: "",
  description: "",
};
const AddTask = ({ showTaskModal, setShowTaskModal }) => {
  let [loading, setLoading] = useState(false);
  let [task, setTask] = useState(obj);

  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/task", task)
      .then((res) => {
        setLoading(false);
        setTask(obj);
        setShowTaskModal(false);
        toast.success("Task has been added!", {
          position: "top-center",
        });
        // console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <Modal isVisible={showTaskModal} onClose={() => setShowTaskModal(false)}>
        <div className="grid place-content-center">
          <h1 className="text-4xl">Add Task</h1>
        </div>
        <form onSubmit={handleSubmit} action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Title{" "}
              </label>
              <div className="mt-2">
                <input
                  required
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  value={task.title}
                  placeholder="Title"
                ></input>
              </div>
            </div>
            {/* <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Status{" "}
              </label>
            </div>
            <div className="mt-2">
              <select
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value })}
                className="flex h-10 rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option>pending</option>
                <option>progress</option>
                <option>completed</option>
              </select>
            </div> */}
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
                  className=" h-20 md:h-25 lg:h-30 w-full rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
