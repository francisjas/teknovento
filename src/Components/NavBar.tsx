import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { textAlign } from '@mui/system';

type Features = {
  components: React.ReactNode[];
  label: String[];
}


export default function LabTabs(props: Features) {
  const [value, setValue] = useState("1");
  const [featuresContent, setFeaturesContent] = useState(props.components);
  const [featureName, setFeatureName] = useState(props.label)

  console.log(featureName)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ fullwidth: '100%', typography: 'body1' }}>

      <TabContext value={value}>
        <Box sx={{ backgroundColor: "white", color: "#ffffff", height: "120px" }} >
          <img src={'/images/TechnoVentoLogo.jpeg'} alt="Logo" width={125} height={100} style={{ float: "left", paddingTop: '12px', paddingLeft: '30px' }} />
          <img src={'/images/Whole_logo.png'} alt="Logo" width={300} height={80} style={{ float: "left", paddingTop: '30px', paddingLeft: '10px' }} />
          <TabList onChange={handleChange} sx={{
            display: 'inline-block',
            paddingTop: '30px',
            paddingLeft: '150px',
            "& button.Mui-selected": {
              backgroundColor: "#A4BE7B",
              color: "white",
              fontWeight: "bold"
            }
          }} >
            <Tab label={featureName[0]} value="1" sx={{ color: "#black", minWidth: '150px'}} />
            <Tab label={featureName[1]} value="2" sx={{ color: "#black", minWidth: '150px'}} />
            <Tab label={featureName[2]} value="3" sx={{ color: "#black", minWidth: '150px'}} />
            <Tab label={featureName[3]} value="4" sx={{ color: "#black", minWidth: '150px'}} />
            <Tab label={featureName[4]} value="5" sx={{ color: "#black", minWidth: '150px'}} />
          </TabList>

          <img src={'/images/logout.png'} alt="Logo" width={50} height={50} style={{ float: "right", paddingRight: '15px', paddingTop: '15px' }} />
        </Box>

        <div>
          {
            featuresContent.map((item, i) =>
              <TabPanel key={i} value={i + 1 + ""}>{item}</TabPanel>
            )
          }
        </div>
      </TabContext>
    </Box>
  );
}