import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core"; 

function CreateTransaction() {
  return (
    <div>
      <h1>Create Transaction</h1>
      <p>
        A token is the most basic element of cryptocurrency systems. Selecting a
        token from the list calls the fetchTokenData API to obtain information
        about that token. We also call fetchTotalSupply to get the maximum
        number of that token that can currently be issued. APIs used in this
        section: fetchTokenData fetchTotalSupply{" "}
      </p>

      <TextField id="outlined-basic" label="To" variant="outlined" />
      <TextField id="outlined-basic" label="Data" variant="outlined" />
      <TextField id="outlined-basic" label="Value" variant="outlined" />
      <TextField id="outlined-basic" label="Nonce" variant="outlined" />


      <Button variant="contained" color="primary">
        Submit transaction
      </Button> 
    </div>
  );
}

export default CreateTransaction;
    