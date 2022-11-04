import {
  Box,
  InputLabel,
  FormControl,
  MenuItem,
  Typography,
  Select,
} from "@mui/material";

const DropDown = ({ type, handleChange, types }) => {
  return (
    <Box mt={5}>
      <Typography variant="h4" mb={3}>
        Tipo de pokemones
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Tipos</InputLabel>
        <Select value={type} label="Tipos" onChange={handleChange}>
          {types.length > 0 &&
            types.map(({ url, name }) => (
              <MenuItem value={url}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
