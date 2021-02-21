import React from "react";
import { Table, TableRow, TableCell, Typography, Box } from "@material-ui/core";

export default function PetaniDetail() {
  return (
    <div style={{ width: `96vw`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Tambah data Petani</Box>
      </Typography>
      <div style={{ display: "inline-grid", paddingTop: `2%` }}>
        <Table style={{ width: `50vw` }}>
          <TableRow>
            <TableCell>Nama Petani</TableCell>
            <TableCell>Budi</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alamat</TableCell>
            <TableCell>Bayan</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jenis Tanamab</TableCell>
            <TableCell>Sayuran</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nama Tanaman</TableCell>
            <TableCell>Bawang</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Luas Ladang</TableCell>
            <TableCell>1 hektar</TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
}
