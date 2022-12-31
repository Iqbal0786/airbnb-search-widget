import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "900px",
  height: "500px",
  transform: "translate(-50%, -50%)",
  border: "transparent",
  p: 4,
};

export default function FilterModal({ open, handleClose }) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "700px",
            height: "500px",
            transform: "translate(-50%, -50%)",
            border: "none",
            outline:'none',
            p: 4,
          }}
        >
          <Typography>This is a filter modal</Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          eius velit! Consequuntur suscipit illum quos doloribus porro
          repellendus laboriosam, eligendi assumenda beatae nesciunt possimus,
          officia maiores quod, necessitatibus neque ratione!
        </Paper>
      </Modal>
    </div>
  );
}
