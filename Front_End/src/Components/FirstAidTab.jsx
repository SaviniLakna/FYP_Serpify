import * as React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import Medic from '../Assets/Images/medic-01.png'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function FistAidTab(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8EA604",
            },
          }}
          textColor="#3d3d3d"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="bg-[#fafafa] text-[#3d3d3d]"
        >
          <Tab label="English" {...a11yProps(0)} />
          <Tab label="සිංහල" {...a11yProps(1)} />
          <Tab label="தமிழ்" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <FistAidTab value={value} index={0} dir={theme.direction}>
          <div className="w-full flex md:flex-row flex-col justify-center items-center">
            <div className="w-full md:w-1/2 text-left flex flex-col">
              <h2 className="text-[1.2rem] font-semibold">
                First aid in snakebite
              </h2>

              <p>
                Effective first aid should always be given to snakebite victims.
                It will prevent or minimise spread of venom that may have been
                introduced into the tissues, as well as complications resulting
                from the bite. Incorrect first aid may cause harm. The following
                simple, practical, effective and safe measures are recommended:
              </p>
            </div>
            <div className="w-full md:w-1/2 text-left flex flex-col relative justify-center items-center">
<img src={Medic} alt="medicine" className="lg:w-[320px] md:w-[320px] w-full" />
            </div>
          </div>
        </FistAidTab>
        <FistAidTab value={value} index={1} dir={theme.direction}>
          සිංහල Body
        </FistAidTab>
        <FistAidTab value={value} index={2} dir={theme.direction}>
          தமிழ் Body
        </FistAidTab>
      </SwipeableViews>
    </Box>
  );
}
