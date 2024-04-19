import { Grid, Paper, Typography } from "@mui/material";
import PieArcLabel from "./PieArcLabel";
import Chart from "./Chart";

const Grid2 = () => {
  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: 10, alignItems: "center" }}>
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Website Visits
              </Typography>
              <Typography variant="h6">(+43%) than last year</Typography>
            </div>
            <Chart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            style={{ padding: 10, height: "100%", overflow: "auto" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Current Visits
            </Typography>
            <div style={{ padding: 20, height: "100%" }}>
              <PieArcLabel />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grid2;