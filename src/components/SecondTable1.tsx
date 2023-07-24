import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const SecondTable1 = () => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: { target: { checked: boolean } }) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: { target: { checked: boolean } }) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div>
      <FormControlLabel
        label="customer_service"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {checked[0] && ( // Render "support" and "customer_success" checkboxes only if "customer_service" is checked
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          <FormControlLabel
            label="support"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="customer_success"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      )}
    </div>
  );
};

export default SecondTable1;
