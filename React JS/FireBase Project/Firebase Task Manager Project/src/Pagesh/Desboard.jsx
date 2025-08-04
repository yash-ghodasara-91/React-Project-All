import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AddTask from "../Components/AddTask";

const Dashboard = ({ userId }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("🔥 Fetched Tasks:", data);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [showAdd]); // re-fetch when form toggles

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    fetchTasks();
  };

  const handleApprove = async (id) => {
    const ref = doc(db, "tasks", id);
    await updateDoc(ref, { status: "Approved" });
    fetchTasks();
  };

  return (
    <div className="p-6 bg-gray-200 pt-18 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📋 Desboard</h1>
        <button
          onClick={() => navigate("/add-task")} // 👈 navigate to page
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task Form */}
      {showAdd && (
        <div className="mb-10">
          <AddTask />
        </div>
      )}

      {/* Tasks */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-blue-500 flex justify-between items-start"
          >
            {/* Task Info */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {task.title}
              </h2>
              <p className="text-gray-600 mb-3  line-clamp-4">{task.description}</p>

              <div className="flex flex-wrap gap-3 text-sm">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium ${task.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : task.priority === "Low"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  🚦 Priority: {task.priority}
                </span>

                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium ${task.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                    }`}
                >
                  📌 Status: {task.status}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 items-end ml-4">
              <button
                onClick={() => navigate(`/edit-task/${task.id}`)}
                disabled={task.status === "Approved"}
                className={`text-white px-4 py-1.5 rounded-md text-sm font-semibold ${task.status === "Approved"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                ✏️ Edit
              </button>


              <button
                disabled={task.status === "Approved"}
                onClick={() => handleApprove(task.id)}
                className={`text-white px-4 py-1.5 rounded-md text-sm font-semibold ${task.status === "Approved"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                  }`}
              >
                ✅ Approve
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
