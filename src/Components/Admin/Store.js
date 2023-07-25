import React, { useState } from "react";
import { Button } from "@mui/material";
import AddLocationAltRounded from "@mui/icons-material/AddLocationAltRounded";
import Modal from "@mui/material/Modal";
import ModalAddStore from "./ModalAddStore";
import StoreLocator from "../../StoreLocator";

const Store = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div style={{width:'100%'}}>
      <Button color="info" variant="outlined" onClick={handleOpenModal} style={{margin:'1rem'}}>
       <AddLocationAltRounded />add store
      </Button>
  <div>
  <StoreLocator/>
  </div>

      <Modal open={open} onClose={handleCloseModal}>
        <div>
          <ModalAddStore handleCloseModal={handleCloseModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Store;
