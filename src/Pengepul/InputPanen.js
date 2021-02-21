import React from 'react'
import {Button, TextField} from '@material-ui/core'

export default function InputPanen() {
    return (
        <div>
            Form Input Hasil Panen
            <TextField
                id="tanggal"
                label="Tanggal"
                variant="outlined"
                type="date"
                format="dd-MM-yyyy"
                style={{ margin: 8 }}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                size="small"
                required
                // value={dataInit.tanggal}
                // onChange={changeHandlerInit}
              />
        </div>

    )
}
