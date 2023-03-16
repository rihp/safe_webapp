import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeployNetwork from "./DeployNetwork";
import AddAddress from "./AddAddress";
import LoadSafe from "./LoadSafe";
import SelectNetwork from "./Dropdown";
import GetOwners from "./GetOwners";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="add address" {...a11yProps(0)} />
          <Tab label="deploy safe" {...a11yProps(1)} />
          <Tab label="select network" {...a11yProps(2)} />
          <Tab label="load safe" {...a11yProps(3)} />
          <Tab label="get owners" {...a11yProps(4)} />
          <Tab label="is owner" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Four" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddAddress />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DeployNetwork />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SelectNetwork />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LoadSafe />;
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GetOwners />;
      </TabPanel>
    </Box>
  );
}
