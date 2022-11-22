import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SideComponent from './SideComponent';
import './Side.css'

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="box"
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}
    >
      <Tabs className="tab"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Tax Rate List" {...a11yProps(0)} />
        <Tab label="Tax Rate List" {...a11yProps(1)} />
        <Tab label="Tax Rate List" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <SideComponent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SideComponent/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SideComponent/>
      </TabPanel>
     
    </Box>
  );
}
