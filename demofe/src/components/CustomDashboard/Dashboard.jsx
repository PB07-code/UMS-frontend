import { Grid, Paper, Typography } from "@mui/material";
import ClippedDrawer from "./ClippedDrawer";
import PieArcLabel from "./PieArcLabel";
import Chart from "./Chart";
import CustomWidgets from "./CustomWidgets";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Add a Clipped Drawer here*/}
      <ClippedDrawer />

      {/* Main Content */}
      <div style={{ flexGrow: 1, marginLeft: "20px", padding: "30px" }}>
        <CustomWidgets />

        <Grid container spacing={1} style={{ marginTop: "20px" }}>
          <Grid item xs={8}>
          <Paper elevation={3} style={{ padding: 10, alignItems: "center" }}>
              <div style={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Website Visits
(+43%) than last year
                </Typography>
              </div>
            <Chart />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} style={{ padding: 10, alignItems: "center" }}>
              <div style={{ flexGrow: 1, textAlign: "left" }}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  Current Visits
                </Typography>
              </div>
              <div
                style={{ padding: 20, display: "flex", alignItems: "center" }}
              >
                <PieArcLabel />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
