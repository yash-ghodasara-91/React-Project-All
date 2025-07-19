import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TaskManager = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium'
  });
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("TaskData")) || [];
    setTasks(stored);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editId === null) {
      const newTask = { id: Date.now(), ...formData, status: 'Pending' };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem("TaskData", JSON.stringify(newTasks));
    } else {
      const updatedTasks = tasks.map((t) =>
        t.id === editId ? { ...t, ...formData } : t
      );
      setTasks(updatedTasks);
      localStorage.setItem("TaskData", JSON.stringify(updatedTasks));
      setEditId(null);
    }

    setFormData({
      title: '',
      description: '',
      priority: 'Medium'
    });
  };

  // Delete task
  const handleDelete = (id) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
    localStorage.setItem("TaskData", JSON.stringify(filtered));
  };

  // Approve task
  const handleApprove = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: 'Approved' } : t
    );
    setTasks(updated);
    localStorage.setItem("TaskData", JSON.stringify(updated));
  };

  // Edit task
  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority
    });
    setEditId(task.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-6">
        {/* Animated Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-indigo-600 mb-6"
        >
          📋 Task Manager
        </motion.h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Task Title"
            onChange={handleChange}
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="description"
            value={formData.description}
            placeholder="Task Description"
            rows={3}
            onChange={handleChange}
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium"
          >
            {editId ? 'Update Task ✏️' : 'Add Task ➕'}
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-4">
          {
            tasks.length === 0 ? (
              <p className="text-center text-gray-500">No tasks available.</p>
            ) : (
              tasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md p-5 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    {/* Task Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{task.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{task.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className={`px-2 py-1 rounded-full font-medium ${task.priority === 'High'
                            ? 'bg-red-100 text-red-600'
                            : task.priority === 'Medium'
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-green-100 text-green-600'
                          }`}>
                          🚦 Priority: {task.priority}
                        </span>

                        <span className={`px-2 py-1 rounded-full font-medium ${task.status === 'Approved'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                          }`}>
                          📌 Status: {task.status}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2 items-end">
                      <motion.button
                        whileHover={task.status !== 'Approved' ? { scale: 1.05 } : {}}
                        whileTap={task.status !== 'Approved' ? { scale: 0.95 } : {}}
                        onClick={() => handleEdit(task)}
                        disabled={task.status === 'Approved'}
                        className={`w-fit px-4 py-1.5 text-sm rounded-lg font-medium shadow-sm transition-all duration-200 ${task.status === 'Approved'
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                      >
                        ✏️ Edit
                      </motion.button>

                      <motion.button
                        whileHover={task.status !== 'Approved' ? { scale: 1.05 } : {}}
                        whileTap={task.status !== 'Approved' ? { scale: 0.95 } : {}}
                        onClick={() => handleApprove(task.id)}
                        disabled={task.status === 'Approved'}
                        className={`w-fit px-4 py-1.5 text-sm rounded-lg font-medium shadow-sm transition-all duration-200 ${task.status === 'Approved'
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                          }`}
                      >
                        ✅ Approve
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDelete(task.id)}
                        className="w-fit px-4 py-1.5 text-sm rounded-lg font-medium shadow-sm bg-red-600 text-white hover:bg-red-700 transition-all duration-200"
                      >
                        🗑️ Delete
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
