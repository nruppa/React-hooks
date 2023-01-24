import React,{useState} from 'react'
import { TextField } from '@material-ui/core'
import { DatePicker,  } from '@mui/x-date-pickers-pro';

function Date() {

    // const [date, setDate] = useState('');
    // const handleChange = date => setDate(date);
  
    // const today = new Date();
    // let day = new Date();
    // day.setDate(day.getDate() + 6);
  return (
    <div>
        Date
<TextField
    type='date'
    controls={['calendar']}
    // select="range"
    // touchUi={true}
    // inputComponent="input"
    // inputProps={props}
/>
    </div>
  )
}

export default Date












