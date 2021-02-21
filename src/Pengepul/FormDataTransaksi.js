import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box, TextField, Grid } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
export default function FormDataTransaksi() {
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
        <Box>Transaksi Pembelian</Box>
      </Typography>
      <Grid container spacing={3} justify="center" style={{ padding: `2%` }}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="tanggal"
            label="Tanggal"
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
            margin="normal"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: <CameraAltIcon position="start" />,
            }}
            // value={namaPetani}
            // onChange={changeHandlerInit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className="inputRounded"
            id="namaPembeli"
            label="Nama Pembeli"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            required
            // value={namaPetani}
            // onChange={changeHandlerInit}
          />
          <TextField
            id="alamatPembeli"
            className="inputRoundedMultiline"
            label="Alamat Pembeli"
            style={{ margin: 8 }}
            fullWidth
            multiline
            rows={3}
            margin="normal"
            variant="outlined"
            size="small"
            required
            // value={namaPetani}
            // onChange={changeHandlerInit}
          />
          <TextField
            id="noHp"
            label="No HP"
            style={{ margin: 8 }}
            className="inputRounded"
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            required
            // value={namaPetani}
            // onChange={changeHandlerInit}
          />
        </Grid>
        <Link to="/data-transaksi" className="link">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            size="large"
            style={{ margin: 8, width: `25vw`, borderRadius: 50 }}
          >
            Simpan
          </Button>
        </Link>
      </Grid>
    </div>
  );
}
