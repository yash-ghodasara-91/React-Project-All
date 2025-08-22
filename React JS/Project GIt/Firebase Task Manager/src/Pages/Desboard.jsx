import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/login'); 
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const docRef = doc(db, 'Users', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200">
      {userData ? (
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300 hover:scale-105">

          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{userData.name}</h2>
            <p className="text-sm text-gray-500">@{userData.username}</p>
          </div>

          <div className="mt-6 space-y-4 text-gray-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold">📧 Email</span>
              <span className="text-right">{userData.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">👤 Username</span>
              <span className="text-right">{userData.username}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">📱 Phone</span>
              <span className="text-right">{userData.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">🎂 Age</span>
              <span className="text-right">{userData.age}</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Loading user data...</p>
      )}

      {/* Add Task Button - Card ke bahar */}
      {userData && (
        <button
          onClick={() => navigate('/taskform')}
          className=" absolute top-150 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Task
        </button>
      )}
    </div>
  );
};

export default Dashboard;
