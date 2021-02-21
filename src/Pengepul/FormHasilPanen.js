import React from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import {
  Typography,
  InputAdornment,
  Button,
  Box,
  TextField,
  Grid,
} from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const namaPetani2 = [
  {
    value: "Adi",
    label: "Adi",
  },
  {
    value: "Budi",
    label: "Budi",
  },
  {
    value: "Didi",
    label: "Didi",
  },
];

export default function FormHasilPanen() {
  return (
    <div
      style={{
        width: `96vw`,
        margin: `2%`,
        marginTop: `7%`,
        textAlign: "center",
      }}
    >
      <Typography variant="h5">
        <Box>Input Hasil Panen</Box>
      </Typography>
      <Grid
        container
        spacing={3}
        justify="center"
        style={{ padding: `2%`, paddingTop: `5%` }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            id="tanggal"
            label="Tanggal Transaksi"
            variant="outlined"
            type="date"
            format="dd-MM-yyyy"
            style={{ margin: 8 }}
            className="inputRounded"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
            size="small"
            required
            // value={dataInit.tanggal}
            // onChange={changeHandlerInit}
          />
          <TextField
            id="kode"
            label="Kode Barang"
            style={{ margin: 8 }}
            className="inputRounded"
            fullWidth
            disabled
            margin="normal"
            variant="outlined"
            size="small"
            value={uniqid("petani-")}
            // onChange={changeHandlerInit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="tanggal"
            label="Tanggal Panen"
            variant="outlined"
            type="date"
            format="dd-MM-yyyy"
            style={{ margin: 8 }}
            className="inputRounded"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
            size="small"
            required
            // value={dataInit.tanggal}
            // onChange={changeHandlerInit}
          />
          <TextField
            id="banyaknya"
            label="Banyaknya"
            style={{ margin: 8 }}
            className="inputRounded"
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
            // onChange={changeHandlerInit}
          />
          <TextField
            id="namaPetani"
            label="Nama Petani"
            // onChange={changeHandler}
            // value={jenisTanaman}
            fullWidth
            style={{ margin: 8 }}
            className="inputRounded"
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            size="small"
          >
            {namaPetani2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Link to="/hasil-panen" className="link">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            size="large"
            className="link"
            style={{
              margin: 8,
              width: `20vw`,
              marginTop: `5%`,
              borderRadius: 50,
            }}
          >
            Simpan
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
