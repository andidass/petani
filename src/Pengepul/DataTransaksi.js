import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

function createData(tanggal, kodeBarang, namaPembeli, alamatPembeli, noHp) {
  return { tanggal, kodeBarang, namaPembeli, alamatPembeli, noHp };
}

const rows = [
  createData("01-10-2020", "12345", "Adi", "Mataram", "08123456789"),
  createData("01-10-2020", "231213", "Yudi", "Lombok Tengan", "08123456789"),
  createData("01-10-2020", "15432", "Adi", "Lombok Barat", "08123456789"),
];

export default function DataTransaksi() {
  // scan
  // show all data transaksi
  // button create new transaksi
  return (
    <div style={{ width: `96%`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Data Transaksi</Box>
      </Typography>
      <div style={{ textAlign: "right" }}>
        <Link to="./data-transaksi/create" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ margin: 8 }}
            startIcon={<AddIcon />}
          >
            Transaksi Baru
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tanggal</TableCell>
              <TableCell align="right">Kode Barang</TableCell>
              <TableCell align="right">Nama Pembeli</TableCell>
              <TableCell align="right">Alamat</TableCell>
              <TableCell align="right">No HP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.tanggal}
                </TableCell>
                <TableCell align="right">{row.kodeBarang}</TableCell>
                <TableCell align="right">{row.namaPembeli}</TableCell>
                <TableCell align="right">{row.alamatPembeli}</TableCell>
                <TableCell align="right">{row.noHp}</TableCell>
                <TableCell align="right">
                  <Link
                    to="./data-petani/detail"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" color="primary">
                      Detail
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
