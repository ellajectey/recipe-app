Personal form
import { Box, TextField, Grid, Autocomplete, Button } from "@mui/material";
import Navbar from "../../components/navbar";

export default function AddRecipe() {
  return (
   <>
    <Navbar/>
    <div className="newRecipeForm">
      <h1>Add New Recipe</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        
          <TextField
            id="outlined-multiline-flexible"
            label="Recipe Title"
            multiline
            maxRows={4}
            sx={{ width: 300 }}
          />
      

        <div>
          <TextField
            id="outlined-multiline-static"
            label="Recipe Description"
            multiline
            rows={4}
            defaultValue=""
            sx={{ width: 300 }}
          />
        </div>
      </Box>

      <Autocomplete 
        className="countryComponent"
        id="country-select-demo"
        sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div>
       
        {/* <Button variant="contained" component="label">
          Choose Image
          <input type="file" hidden />
        </Button> */}

<form>
      <TextField type="file" />
     
    </form>
      </div>

      <Button variant="contained" color="primary" component="span">
        Add New Recipe
      </Button>
    </div>
    </>
  );
}

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
];
