import React, { useState } from 'react'
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Grid } from '@material-ui/core';
import axios from "axios";


const DateExample = () => {

    const [date, setDate] = useState(new Date());

    const onClick = async () => {

        let payload = {
            date
        };

        console.log(payload);

        await 
            axios
                .post('https://localhost:3001/api/demo/date', payload)
                    .then(function (response) {
                        console.log(response);
                    })

    }

    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            label="Date"
                            inputVariant="outlined"
                            value={date}
                            fullWidth
                            onChange={(date) => setDate(date)}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="contained"
                        type="button"
                        color="primary"
                        fullWidth
                        onClick={(e) => onClick()}
                        >
                        TEST
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default DateExample
