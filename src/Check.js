import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import './App.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@material-ui/core';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { FormGroup } from '@material-ui/core';

function Check() {
    const [checked, setChecked] = useState(false)
    // const visibility
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [visible, setVisible] = useState();
    const [visible1, setVisible1] = useState();
    const [visible2, setVisible2] = useState();

    const [A, seta] = useState(false);
    const [B, setb] = useState(false);
    const [C, setc] = useState(false);

    return (
        <div>
            {/* <Checkbox onChange={() => setChecked(!checked)}
                visibility = {!checked ? "hidden" : "showing"}
            />Add
            <br></br>
            {visible && <input />} */}
            {/* <input
            disabled={!checked} 
            visibility={this.checked ? "visible": "hidden"}
            className={checked ? 'visible' : 'hidden'}
            /> */}
            {/* <Checkbox />Add */}
            {/* <Checkbox onChange={() => setVisible(!visible)} visibility={!visible ? "hidden" : "showing"} />Add
            {visible && <Checkbox  onChange={() => setVisible2(!visible2)} visibility={!visible2 ? "hidden" : "showing"}/>}
            <br/>
            {visible2 && <input/>}
            <Checkbox onChange={() => setVisible1(!visible1)} visibility={!visible ? "hidden" : "showing"} />
            {visible1 && <p>Its toggling visibility</p>} */}


            <div>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox onChange={() => seta(!A)}
                            visibility={!A ? "hidden" : "showing"}
                        />} label="Are you having issues with pick and/or release?" />
                    {A &&
                        <FormGroup>
                            <FormControlLabel
                                style={{ "margin-left": "130px" }}
                                control={<Checkbox onChange={() => setb(!B)}
                                    visibility={!B ? "hidden" : "showing"}
                                />} label="Pick" />
                            {B &&
                                <TextField style={{ "margin-left": "130px", width: '1300px' }}
                                    label="Service Line*" variant="outlined" />
                            }
                        </FormGroup>
                    }
                    {A &&
                        <FormGroup>
                            <FormControlLabel style={{ "margin-left": "130px" }}
                                control={<Checkbox onChange={() => setc(!C)}
                                    visibility={!3 ? "hidden" : "showing"}
                                />} label="Release" />
                            {C &&
                                <TextField style={{ "margin-left": "130px", width: '1300px' }}
                                    label="Service Line*" variant="outlined" />
                            }
                        </FormGroup>
                    }
                </FormGroup>
            </div>
        </div>
    )
}

export default Check