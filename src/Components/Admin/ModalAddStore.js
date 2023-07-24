import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const ModalAddStore = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [phone, setPhone] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const onSetName = (e) => {
    setName(e.target.value);
  };
  const onSetAddress = (e) => {
    setAddress(e.target.value);
  };
  const onSetLongitude = (e) => {
    setLongitude(e.target.value);
  };
  const onSetLatitude = (e) => {
    setLatitude(e.target.value);
  };
  const onSetOpeningTime = (e) => {
    setOpeningTime(e.target.value);
  };
  const onSetClosingTime = (e) => {
    setClosingTime(e.target.value);
  };
  const onSetPhone = (e) => {
    setPhone(e.target.value);
  };
  const onCloseHandler=(e)=>{
    props.handleCloseModal()
  }
  const id = { small_id };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const storeDetails = {
      id: id,
      name: name,
      address: address,
      longitude: longitude,
      latitude: latitude,
      phone: phone,
      openingTime: openingTime,
      closingTime:closingTime
    };
    const response=await fetch(
      "https://ebeautyapp-55c72-default-rtdb.firebaseio.com//store.json",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(storeDetails)
      }
    )
    const data=await response.json();
    console.log(data);
    alert("Store added successfully")
    props.handleCloseModal()
    window.location.reload()
    

  };
  return (
    <div
      style={{
        backgroundColor: "white",
        marginLeft: "150px",
        marginTop: "20px",
        marginRight: "150px",
        padding: "10px",
        borderRadius: "10px",
        paddingLeft: "10px",
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <h3>Enter Store Details</h3>
        <TextField
          id="standard-full-width"
          label="Add Store Name"
          style={{ margin: 8 }}
          onChange={onSetName}
          placeholder="Enter Store Name"
          fullWidth
          required
          defaultValue={props.name}
        />

        <TextField
          id="standard-full-width"
          label="Add Store Address"
          style={{ margin: 8 }}
          onChange={onSetAddress}
          placeholder="Enter Store Address"
          fullWidth
          required
          defaultValue={props.address}
        />

        <TextField
          id="standard-full-width"
          label="Add Longitude"
          style={{ margin: 8 }}
          onChange={onSetLongitude}
          placeholder="Enter Longitude"
          fullWidth
          required
          defaultValue={props.longitude}
        />
        <TextField
          id="standard-full-width"
          label="Add Latitude"
          style={{ margin: 8 }}
          onChange={onSetLatitude}
          placeholder="Enter Latitude"
          fullWidth
          required
          defaultValue={props.latitude}
        />
        <TextField
          id="standard-full-width"
          label="Add Phone number"
          style={{ margin: 8 }}
          onChange={onSetPhone}
          placeholder="Enter Phone number"
          fullWidth
          required
          defaultValue={props.phone}
        />
        <TextField
          id="standard-full-width"
          label="Add Opening time"
          style={{ margin: 8 }}
          onChange={onSetOpeningTime}
          placeholder="Enter Opening time"
          fullWidth
          required
          defaultValue={props.openingTime}
        />
        <TextField
          id="standard-full-width"
          label="Add Closing time"
          style={{ margin: 8 }}
          onChange={onSetClosingTime}
          placeholder="Enter Closing time"
          fullWidth
          required
          defaultValue={props.closingTime}
        />
        <div>
          {" "}
          <Button
            className="addbtn"
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            className="addbtn"
            onClick={onCloseHandler}
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddStore;
