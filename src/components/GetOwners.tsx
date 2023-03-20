import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core"; 

function GetOwners() {
  return (
    <div>
      <h1>Get Owners from a Safe</h1>
      <p>
        A token is the most basic element of cryptocurrency systems. Selecting a
        token from the list calls the fetchTokenData API to obtain information
        about that token. We also call fetchTotalSupply to get the maximum
        number of that token that can currently be issued. APIs used in this
        section: fetchTokenData fetchTotalSupply{" "}
      </p>
      <TextField id="outlined-basic" label="Address" variant="outlined" />

      <Button variant="contained" color="primary">
        Get list of owners!
      </Button>
    </div>
  );
}

export default GetOwners;
