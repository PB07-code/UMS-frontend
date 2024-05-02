import { Grid, Paper, Typography } from "@mui/material";
import newUsers from "../assets/newUsers.png";
import glass_bag from "../assets/glass_bag.png";
import glass_orders from "../assets/glass_orders.png";
import glass_bugreports from "../assets/glass_bugreports.png";
import UserCount from "./UserCount";

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
                  src={glass_bag}
                  alt="Weekly Sales"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  714K
                </Typography>
                <Typography variant="body1" align="left">
                 Active Users
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
                  src={newUsers}
                  alt="New Users"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  1.35m
                </Typography>
                <Typography variant="body1" align="left">
                  New Users
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
                  src={glass_orders}
                  alt="Item Orders"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  1.72m
                </Typography>
                <Typography variant="body1" align="left">
                  Item Orders
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
                  src={glass_bugreports}
                  alt="Bug Reports"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom align="left">
                  234
                </Typography>
                <Typography variant="body1" align="left">
                  Bug Reports
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