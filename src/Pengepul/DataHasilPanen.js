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

function createData(tanggalPanen, namaTanaman, namaPetani, kodeBarang) {
  return { tanggalPanen, namaTanaman, namaPetani, kodeBarang };
}

const rows = [
  createData("01-10-2020", "Bawang", "Adi", "12345"),
  createData("01-10-2020", "Kopi", "Yudi", "231231"),
  createData("01-10-2020", "Padi", "Adi", "123123"),
];

export default function DataHasilPanen() {
  return (
    <div style={{ width: `96%`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Data Hasil Panen</Box>
      </Typography>
      <div style={{ textAlign: "right" }}>
        <Link to="./hasil-panen/input" className="link">
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
              <TableCell>Tanggal Panen</TableCell>
              <TableCell align="right">Nama Tanaman</TableCell>
              <TableCell align="right">Nama Petani</TableCell>
              <TableCell align="right">Kode Barang</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.tanggalPanen}
                </TableCell>
                <TableCell align="right">{row.namaTanaman}</TableCell>
                <TableCell align="right">{row.namaPetani}</TableCell>
                <TableCell align="right">{row.kodeBarang}</TableCell>
                <TableCell align="right">
                  <Link
                    to="./hasil-panen/id"
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
