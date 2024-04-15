import ClippedDrawer from "./ClippedDrawer";
import CustomWidgets from "./CustomWidgets";
import Grid2 from "./Grid2";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }} >
    
      {/* Add a Clipped Drawer here*/}
      <ClippedDrawer/>
     
      {/* Main Content */}
      <div style={{flexGrow:1,marginLeft: "2px",padding: "30px"}}>       
      <CustomWidgets/>
      <Grid2/>
     
      </div>
    </div>
  );
};

export default Dashboard;
