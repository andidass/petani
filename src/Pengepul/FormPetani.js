import React from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

const jenisTanaman2 = [
  {
    value: "Padi",
    label: "Padi",
  },
  {
    value: "Sayuran",
    label: "Sayuran",
  },
  {
    value: "Buah-buahan",
    label: "Buah-buahan",
  },
];

export default function FormPetani() {
  return (
    <div style={{ width: `96vw`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Tambah data Petani</Box>
      </Typography>
      <div
        style={{
          alignItems: "center",
          width: `50vw`,
          display: "inline-block",
          paddingTop: `2%`,
        }}
      >
        <TextField
          id="namaPetani"
          label="Nama Petani"
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
          id="alamat"
          label="Alamat"
          style={{ margin: 8 }}
          fullWidth
          multiline
          rows={3}
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={alamat}
          // onChange={changeHandlerInit}
        />
        <TextField
          id="jenisTanaman"
          label="Jenis Tanaman"
          // onChange={changeHandler}
          // value={jenisTanaman}
          fullWidth
          style={{ margin: 8 }}
          select
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
        >
          {jenisTanaman2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="namaTanaman"
          label="Nama Tanaman"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={alamat}
          // onChange={changeHandlerInit}
        />
        <TextField
          id="luasLadang"
          label="Luas Ladang"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={alamat}
          // onChange={changeHandlerInit}
        />
        <TextField
          id="lokasiLadang"
          label="Lokasi Ladang"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          value="GOOGLE MAP"
          // onChange={changeHandlerInit}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          style={{ margin: 8 }}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}
