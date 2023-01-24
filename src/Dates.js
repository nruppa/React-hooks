import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';


// const StaticRangeShortcutsPanel = ({ setValue}) => {
//   const handleRangeClick = React.useCallback(
//     (range) => setValue && handleRangeClick(setValue)(range),
//     [setValue]
//   );
// };
 function Dates() {
    // const today = dayjs;
  const [value, setValue] = React.useState([null,null]);
//   setValue([today.AdapterDayjs(1, 'week'), today]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        onChange={(newValue) => setValue(newValue)}
        value={value}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            {/* <Box sx={{ mx: 2 }}> to </Box> */}
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
export default Dates