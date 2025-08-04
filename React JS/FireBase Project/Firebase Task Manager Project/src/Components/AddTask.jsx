import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from '../../firebaseConfig';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const AddTask = ({ tasks }) => {
    const { id } = useParams();
  const [formData, setFormData] = useState({
    task: '',
    priority: '',
    priority: 'Medium'
  });
  const [editIndex, setEditIndex] = useState(null);
  const [record, setRecord] = useState([]);
  const [userId, setUserId] = useState('');
  const [editId, setEditId] = useState(false)

  const navigate = useNavigate();

  // Get userId on mount
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  // Fetch tasks when userId is available
  useEffect(() => {
    if (userId) {
      fetchTasks();
    }
  }, [userId]);

  const fetchTasks = async () => {
    const res = await getDocs(collection(db, 'tasks'));
    const detailedData = res.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data()
    }));
    setRecord(detailedData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTask = async (e) => {
    e.preventDefault(); // 👈 stop page reload

    if (editIndex === null) {
      await addDoc(collection(db, 'tasks'), {
        ...formData,
        userId,
        status: "Pending"
      });
    } else {
      await updateDoc(doc(db, 'tasks', editIndex), {
        ...formData,
        userId
      });
      fetchTasks();
    }

    navigate('/desboard');
    setFormData({ title: '', description: '', priority: '' });
    setEditIndex(null);
  };


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
    fetchTasks();
  };

  const handleEdit = (id) => {
    const singleData = record.find((item) => item.docId === id);
    setFormData({
      task: singleData.task || "" ,
      priority: singleData.priority || "" ,
      priority: singleData.priority || 'Medium',
    });
    setEditIndex(id);
  };

  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl mt-16 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-indigo-600 mb-6"
        >
          📋 {editId ? 'Edit Task' : 'Add New Task'}
        </motion.h1>

        <form onSubmit={handleTask} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Task Title"
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="description"
            value={formData.description}
            placeholder="Task Description"
            rows={3}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold"
          >
            {editId ? 'Update Task ✏️' : 'Add Task ➕'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
