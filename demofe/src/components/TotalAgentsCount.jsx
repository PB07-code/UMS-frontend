import React from 'react'
import { listAgents } from '../services/AuthService';
import  { useState, useEffect } from 'react';

const TotalAgentsCount = () => {
    const [totalAgents, setTotalAgents] = useState(0);

    useEffect(() => {
      // Fetch list of users
      listAgents()
        .then(response => {
          // Calculate total number of users
          setTotalAgents(response.data.length);
         
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }, []);

  return (
    <div>{totalAgents}</div>
  )
}

export default TotalAgentsCount