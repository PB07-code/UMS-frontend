import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useState ,useEffect} from "react";
import { listAgents } from "../services/AuthService";
import ClippedDrawer from "./ClippedDrawer";

const ListAgents = () => {

    const [agents, setAgents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // Number of users per page

    useEffect(() => {
        getAllAgents();
      }, []); // Fetch agents once on component mount
    
      function getAllAgents() {
        listAgents().then((response) => {
          setAgents(response.data);
        }).catch((error) => {
          console.error(error);
        });
      }

      const cellStyle = {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 'large',
      };

      function goToPage(page) {
        setCurrentPage(page);
      }
      
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const agentsForPage = agents.slice(startIndex, endIndex);
  return (
 <div>
    <br/>
    <ClippedDrawer/>
    <div className="container">
      
      
      
      <h2 > Manage Agents</h2>
<br></br>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="agents table">
          <TableHead>
            <TableRow>
              <TableCell style={cellStyle}>Agent Name</TableCell>
              <TableCell style={cellStyle}>Agent Role</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {agentsForPage.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>{agent.name}</TableCell>
                 <TableCell>{agent.roles}</TableCell> 
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        {Array.from({ length: Math.ceil(agents.length / pageSize) }, (_, index) => (
          <Button key={index} onClick={() => goToPage(index + 1)}>{index + 1}</Button>
        ))}
      </div>
      </div>
     
      </div>
      
    
  );
};


export default ListAgents