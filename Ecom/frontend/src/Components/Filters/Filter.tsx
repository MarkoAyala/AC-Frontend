import * as React from 'react';
// ====== IMPORT MUI COMPONENTS =========== //
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// ================================= // 
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
interface Props{
  checked:{
    all:boolean,
    red:boolean,
    yellow:boolean
  },
  setChecked:any,
  handleChangeCheckBox:any,
}
export default function Filter({checked, setChecked, handleChangeCheckBox}:Props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{ /* bgcolor: 'background.paper',  */width: 500 }}>
      <AppBar position="static" sx={{background:"#21374a"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Model" {...a11yProps(0)} />
          <Tab label="Colors" {...a11yProps(1)} />
 
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{background:"#151f28", minHeight:'500px'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <FormGroup>
            <FormControlLabel control={ <Checkbox {...label} sx={{"&.MuiCheckbox-root":{color:"white"}}} checked={checked.all} onChange={(e)=>handleChangeCheckBox(e)} name="all"  defaultChecked/>} label="All" sx={{color:"white"}}/>
            <FormControlLabel control={ <Checkbox {...label} sx={{"&.MuiCheckbox-root":{color:"red"}}} checked={checked.red} onChange={(e)=>handleChangeCheckBox(e)} name="red" />} label="Red" sx={{color:"white"}}/>
            <FormControlLabel control={ <Checkbox {...label} sx={{"&.MuiCheckbox-root":{color:"yellow"}}} checked={checked.yellow} onChange={(e)=>handleChangeCheckBox(e)} name="yellow" />} label="Yellow" sx={{color:"white"}}/>
        </FormGroup>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}