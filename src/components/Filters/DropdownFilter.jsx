import React, { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

const DropdownFilter = ({ data, title }) => {
  const [options, setOptions] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
    if (title === "Minimum experience") {
      dispatch({ type: "FILTER_BY_EXPERIENCE", payload: selectedOptions });
    }
    if (title === "Location") {
      dispatch({ type: "FILTER_BY_LOCATION", payload: selectedOptions });
    }
    if (title === "Remote/on-site") {
      dispatch({ type: "FILTER_BY_REMOTE/ON-SITE", payload: selectedOptions });
    }
    if (title === "Min base pay") {
      dispatch({ type: "FILTER_BY_BASE_PAY", payload: selectedOptions });
    }
  };

  const handleDelete = (item) => {
    // Remove the item from the list of selected items
    setSelectedOptions((prev) => prev.filter((selected) => selected !== item));
  };

  return (
    <Box className="box">
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Fruits" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() => handleDelete(value)}
                  deleteIcon={<DeleteIcon />}
                />
              ))}
            </Box>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownFilter;
