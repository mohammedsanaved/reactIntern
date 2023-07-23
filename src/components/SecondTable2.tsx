import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const SecondTable2 = () => {
  const [checked, setChecked] = React.useState([true, false, false]);

  const handleChange1 = (event) => {
    const newChecked = [
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ];
    setChecked(newChecked);
  };

  const handleChange2 = (event) => {
    const newChecked = [event.target.checked, checked[1], checked[2]];
    setChecked(newChecked);
  };

  const handleChange3 = (event) => {
    const newChecked = [checked[0], event.target.checked, checked[2]];
    setChecked(newChecked);
  };

  const handleChange4 = (event) => {
    const newChecked = [checked[0], checked[1], event.target.checked];
    setChecked(newChecked);
  };

  const parentCheckboxChecked = checked[0] && checked[1] && checked[2];
  const parentCheckboxIndeterminate =
    checked[0] !== checked[1] || checked[1] !== checked[2];

  return (
    <div>
      <FormControlLabel
        label="design"
        control={
          <Checkbox
            checked={parentCheckboxChecked}
            indeterminate={parentCheckboxIndeterminate}
            onChange={handleChange1}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <FormControlLabel
          label="graphic_design"
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="product_design"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
        <FormControlLabel
          label="web_design"
          control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
        />
      </Box>
    </div>
  );
};

export default SecondTable2;
