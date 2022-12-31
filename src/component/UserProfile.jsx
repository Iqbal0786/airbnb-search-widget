import React from "react";
import { Menu, MenuItem } from "@mui/material";

export default function UserProfile({ anchorEl, handleClose, open }) {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Profile
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Address
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Orders
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
