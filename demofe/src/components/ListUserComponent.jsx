import  { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { listUsers, deleteUser } from "../services/UserService";
import { useNavigate } from 'react-router-dom';

const ListUserComponent = () => {
  
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    listUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
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
    console.log(id);

    deleteUser(id).then(() => {
      getAllUsers();
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className="container">
      <h2 className="text-center"> Current Active Users</h2>
      <div className="col text-center">
        <Button variant="contained" color="primary" onClick={addNewUser}>Add User</Button>
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
                <TableCell>{user.userPhone}</TableCell>
                <TableCell>{user.userAddress}</TableCell>
                <TableCell>{user.userDesignation}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => updateUser(user.userId)}>Update</Button>
                  <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }} onClick={() => removeUser(user.userId)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
};

export default ListUserComponent;
