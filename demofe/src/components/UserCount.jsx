import  { useState, useEffect } from 'react';
import { listUsers } from '../services/UserService';

function UserCount() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Fetch list of users
    listUsers()
      .then(users => {
        // Calculate total number of users
        setTotalUsers(users.length);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Total Users: {totalUsers}</h2>
    </div>
  );
}

export default UserCount;
