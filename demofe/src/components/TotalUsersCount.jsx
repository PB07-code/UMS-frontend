
import { listTotalUsers } from '../services/UserService'
import { useState,useEffect } from 'react';

const TotalUsersCount = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Fetch list of users
    listTotalUsers()
      .then(response => {
        // Calculate total number of users
        setTotalUsers(response.data.length);
       
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>{totalUsers}</div>
  )
}

export default TotalUsersCount