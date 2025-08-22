import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase Task Manager/firebaseConfig'
import { useNavigate } from 'react-router-dom'


export default function TaskForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "",
        important: ""
    })
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const navigate= useNavigate();

    useEffect(() => {
        fetchTasks()
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type == "checkbox") {
            setFormData({
                ...formData,
                [name]: checked ? "important" : ""
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const fetchTasks = async () => {
        await getDocs(collection(db, "formData")).then((res) => {
            let detailedData = res.docs.map((item) => ({
                docId: item.id,
                ...item.data()
            }))
            setRecord(detailedData)
        })
    }

    const handleTasks = async (e) => {
        e.preventDefault();

        if (editIndex == null) {
            await addDoc(collection(db, "formData"), formData).then((res) => {
                setRecord([...record, formData])
            })
        } else {
            await updateDoc(doc(db, "formData", editIndex), formData)
            fetchTasks()
        }
        setFormData({
            title: "",
            description: "",
            status: "",
            important: ""
        })
        setEditIndex(null)
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "formData", id)).then((res) => {
            fetchTasks()
        })
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.docId == id)
        setFormData({
            title: singleData.title,
            description: singleData.description,
            status: singleData.status,
            important: singleData.important
        })
        setEditIndex(id)
    }

    return (
        <div>
            <div className='absolute px-2' onClick={()=>navigate("/desboard")}>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg  shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300">
                    Dashboard
                </button>

            </div>
            <div className='max-w-3xl mx-auto mt-15 p-4'>
                <form
                    onSubmit={handleTasks}
                    className='bg-white shadow-lg rounded-xl p-6 space-y-4  hover:shadow-xl'>
                    <h2 className='text-2xl font-semibold text-center text-blue-700'>
                        {editIndex ? 'Update Task' : 'Create Task'}
                    </h2>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Title:</label>
                        <input
                            type='text'
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='Enter title'
                            className='mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Description:</label>
                        <input
                            type='text'
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            placeholder='Enter description'
                            className='mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Status:</label>
                        <div className='flex items-center gap-4 mt-1'>
                            <label className='flex items-center gap-2'>
                                <input
                                    type='radio'
                                    name='status'
                                    value='completed'
                                    checked={formData.status === 'completed'}
                                    onChange={handleChange}
                                />
                                <span>Completed</span>
                            </label>
                            <label className='flex items-center gap-2'>
                                <input
                                    type='radio'
                                    name='status'
                                    value='in progress'
                                    checked={formData.status === 'in progress'}
                                    onChange={handleChange}
                                />
                                <span>In Progress</span>
                            </label>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            name='important'
                            checked={formData.important === 'important'}
                            onChange={handleChange}
                        />
                        <span className='text-sm'>Important</span>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <button
                            type='submit'
                            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
                        >
                            {editIndex ? 'Update' : 'Submit'}
                        </button>
                        <button
                            type='button'
                            onClick={() => {
                                setFormData({ title: '', description: '', status: '', important: '' });
                                setEditIndex(null);
                            }}
                            className='bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition'
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* Task List */}
            <div className='mt-10 w-full max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {record.map((e, i) => (
                    <div
                        key={i}
                        className='bg-white shadow-md rounded-lg p-5 relative hover:shadow-lg transition'>
                        <h3 className='text-xl font-bold text-gray-800 mb-1'>{e.title}</h3>
                        <p className='text-sm text-gray-600 mb-2'>{e.description}</p>
                        <p className='text-xs text-blue-600 font-medium'>{e.status}</p>
                        {e.important && (
                            <span className='text-xs bg-yellow-300 px-2 py-1 rounded-md inline-block mt-2'>
                                {e.important}
                            </span>
                        )}
                        <div className='flex justify-end gap-2 mt-4'>
                            <button
                                onClick={() => handleEdit(e.docId)}
                                className='text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-sm'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(e.docId)}
                                className='text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
