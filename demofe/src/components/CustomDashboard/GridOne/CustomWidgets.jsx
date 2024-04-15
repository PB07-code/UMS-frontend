import { Grid, Paper, Typography } from "@mui/material";
import newUsers from "../assets/newUsers.png";
import glass_bag from "../assets/glass_bag.png";
import glass_orders from "../assets/glass_orders.png";
import glass_bugreports from "../assets/glass_bugreports.png";

const CustomWidgets = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Hi, Welcome back 👋
          </Typography>
          {/* <Typography variant="body1">Dashboard</Typography> */}
        </Grid>

        {/* Weekly Sales */}
        <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{ padding: 20, display: "flex", alignItems: "center" }}
          >
            <img
              src={glass_bag}
              alt="Weekly Sales"
              style={{ width: 100, height: 100, marginRight: 30 }}
            />
            <div style={{ flexGrow: 1, textAlign: "right" }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                714k
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "rgb(145, 158, 171)" }}
              >
                Weekly Sales
              </Typography>
            </div>
          </Paper>
        </Grid>

        {/* New Users */}
        <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{ padding: 20, display: "flex", alignItems: "center" }}
          >
            <img
              src={newUsers}
              alt="New Users"
              style={{ width: 100, height: 100, marginRight: 30 }}
            />
            <div style={{ flexGrow: 1, textAlign: "right" }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                1.35m
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "rgb(145, 158, 171)" }}
              >
                New Users
              </Typography>
            </div>
          </Paper>
        </Grid>

        {/* Item Orders */}
        <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{ padding: 20, display: "flex", alignItems: "center" }}
          >
            <img
              src={glass_orders}
              alt="Item Orders"
              style={{ width: 100, height: 100, marginRight: 30 }}
            />
            <div style={{ flexGrow: 1, textAlign: "right" }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                1.72m
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "rgb(145, 158, 171)" }}
              >
                Item Orders
              </Typography>
            </div>
          </Paper>
        </Grid>

        {/* Bug Reports */}
        <Grid item xs={3}>
          <Paper
            elevation={3}
            style={{ padding: 20, display: "flex", alignItems: "center" }}
          >
            <img
              src={glass_bugreports}
              alt="Bug Reports"
              style={{ width: 100, height: 100, marginRight: 30 }}
            />
            <div style={{ flexGrow: 1, textAlign: "right" }}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                234
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", color: "rgb(145, 158, 171)" }}
              >
                Bug Reports
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomWidgets;
