import { Grid, Paper, Typography } from "@mui/material";
import SpiderChart from "./SpiderChart";
import BarChart from "./BarChart";

const Grid2 = () => {
  return (
    <div>
      <Grid container spacing={1} style={{ marginTop: "20px" }}>
        <Grid item xs={8}>
          <Paper elevation={3} style={{ padding: 10, alignItems: "center" }}>
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Conversion Rates
              </Typography>
              <Typography variant="h6" >
               (+43%) than last year
              </Typography>
            </div>
            <BarChart/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: 10, alignItems: "center", overflow: "auto" }}>
            <div style={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Current Subject
              </Typography>
            </div>
            <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
              {/* <BasicPie/> */}
             <SpiderChart/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Grid2;
