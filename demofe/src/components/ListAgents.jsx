import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup,Radio, FormControlLabel } from '@mui/material';
import { useState, useEffect } from "react";
import { listAgents, updateAgentRole } from "../services/AuthService";
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

    const handleRoleChange = (agentId, newRole) => {
        // Find the agent with the given ID
        const updatedAgents = agents.map(agent => {
            if (agent.id === agentId) {
                // Update the role of the agent
                agent.role = newRole;
            }
            return agent;
        });
        // Update the state with the new agents data
        setAgents(updatedAgents);
        
        // Call API to update the role in the backend
        updateAgentRole(agentId, newRole)
            .then(response => {
                console.log("Role updated successfully:", response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error("Error updating role:", error);
                // Rollback the state if there's an error
                getAllAgents();
            });
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const agentsForPage = agents.slice(startIndex, endIndex);

    return (
        <div>
            <br />
            <ClippedDrawer />
            <div className="container">
                <h2> Manage Agents</h2>
                <br />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="agents table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={cellStyle}>Agent Name</TableCell>
                                <TableCell style={cellStyle}>Agent Role</TableCell>
                                <TableCell style={cellStyle}>Change Role</TableCell> {/* New column for the radio buttons */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {agentsForPage.map((agent) => (
                                <TableRow key={agent.id}>
                                    <TableCell>{agent.name}</TableCell>
                                    <TableCell>{agent.roles}</TableCell>
                                    <TableCell>
                                        <RadioGroup
                                            value={agent.role}
                                            onChange={(e) => handleRoleChange(agent.id, e.target.value)}
                                        >
                                       <FormControlLabel value="ROLE_USER" control={<Radio/>} label="ROLE_USER" />
                                            <FormControlLabel value="ROLE_ADMIN" control={<Radio/>} label="ROLE_ADMIN" />
                                        </RadioGroup>
                                    </TableCell>
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

export default ListAgents;