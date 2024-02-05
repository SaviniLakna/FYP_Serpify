import React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  value: number;
  index: number;
  snakeData: {
    snakeID: string,
    sinhalaName: string,
    venomusLeveleng: string,
    venomusLeveltam: string,
    venomusLevelsinhala: string,
    englishName: string,
    sinhaladescription: string,
    engdescription: string,
    tamdescription: string,
    localnames : string; 
  };
}

function PredictionResultTab(props: TabPanelProps) {
  const { children, value, index, snakeData, ...other } = props;

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

interface FullWidthTabsProps {
  snakeIdentifiedData: {
    snakeID: string,
    sinhalaName: string,
    venomusLeveleng: string,
    venomusLeveltam: string,
    venomusLevelsinhala: string,
    englishName: string,
    sinhaladescription: string,
    engdescription: string,
    tamdescription: string,
    localnames : string;
  };
}

export default function FullWidthTabs(props: FullWidthTabsProps) {
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
        {/* Pass snakeData to each PredictionResultTab */}
        <PredictionResultTab
          value={value}
          index={0}
          dir={theme.direction}
          snakeData={props.snakeIdentifiedData}
        >
          English data values of identified snakeID
        </PredictionResultTab>

        <PredictionResultTab
          value={value}
          index={1}
          dir={theme.direction}
          snakeData={props.snakeIdentifiedData}
        >
          <table className="w-full">
            <tr>
              <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10 ">
                නාමය
              </td>
              <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">
                {props.snakeIdentifiedData.sinhalaName}
              </td>
            </tr>
            <tr>
              <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">
                විෂ ස්වභාවය
              </td>
              <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">
                {props.snakeIdentifiedData.venomusLevelsinhala}
              </td>
            </tr>
            <tr>
              <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">
                ලක්ෂණ
              </td>
              <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">
                {props.snakeIdentifiedData.sinhaladescription.map(
                  (list, index) => (
                    <li>{list}</li>
                  )
                )}
              </td>
            </tr>
            <tr>
              <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">
              වෙනත් නම් 
              </td>
              <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">
                {props.snakeIdentifiedData.localnames.map(
                  (list, index) => (
                    <li>{list}</li>
                  )
                )}
              </td>
            </tr>

          </table>
        </PredictionResultTab>

        <PredictionResultTab
          value={value}
          index={2}
          dir={theme.direction}
          snakeData={props.snakeIdentifiedData}
        >
          Tamil data values of identified snakeID
        </PredictionResultTab>
      </SwipeableViews>
    </Box>
  );
}
