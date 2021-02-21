import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";

export default function DetailHasilPanen() {
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
        <Box>Data Hasil Panen</Box>
      </Typography>
      <div style={{ display: "inline-grid", paddingTop: `2%` }}>
        <Grid container spacing={5} justify="center">
          <Grid item xs={12} sm={6}>
            <Table style={{ width: `50vw` }}>
              <TableRow>
                <TableCell>Tanggal Transaksi</TableCell>
                <TableCell>: 10-10-2020</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kode Barang</TableCell>
                <TableCell>: petani-123233</TableCell>
              </TableRow>
            </Table>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Table>
              <TableRow>
                <TableCell>Jenis Tanaman</TableCell>
                <TableCell>: Sayuran</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nama Tanaman</TableCell>
                <TableCell>: Bawang</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Luas Ladang</TableCell>
                <TableCell>: 1 hektar</TableCell>
              </TableRow>
            </Table>
          </Grid>
          <Typography component="div" variant="subtitle1">
            <b>Barcode</b>
          </Typography>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/199/360/non_2x/barcode-png.png"
              style={{ width: `30%` }}
            />
          </div>
          <Link to="#">Cetak barcode</Link>
        </Grid>
      </div>
    </div>
  );
}
