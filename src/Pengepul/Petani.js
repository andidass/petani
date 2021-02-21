import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

function createData(name, alamat, jenisTanaman, namaTanaman, luasLadang) {
  return { name, alamat, jenisTanaman, namaTanaman, luasLadang };
}

const rows = [
  createData("Budi", "Bayan", "Sayuran", "Bawang", "1hektar"),
  createData("Agung", "Bayan", "Sayuran", "Bawang", "1hektar"),
  createData("Pras", "Bayan", "Sayuran", "Bawang", "1hektar"),
];

export default function Petani() {
  return (
    <div style={{ width: `96vw`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Tambah data Petani</Box>
      </Typography>
      <div style={{ textAlign: "right" }}>
        <Link to="./data-petani/tambah" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ margin: 8 }}
            startIcon={<AddIcon />}
          >
            Tambah Petani
          </Button>
        </Link>
      </div>
      <TextField
        id="kataPencarian"
        placeholder="cari petani"
        style={{ minWidth: 300 }}
        margin="normal"
        variant="outlined"
        size="small"
        autoFocus
        // onChange={(e) => onChange(e)}
        // value={kataPencarian}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Petani</TableCell>
              <TableCell align="right">Alamat</TableCell>
              <TableCell align="right">Jenis Tanaman</TableCell>
              <TableCell align="right">Nama Tanaman</TableCell>
              <TableCell align="right">Luas Ladang</TableCell>
              <TableCell align="right">Keterangan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.alamat}</TableCell>
                <TableCell align="right">{row.jenisTanaman}</TableCell>
                <TableCell align="right">{row.namaTanaman}</TableCell>
                <TableCell align="right">{row.luasLadang}</TableCell>
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
