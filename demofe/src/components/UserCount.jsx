import  { useState, useEffect } from 'react';
import { listUsers } from '../services/UserService';

function UserCount() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Fetch list of users
    listUsers()
      .then(response => {
        // Calculate total number of users
        setActiveUsers(response.data.length);
       
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2> {activeUsers}</h2>
    </div>
  );
}

export default UserCount;
