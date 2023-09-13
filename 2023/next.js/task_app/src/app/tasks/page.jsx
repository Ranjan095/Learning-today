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
      setData(response.data);
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

  // let handleLogout = async () => {
  //   try {
  //     let res = await axios.get("/api/users/logout");
  //     console.log(res.data);

  //     toast.success(res.data, {
  //       position: "top-center",
  //     });
  //     route.push("/login");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Oops somting went wrong", {
  //       position: "top-center",
  //     });
  //   }
  // };

  return (
    <div className=" m-3 min-h-screen">
      {/* <h1 className="text-4xl"> {isLoading ? "Loading..." : ""} </h1> */}
      <div className="grid justify-end">
        {/* <button
          onClick={handleLogout}
          type="button"
          class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          LogOut
        </button> */}
        <button
          onClick={() => setShowTaskModal(true)}
          type="button"
          class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add task
        </button>
      </div>

      <div className="grid grid-cols-3">
        {data?.map((ele, i) => {
          return (
            <div key={i} class="w-[300px] rounded-md border">
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="h-[200px] w-full rounded-md object-cover"
              />
              <div class="p-4">
                <h1 class="text-lg font-semibold">{ele.title}</h1>
                <p class="mt-3 text-sm text-gray-600">
                  <b>Status : </b> {ele.status}
                </p>
                <p class="mt-3 text-sm text-gray-600">{ele.description}</p>
                <div className="flex justify-center gap-2">
                  {/* <button
                  onClick={() => handleEditTask(ele._id)}
                  type="button"
                  class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read
                </button> */}
                  <button
                    onClick={() => handleEditTask(ele._id)}
                    type="button"
                    class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ele._id)}
                    type="button"
                    class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
