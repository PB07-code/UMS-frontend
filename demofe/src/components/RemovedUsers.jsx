import React from 'react'
import { useState,useEffect } from 'react';
import { listRemovedUsers } from '../services/UserService';


const RemovedUsers = () => {
    const [removedUsers, setRemovedUsers] = useState(0);

    useEffect(() => {
      // Fetch list of users
      listRemovedUsers()
        .then(response => {
          // Calculate total number of users
          setRemovedUsers(response.data.length);
         
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }, []);
  
  return (
    <div>{removedUsers}</div>
  )
}

export default RemovedUsers