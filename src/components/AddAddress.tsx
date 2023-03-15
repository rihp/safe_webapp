import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core"; 

function AddAddress() {
  return (
    <div>
      <h1>Add Address</h1>
      <p>
        A token is the most basic element of cryptocurrency systems. Selecting a
        token from the list calls the fetchTokenData API to obtain information
        about that token. We also call fetchTotalSupply to get the maximum
        number of that token that can currently be issued. APIs used in this
        section: fetchTokenData fetchTotalSupply{" "}
      </p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
}

export default AddAddress;
