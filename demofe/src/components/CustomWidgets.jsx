import { Grid, Paper, Typography } from "@mui/material";
import newUsers from "../assets/newUsers.png";
import glass_bag from "../assets/glass_bag.png";
import glass_orders from "../assets/glass_orders.png";
import glass_bugreports from "../assets/glass_bugreports.png";
import UserCount from "./UserCount";
import TotalUsersCount from "./TotalUsersCount";
import RemovedUsers from "./RemovedUsers";
import TotalAgentsCount from "./TotalAgentsCount";
import TotalUsers from "../assets/TotalUsers.png";
import ActiveUsers from "../assets/ActiveUsers.png";
import UsersRemoved from "../assets/UsersRemoved.png";
import TotalAgents from "../assets/TotalAgents.png";

const CustomWidgets = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center">
            Hi, Welcome back 👋
          </Typography>
        </Grid>

        {/* Weekly Sales */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  src={TotalUsers}
                  alt="TotalUsersCreated"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  <TotalUsersCount/>
                </Typography>
                <Typography variant="h6" align="left">
                Total Users Created
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* New Users */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  src={ActiveUsers}
                  alt="Active Users"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  <UserCount/>
                </Typography>
                <Typography variant="h6" align="left">
                  Active Users
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Item Orders */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  src={UsersRemoved}
                  alt="Removed Users"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  <RemovedUsers/>
                </Typography>
                <Typography variant="h6" align="left">
                  Removed Users
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Bug Reports */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img
                  src={TotalAgents}
                  alt="Total Agents"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  <TotalAgentsCount/>
                </Typography>
                <Typography variant="body1" align="left">
                  Total Agents
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomWidgets;