import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

import { Alert } from "flowbite-react";

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
          <Alert color="info">
            <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
          </Alert>  
          alert("Log Out Successful");
          navigate(from, {replace: true});
        })
        .catch((error) => {
        
        });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className="bg-red-700 px-8 py-2 text-white rounded">Logout</button>
    </div>
  )
}

export default Logout;