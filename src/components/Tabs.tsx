import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeployNetwork from "./DeployNetwork";
import AddAddress from "./AddAddress";
import GetBalance from "./GetBalance";
import LoadSafe from "./LoadSafe";
import SelectNetwork from "./Dropdown";
import GetOwners from "./GetOwners";
import IsOwner from "./IsOwner";

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
          <Tab label="Add address" {...a11yProps(0)} />
          <Tab label="Deploy safe" {...a11yProps(1)} />
          <Tab label="Select network" {...a11yProps(2)} />
          <Tab label="Load safe" {...a11yProps(3)} />
          <Tab label="Get owners" {...a11yProps(4)} />
          <Tab label="Is owner" {...a11yProps(5)} />
          <Tab label="GetBalance" {...a11yProps(6)} />
          <Tab label="Item Four" {...a11yProps(7)} />
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
      </TabPanel>{" "}
      <TabPanel value={value} index={5}>
        <IsOwner />;
      </TabPanel>{" "}
      <TabPanel value={value} index={6}>
      <GetBalance />
      </TabPanel>{" "}
      <TabPanel value={value} index={7}>
        <GetOwners />;
      </TabPanel>
    </Box>
  );
}
