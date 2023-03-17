import * as React from "react";
import SelectNetwork from "./Dropdown";
import FormControl from "@mui/material/FormControl";
import { NativeSelect, TextField } from "@material-ui/core";
export default function DeployNetwork() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <h1>Deploy to network</h1>
      <p>
        A token is the most basic element of cryptocurrency systems. Selecting a
        token from the list calls the fetchTokenData API to obtain information
        about that token. We also call fetchTotalSupply to get the maximum
        number of that token that can currently be issued. APIs used in this
        section: fetchTokenData fetchTotalSupply{" "}
      </p>
      <SelectNetwork/>
      <TextField id="outlined-basic" label="New Owner Address" variant="outlined" />
      <TextField id="outlined-basic" label="New Owner Address" variant="outlined" />
      <TextField id="outlined-basic" label="New Owner Address" variant="outlined" />
      <NativeSelect />
    </FormControl>
  );
}
