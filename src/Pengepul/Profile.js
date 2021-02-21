import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Box, Typography, Avatar } from "@material-ui/core";

export default function Profile() {
  return (
    <div style={{ width: `96vw`, margin: `2%`, textAlign: "center" }}>
      <Typography variant="h5">
        <Box>Profile</Box>
      </Typography>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          width: `50vw`,
          display: "inline-block",
          paddingTop: `2%`,
        }}
      >
        <Avatar
          alt="gambar"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{ width: 100, height: 100, display: "inline-flex" }}
        />
        <br />
        {/* <Link to="#">Ganti Gambar</Link> */}
        <Typography component={Link} to="#" variant="caption">
          Ganti Gambar
        </Typography>
        <TextField
          id="nama"
          label="Nama"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={namaDonatur}
          // onChange={changeHandlerInit}
        />
        <TextField
          id="alamat"
          label="Alamat"
          multiline
          rows={3}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={namaDonatur}
          // onChange={changeHandlerInit}
        />
        <TextField
          id="noHp"
          label="No Hp"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="outlined"
          size="small"
          required
          // value={namaDonatur}
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
