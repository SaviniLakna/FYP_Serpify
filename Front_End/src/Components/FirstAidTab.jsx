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
      "සර්ප දෂ්ට කිරීම්වලට ගොදුරු වූවන්ට සෑම විටම ඵලදායී ප්රථමාධාර ලබා දිය යුතුය. එය පටක වලට ලබා දෙන විෂ පැතිරීම සහ කටගැස්ම නිසා ඇති වන ප්‍රතිවිපාක වලක්වනු ඇත. නුසුදුසු ප්රථමාධාර හානිකර විය හැක. <strong> අපි පහත පහසු, ශක්‍ය, ප්‍රයෝජනවත් සහ ආරක්ෂිත ක්‍රියා නිර්දේශ කරමු. </strong>",
    listtitleone: "කළ යුතු දේවල්",
    listtitletwo: 'නොකළ යුතු',
    liListone: [
      {
        list: [
          "රෝගියාගේ බිය අඩු කිරීමට වග බලා ගන්න.",
          "සපා කෑ ප්‍රදේශය නොසෙල්වී රෝගියා සැහැල්ලුවෙන් තබා ගන්න.",
          "සපා කෑ ප්‍රදේශය පිරිසිදු ජලය සහ සබන් යොදා සෝදන්න.",
          "සපා කෑ ප්‍රදේශයේ ආභරණ සහ ඇඳුම් ඉවත් කරන්න.",
          "අවශ්‍ය නම් පමණක් පැරසිටමෝල් දෙන්න.",
          "රෝගියාට හුස්ම ගැනීමේ අපහසුතාවයක් ඇත්නම් CPR ප්‍රතිකාර ලබා දෙන්න.",
          "හැකි ඉක්මනින් රෝගියා ළඟම ඇති රෝහල වෙත රැගෙන යන්න.",
        ],
      },
    ],
    liListtwo: [
      {
        list: [
          "තුවාලය උරා බොන්න හෝ කපන්න එපා.",
          "තුවාල වූ ප්රදේශයට පීඩනය යොදන්න එපා.",
          "තුවාලයේ පොටෑසියම් පර්මැන්ගනේට් අඩංගු ඖෂධ යොදන්න එපා.",
          "ඖෂධ ලබා දීම සඳහා නාසයට තෙල් වැනි දියර එන්නත් කිරීමෙන් වළකින්න.",
          "රෝගියාට මත්පැන් ලබා නොදෙන්න.",
          "පොල් වතුර හෝ පළතුරු යුෂ රෝගියාට ලබා නොදෙන්න",
          "රෝගියාට ඇස්පිරින් ලබා නොදෙන්න.",
          "කලබල වන හෝ රෝගියාට හානිකර දෙයක් කිරීමට උත්සාහ නොකරන්න."
        ],
      },
    ],
  },
];


const firstAidListTam = [
  {
    title: "பாம்புக்கடியில் முதலுதவி",
    intro:"பாம்புக்கடியால் பாதிக்கப்பட்டவர்களுக்கு எப்போதும் பயனுள்ள முதலுதவி அளிக்கப்பட வேண்டும். இது திசுக்களில் அறிமுகப்படுத்தப்பட்ட விஷம் பரவுவதைத் தடுக்கும் அல்லது குறைக்கும், அத்துடன் கடித்ததால் ஏற்படும் சிக்கல்களும்.தவறான முதலுதவி தீங்கு விளைவிக்கும்.<strong> பின்வரும் எளிய, நடைமுறை, பயனுள்ள மற்றும் பாதுகாப்பான நடவடிக்கைகள் பரிந்துரைக்கப்படுகின்றன: </strong>",
    listtitleone: "செய்ய வேண்டிய பட்டியல்",
    listtitletwo: 'செய்யக்கூடாத ',
    liListone: [
      {
        list: [
          "பாதிக்கப்பட்டவரின் பயத்தை குறைக்க உதவி செய்யவும்.",
          "கடித்த பகுதியை அசையாமல் நோயாளியை நிதானமாக வைத்திருங்கள்.",
          "கடித்த பகுதியை சுத்தமான தண்ணீர் மற்றும் சவர்க்காரமிட்டு கழுவவும்.",
          "கடித்த இடத்தில் உள்ள நகைகள் மற்றும் ஆடைகளை அகற்றவும்.",
          "தேவைப்பட்டால் மட்டுமே பாராசிட்டமால் கொடுக்கவும்.",
          "நோயாளிக்கு மூச்சுத் திணறல் இருந்தால் CPR சிகிச்சை அளிக்கவும்.",
          "பாதிக்கப்பட்டவரை விரைவில் அருகிலுள்ள மருத்துவமனைக்கு அழைத்துச் செல்லவும்."
        ],
      },
    ],
    liListtwo: [
      {
        list: [
          "காயத்தை உறிஞ்சவோ வெட்டவோ கூடாது.",
          "காயம்பட்ட இடத்தில் அழுத்தம் கொடுக்காதீர்கள்.",
          "பொட்டாசியம் பெர்மாங்கனேட் அடங்கிய மருந்துகளை காயத்திற்குப் பயன்படுத்த வேண்டாம்.",
          "மருந்து வழங்க மூக்கில் எண்ணெய் போன்ற திரவங்களை செலுத்துவதை தவிர்க்கவும்.",
          "நோயாளிக்கு மது கொடுக்க வேண்டாம்.",
          "நோயாளிக்கு இளநீர் அல்லது பழச்சாறு வழங்க வேண்டாம்.",
          "நோயாளிக்கு ஆஸ்பிரின் வழங்க வேண்டாம்.",
          "பீதி அடைய வேண்டாம் அல்லது பாதிக்கப்பட்டவருக்கு தீங்கு விளைவிக்கும் எதையும் செய்ய முயற்சிக்காதீர்கள்."
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


{firstAidListTam.map((firstaid, index) => (
            <div className="w-full text-left text-[#3d3d3d] mt-10">
              <h2 className="text-[1.2rem] font-semibold mb-10">
              <span className="text-red-500">{firstaid.listtitletwo}</span> பட்டியல்
              </h2>

              <div>
                {firstAidListTam.map((item, index) => (
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
      </SwipeableViews>
    </Box>
  );
}
