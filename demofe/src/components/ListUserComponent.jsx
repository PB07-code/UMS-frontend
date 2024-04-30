import { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { listUsers, deleteUser } from "../services/UserService";
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../services/AuthService'
import ClippedDrawer from './ClippedDrawer'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const ListUserComponent = () => {
  
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Number of users per page
  const [searchQuery, setSearchQuery] = useState("");
  const navigator = useNavigate();


  const cellStyle = {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 'large',
  };

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

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function goToPage(page) {
    setCurrentPage(page);
  }

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userPhone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userDesignation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.isDeleted.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // Calculate the users to display for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const usersForPage = filteredUsers.slice(startIndex, endIndex);

  return (
    <>
    <br/>
    <ClippedDrawer/>
    <div className="container">
      <h2 className="text-center"> Current Active Users</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        { 
          isAdmin &&
          <Button variant="contained" color="primary" onClick={addNewUser}>Add User</Button>
        }
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell style={cellStyle}>User Name</TableCell>
              <TableCell style={cellStyle}>User Email</TableCell>
              <TableCell style={cellStyle}>User Phone</TableCell>
              <TableCell style={cellStyle}>User Address</TableCell>
              <TableCell style={cellStyle}>User Designation</TableCell>
              { 
                isAdmin &&
                <TableCell style={cellStyle}>Actions</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {usersForPage.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
                <TableCell>{user.userPhone}</TableCell>
                <TableCell>{user.userAddress}</TableCell>
                <TableCell>{user.userDesignation}</TableCell>
                <TableCell>
                  { 
                    isAdmin &&
                    <>
                      <EditIcon style={{ color: 'green' }} onClick={() => updateUser(user.userId)} />
                      <span style={{ margin: '0 10px' }}></span> 
                      <DeleteOutlineIcon style={{ color: 'red' }} onClick={() => removeUser(user.userId)} />
                    </>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredUsers.length / pageSize) }, (_, index) => (
          <Button key={index} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
        ))}
      </div>
    </div>
    </>
  );
};

export default ListUserComponent;
