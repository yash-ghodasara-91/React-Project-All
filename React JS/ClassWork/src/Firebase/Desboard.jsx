import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'

export default function Dashboard() {
    const [userId,setUserId] = useState()
    const [task,setTask] = useState("")
    const [priority,setPriority] = useState("")
    const [record,setRecord] = useState("")
    const [editIndex, setEditIndex] =  useState(null)
    

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUserId(user.uid)
        })
    },[])

    useEffect(()=>{
        fetchUser()
        fetchTasks()
    },[userId])

    const fetchUser = async()=>{
        if(userId){
            await getDoc(doc(db, "Users", userId)).then((res)=>{
                console.log(res.data());
                
            })
        }
    }

    const fetchTasks = async()=>{
        await getDocs(collection(db,"Tasks")).then((res)=>{
            let detailedData = res.docs.map((item) =>({
                docId : item.id,
                ...item.data()
            }));
            setRecord(detailedData)
        })
    }

    const handleTask = async()=>{
       if(editIndex == null) {
         await addDoc(collection(db,"Tasks"),{task,priority,userId}).then((res)=>{
            setRecord([...record, { task,priority,userId}]);
        })
       } else {
      await updateDoc(doc(db, "Tasks", editIndex),{
        task, priority, userId
      })
        fetchTasks()
    }
    setTask("")
    setPriority("")
    setEditIndex(null)
    }

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Tasks", id)).then((res) => {
            fetchTasks()
            
        })
    }

    const handleLogOut = async () => {
        await auth.signOut()
    }

    const handleEdit = (id) => {
        let singleData = record.find((item) => item.docId == id)
        setTask(singleData.task),
        setPriority(singleData.priority),
        setEditIndex(id)
        console.log(id);
        
    }

  return (
    <div>
      <h1>deshboard</h1>

    <input type="text" placeholder='Enter The Task Name' value={task} onChange={(e)=>setTask(e.target.value)} />
    <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option hidden>select the priority</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
    </select>
    <button onClick={handleTask}>{editIndex == null ? "Add Task" : "Update Task"}</button>

    {
        record &&
        record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.userId}</li>
                <li>{e.task}</li>
                <li>{e.priority}</li>
                <button onClick={() => handleDelete(e.docId)}>Delete</button>
                <button onClick={() => handleEdit(e.docId)}>Edit</button>
            </ul>
        })
    }
    </div>
  )
}