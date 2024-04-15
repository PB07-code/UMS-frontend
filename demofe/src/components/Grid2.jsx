import { Grid, Paper, Typography } from "@mui/material";
import PieArcLabel from "./PieArcLabel";
import Chart from "./Chart";

const Grid2 = () => {
  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: "20px" }}>
        <Grid item xs={8}>
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: 10, alignItems: "center" }}>
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Current Visits
              </Typography>
            </div>
            <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
              {/* <BasicPie/> */}
              <PieArcLabel />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grid2;
