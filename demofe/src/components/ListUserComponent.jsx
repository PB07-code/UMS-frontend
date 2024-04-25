import { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { listUsers, deleteUser } from "../services/UserService";
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService'
import ClippedDrawer from './ClippedDrawer'

const ListUserComponent = () => {
  
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Number of users per page
  const navigator = useNavigate();

  const isAdmin = isAdminUser();

  useEffect(() => {
    getAllUsers();
  }, []); // Fetch users once on component mount

  function getAllUsers() {
    listUsers().then((response) => {
      setUsers(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  function addNewUser() {
    navigator('/add-user');
  }

  function updateUser(id) {
    navigator(`/edit-user/${id}`);
  }

  function removeUser(id) {
    deleteUser(id).then(() => {
      // If successful, refresh the user list for the current page
      getAllUsers();
    }).catch(error => {
      console.error(error);
    });
  }

  function goToPage(page) {
    setCurrentPage(page);
  }

  // Calculate the users to display for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const usersForPage = users.slice(startIndex, endIndex);

  return (
    <>
    <br/>
    <ClippedDrawer/>
    <div className="container">
      <h2 className="text-center"> Current Active Users</h2>
      <div className="col text-center">
        { 
            isAdmin &&
        <Button variant="contained" color="primary" onClick={addNewUser}>Add User</Button>
}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>User Id</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>User Email</TableCell>
              <TableCell>User Phone</TableCell>
              <TableCell>User Address</TableCell>
              <TableCell>User Designation</TableCell>
              { 
            isAdmin &&
              <TableCell>Actions</TableCell>
}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersForPage.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
                <TableCell>{user.userPhone}</TableCell>
                <TableCell>{user.userAddress}</TableCell>
                <TableCell>{user.userDesignation}</TableCell>
                <TableCell>
                  { 
            isAdmin &&
                  <Button variant="contained" color="primary" onClick={() => updateUser(user.userId)}>Update</Button>
}
                 { 
            isAdmin &&
                  <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }} onClick={() => removeUser(user.userId)}>Delete</Button>
                 }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / pageSize) }, (_, index) => (
          <Button key={index} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
        ))}
      </div>
    </div>
    </>
  );
};

export default ListUserComponent;
