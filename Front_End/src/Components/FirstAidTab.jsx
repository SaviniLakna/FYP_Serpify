import * as React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Medic from "../Assets/Images/medic-01.png";

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


const firstAidListEng = [
  {
    title: "First aid in snakebite",
    intro:"Snakebite victims should always receive effective first aid. It will prevent or reduce the spread of venom delivered into the tissues and the consequences caused by the bite. Improper first aid can be harmful. <strong> We recommend the following easy, feasible, helpful, and secure actions. </strong>",
    listtitleone: "To do List",
    listtitletwo: "Not to do",
    liListone: [
      {
        list: [
          "Make sure to reduce the victim's fear.",
          "Keep the biting area unmoved and the patient relaxed.",
          "Wash the bitten area with clean water and soap.",
          "Remove jewellery and clothing in the bitten area.",
          "Give Paracetamol only if necessary.",
          "Give CPR treatment if the patient is short of breathing.",
          "Take the victim to the nearest hospital as soon as possible.",
        ],
      },
    ],
    liListtwo: [
      {
        list: [
          "Don't suction or cut the wound. ",
          "Do not apply pressure to the wounded area.",
          "Don’t apply medicines that include potassium permanganate to the wound.",
          "Avoid injection of liquids such as oil into the nose to provide medication.",
          "Don’t give alcohol to the patient.",
          "Do not serve King Coconut water or fruit juice to the patient",
          "Do not provide Aspirin to the patient.",
          "Do not panic or attempt to do anything harmful to the victim."
        ],
      },
    ],
  },
];


const firstAidListSin = [
  {
    title: "සර්ප දෂ්ඨනයකදී ප්‍රථමාධාර",
    intro:
      "සර්ප දෂ්ටනයට ලක්වූවන්ට සෑම විටම ඵලදායී ප්‍රථමාධාර ලබා දිය යුතුය. එමගින් පටක තුලට ඇතුළු වී ඇති විෂ පැතිරීම වැලැක්වීම හෝ අවම කිරීම මෙන්ම සපාකෑමෙන් ඇතිවන සංකූලතා. වැරදි ප්රථමාධාර හානියක් විය හැක. <strong>පහත සරල, ප්‍රායෝගික, ඵලදායී සහ ආරක්ෂිත පියවර නිර්දේශ කරනු ලැබේ:</strong>",
    listtitleone: "කළ යුතු දේවල්",
    listtitletwo: 'නොකළ යුතු',
    liListone: [
      {
        list: [
          "දෂ්ට කළ ස්ථානය සබන් හා වතුරෙන් මෘදු ලෙස පිරිසිදු කළ යුතුය",
          "ඉදිමුමකදී සීමා කිරීම් ඇති කළ හැකි ගැටළු මඟහරවා ගැනීම සඳහා හැකි ඉක්මනින් ස්වර්ණාභරණ, වළලු, වළලුකර, ලණු සහ ඇඳුම් ඉවත් කරන්න.",
          "රෝගියා හැකි ඉක්මනින් රෝහලට ගෙන යන්න",
          "රෝගියාට හුස්ම ගැනීමේ අපහසුතා තිබේ නම්, විශේෂයෙන් ක්‍රයිට් සපා කෑමෙන් පසු, රෝහලට යන මාර්ගයේ කෘතිම හුස්මක් ලබා දීම, මුඛයෙන් මුඛයෙන් හෝ බෑගය සහ ආවරණ වාතාශ්‍රය මගින්, ජීවිතාරක්ෂක ප්‍රථමාධාර පියවරකි.",
        ],
      },
    ],
    liListtwo: [
      {
        list: [
          "The bite area should be gently cleaned with soap and water",
          "Remove jewelry, bangles, anklets, cords, and clothing as soon as possible to avoid issues that could create restriction in the event of swelling.",
          "Take the victim to hospital as early as possible",
          "If a patient is having difficulties breathing, especially after a krait bite, providing artificial breathing on the route to the hospital, either by mouth-to-mouth or bag and mask ventilation, is a lifesaving first aid step.",
        ],
      },
    ],
  },
];


const firstAidListTam = [
  {
    title: "பாம்புக்கடியில் முதலுதவி",
    intro:"பாம்புக்கடியால் பாதிக்கப்பட்டவர்களுக்கு எப்போதும் பயனுள்ள முதலுதவி அளிக்கப்பட வேண்டும். இது திசுக்களில் அறிமுகப்படுத்தப்பட்ட விஷம் பரவுவதைத் தடுக்கும் அல்லது குறைக்கும், அத்துடன் கடித்ததால் ஏற்படும் சிக்கல்களும்.தவறான முதலுதவி தீங்கு விளைவிக்கும்.<strong> பின்வரும் எளிய, நடைமுறை, பயனுள்ள மற்றும் பாதுகாப்பான நடவடிக்கைகள் பரிந்துரைக்கப்படுகின்றன: </strong>",
    listtitleone: "To do List",
    listtitletwo: '<span className="text-red-500">Not to do</span> list',
    liListone: [
      {
        list: [
          "The bite area should be gently cleaned with soap and water",
          "Remove jewelry, bangles, anklets, cords, and clothing as soon as possible to avoid issues that could create restriction in the event of swelling.",
          "Take the victim to hospital as early as possible",
          "If a patient is having difficulties breathing, especially after a krait bite, providing artificial breathing on the route to the hospital, either by mouth-to-mouth or bag and mask ventilation, is a lifesaving first aid step.",
        ],
      },
    ],
    liListtwo: [
      {
        list: [
          "Do not panic and be tempted to do anything detrimental to the victim.",
          "Remove jewelry, bangles, anklets, cords, and clothing as soon as possible to avoid issues that could create restriction in the event of swelling.",
          "Take the victim to hospital as early as possible",
          "If a patient is having difficulties breathing, especially after a krait bite, providing artificial breathing on the route to the hospital, either by mouth-to-mouth or bag and mask ventilation, is a lifesaving first aid step.",
        ],
      },
    ],
  },
];

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
            {firstAidListEng.map((firstaid, index) => (
              <div
                className="w-full md:w-1/2 text-left flex flex-col"
                key={index}
              >
                <h2 className="text-[1.2rem] font-semibold mb-5">
                  {firstaid.title}
                </h2>

                <p dangerouslySetInnerHTML={{ __html: firstaid.intro }} />
              </div>
            ))}

            <div className="w-full md:w-1/2 text-left flex flex-col relative justify-center items-center">
              <img
                src={Medic}
                alt="medicine"
                className="lg:w-[320px] md:w-[320px] w-full"
              />
            </div>
          </div>

          {firstAidListEng.map((firstaid, index) => (
            <div className="w-full text-left text-[#3d3d3d]">
              <h2 className="text-[1.2rem] font-semibold mb-10">
                {firstaid.listtitleone}
              </h2>

              <div>
                {firstAidListEng.map((item, index) => (
                  <div key={index}>
                    {item.liListone.map((listItem, listIndex) => (
                      <ol
                        key={listIndex}
                        className="flex flex-col space-y-3 list-decimal"
                      >
                        {listItem.list.map((listText, textIndex) => (
                          <li key={textIndex}>{listText}</li>
                        ))}
                      </ol>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {firstAidListEng.map((faid, item) => (
            <div className="w-full text-left text-[#3d3d3d] mt-10" key={item}>
              <h2 className="text-[1.2rem] font-semibold mb-5">
                <span className="text-red-500">{faid.listtitletwo}</span> list
              </h2>

              <div>
                {firstAidListEng.map((item, index) => (
                  <div key={index}>
                    {item.liListtwo.map((listItem, listIndex) => (
                      <ol
                        key={listIndex}
                        className="flex flex-col space-y-3 list-decimal"
                      >
                        {listItem.list.map((listText, textIndex) => (
                          <li key={textIndex}>{listText}</li>
                        ))}
                      </ol>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FistAidTab>

        <FistAidTab value={value} index={1} dir={theme.direction}>
          <div className="w-full flex md:flex-row flex-col justify-center items-center">
            {firstAidListSin.map((firstaid, index) => (
              <div
                className="w-full md:w-1/2 text-left flex flex-col"
                key={index}
              >
                <h2 className="text-[1.2rem] font-semibold mb-5">
                  {firstaid.title}
                </h2>

                <p dangerouslySetInnerHTML={{ __html: firstaid.intro }} />
              </div>
            ))}

            <div className="w-full md:w-1/2 text-left flex flex-col relative justify-center items-center">
              <img
                src={Medic}
                alt="medicine"
                className="lg:w-[320px] md:w-[320px] w-full"
              />
            </div>
          </div>

          {firstAidListSin.map((firstaid, index) => (
            <div className="w-full text-left text-[#3d3d3d]">
              <h2 className="text-[1.2rem] font-semibold mb-10">
                {firstaid.listtitleone}
              </h2>

              <div>
                {firstAidListSin.map((item, index) => (
                  <div key={index}>
                    {item.liListone.map((listItem, listIndex) => (
                      <ol
                        key={listIndex}
                        className="flex flex-col space-y-3 list-decimal"
                      >
                        {listItem.list.map((listText, textIndex) => (
                          <li key={textIndex}>{listText}</li>
                        ))}
                      </ol>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {firstAidListSin.map((faid, item) => (
            <div className="w-full text-left text-[#3d3d3d] mt-10" key={item}>
              <h2 className="text-[1.2rem] font-semibold mb-5">
                <span className="text-red-500">{faid.listtitletwo}</span> දේවල්  
              </h2>

              <div>
                {firstAidListSin.map((item, index) => (
                  <div key={index}>
                    {item.liListtwo.map((listItem, listIndex) => (
                      <ol
                        key={listIndex}
                        className="flex flex-col space-y-3 list-decimal"
                      >
                        {listItem.list.map((listText, textIndex) => (
                          <li key={textIndex}>{listText}</li>
                        ))}
                      </ol>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </FistAidTab>

        <FistAidTab value={value} index={2} dir={theme.direction}>
          <div className="w-full flex md:flex-row flex-col justify-center items-center">
            {firstAidListTam.map((firstaid, index) => (
              <div
                className="w-full md:w-1/2 text-left flex flex-col"
                key={index}
              >
                <h2 className="text-[1.2rem] font-semibold mb-5">
                  {firstaid.title}
                </h2>

                <p dangerouslySetInnerHTML={{ __html: firstaid.intro }} />
              </div>
            ))}

            <div className="w-full md:w-1/2 text-left flex flex-col relative justify-center items-center">
              <img
                src={Medic}
                alt="medicine"
                className="lg:w-[320px] md:w-[320px] w-full"
              />
            </div>
          </div>

          {firstAidListTam.map((firstaid, index) => (
            <div className="w-full text-left text-[#3d3d3d]">
              <h2 className="text-[1.2rem] font-semibold mb-10">
                {firstaid.listtitleone}
              </h2>

              <div>
                {firstAidListTam.map((item, index) => (
                  <div key={index}>
                    {item.liListone.map((listItem, listIndex) => (
                      <ol
                        key={listIndex}
                        className="flex flex-col space-y-3 list-decimal"
                      >
                        {listItem.list.map((listText, textIndex) => (
                          <li key={textIndex}>{listText}</li>
                        ))}
                      </ol>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full text-left text-[#3d3d3d] mt-10">
            <h2 className="text-[1.2rem] font-semibold mb-5">
              <span className="text-red-500">Not to do </span>list
            </h2>
            <ol className="flex flex-col list-decimal space-y-3">
              <li>
                Do not panic and be tempted to do anything detrimental to the
                victim.
              </li>

              <li>
                Alcohol hastens circulation of venom and should not be given.
              </li>

              <li>
                Do not apply tourniquets in the first aid treatment of
                snakebite. Applications of “pressure bandages”, as recommended
                in some guidelines, is also not recommended. The effectiveness
                of pressure bandages for bites of Sri Lankan snakes has not been
                proven.
              </li>

              <li>
                Incision of or application of suction to the bite wound is not
                advisable. Snakes usually inject venom too deeply for suction to
                be of any use. Inexpert incisions may damage tendons, blood
                vessels and nerves; bleeding from these wounds and infection may
                create added problems.
              </li>

              <li>
                Thambili(King coconut) and kurumba water and fruit juices should
                not be given. They contain potassium, which can cause problems
                if kidney damage occurs following snakebite.
              </li>

              <li>
                Aspirin may produce persistent bleeding from the stomach,
                especially following Russell’s viper bite and should not be
                given.
              </li>
            </ol>
          </div>
        </FistAidTab>
      </SwipeableViews>
    </Box>
  );
}
