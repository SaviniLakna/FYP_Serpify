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
          <div className="w-full text-left text-[#3d3d3d]">
          <h2 className="text-[1.2rem] font-semibold mb-10">
                To do list
              </h2>
            <ol className="flex flex-col list-decimal space-y-3" >
              <li>The commonest reaction following snakebite is fear — the victim thinks of death. Reassurance is vital and should be done in a positive and authoritative manner and 
                continued for as long as necessary. The following points should be emphasised :
                

                <ul className="list-disc ml-10">
                <li>
                Most snakes are not venomous.
                </li>
                <li>
                Even if a biting snake is venomous, it may not inject venom.
                </li>
                <li>
                The presence of fang marks alone does not mean that venom has entered the body.
                </li>
                <li>
                If envenoming has taken place, affective treatment is available in hospitals and full recovery is likely.
                </li>


              </ul>

                </li>
              
              <li>
              To remove venom, which may lie on the surface of the skin, the bitten area should be washed gently with soap and water, or wiped with a wet cloth.
              </li>

              <li>
              Swelling of the bitten limb is a common feature after venomous snakebite. Prevent complications by removing, as early as possible, rings, bangles, anklets, cords or clothing, which could cause constriction if swelling were to occur.
              </li>


              <li>
              Take the victim to hospital as early as possible. An accurate description of the circumstances of the bite will facilitate the identification of the snake. Photographs taken with a phone will be very helpful to identify the snake. Accurate identification will influence the management of the patient. It is no longer necessary to bring the biting snake to hospital for proper management. Live snakes, as well as dead ones, should be handled carefully.
              </li>

              <li>
              If the victim has difficulty in breathing, particularly after krait bite, provision of artificial breathing on the way to hospital either by mouth to mouth or bag and mask ventilation, if you have the capability to do so, is a lifesaving first aid intervention.
              </li>
            </ol>

          </div>



          <div className="w-full text-left text-[#3d3d3d] mt-10">
          <h2 className="text-[1.2rem] font-semibold mb-5">
                <span className="text-red-500">Not to do  </span>list
              </h2>
            <ol className="flex flex-col list-decimal space-y-3" >
              <li>Do not panic and be tempted to do anything detrimental to the victim.

                </li>
              
              <li>
              Alcohol hastens circulation of venom and should not be given.
              </li>

              <li>
              Do not apply tourniquets in the first aid treatment of snakebite. Applications of “pressure bandages”, as recommended in some guidelines, is also not recommended. The effectiveness of pressure bandages for bites of Sri Lankan snakes has not been proven.
              </li>


              <li>
              Incision of or application of suction to the bite wound is not advisable. Snakes usually inject venom too deeply for suction to be of any use. Inexpert incisions may damage tendons, blood vessels and nerves; bleeding from these wounds and infection may create added problems.
              </li>

              <li>
              Thambili(King coconut) and kurumba water and fruit juices should not be given. They contain potassium, which can cause problems if kidney damage occurs following snakebite.
              </li>


              <li>
              Aspirin may produce persistent bleeding from the stomach, especially following Russell’s viper bite and should not be given.
              </li>


            </ol>

          </div>



        </FistAidTab>













        <FistAidTab value={value} index={1} dir={theme.direction}>
        නඩත්තු කටයුතු හේතුවෙන් වසා ඇත
        </FistAidTab>
        <FistAidTab value={value} index={2} dir={theme.direction}>
        සිංහල බෑ ද?
        </FistAidTab>
      </SwipeableViews>
    </Box>
  );
}
