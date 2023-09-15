/** @format */
"use client";

import AddTask from "@/components/AddTask";
import DeleteTask from "@/components/DeleteTask";
import EditTask from "@/components/EditTask";
import Modal from "@/components/Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Task = () => {
  let [showTaskModal, setShowTaskModal] = useState(false);
  let [showEditModal, setShowEditModal] = useState(false);
  let [showDeleteModal, setShowDeleteModal] = useState(false);
  let [taskId, setTaskId] = useState("");
  let [deleteTaskId, setDeleteTaskId] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState([]);

  let route = useRouter();

  let getData = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get("/api/task");
      // console.log(response.data);
      setData(response.data.reverse());
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [showTaskModal, showEditModal, showDeleteModal]);

  let handleEditTask = (taskId) => {
    setTaskId(taskId);
    setShowEditModal(true);
  };
  let handleDelete = (id) => {
    setDeleteTaskId(id);
    setShowDeleteModal(true);
  };

  return isLoading ? (
    <h1 className="text-2xl mt-[45px] md:mt-[50px] lg:mt-[65px] m-2 min-h-screen">Loading...</h1>
  ) : (
    <div className=" m-2 min-h-screen mt-[45px] md:mt-[50px] lg:mt-[65px]">
      <div className="grid justify-end">
        {data.length > 0 && (
          <button
            onClick={() => setShowTaskModal(true)}
            type="button"
            className="m-2 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add task
          </button>
        )}
      </div>
      {data.length === 0 && !isLoading && (
        <div className="text-center font-bold">
          {" "}
          <h1 className="text-2xl">Oops! You have no task</h1>
          <h1>Create you first task!</h1>
          <button
            onClick={() => setShowTaskModal(true)}
            type="button"
            className="mt-4 rounded-sm bg-blue-700 px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add task
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((ele, i) => {
          return (
            <div
              key={i}
              className={`rounded-md border m-1 sm:m-1 md:m-2  ${
                ele.status === "pending"
                  ? "bg-red-400"
                  : ele.status === "progress"
                  ? "bg-indigo-400"
                  : "bg-green-400"
              } `}
            >
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                className=" w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{ele.title}</h1>
                <p className="mt-3 text-sm">
                  <b>Status : </b> {ele.status}
                </p>
                <p className="mt-3 text-sm">{ele.description}</p>
                <div className="flex justify-center gap-2">
                  {/* <button
                  onClick={() => handleEditTask(ele._id)}
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button> */}
                  <button
                    onClick={() => handleEditTask(ele._id)}
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ele._id)}
                    type="button"
                    className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddTask
        showTaskModal={showTaskModal}
        setShowTaskModal={setShowTaskModal}
      />
      <EditTask
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        taskId={taskId}
      />
      <DeleteTask
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        taskId={deleteTaskId}
      />
    </div>
  );
};

export default Task;
