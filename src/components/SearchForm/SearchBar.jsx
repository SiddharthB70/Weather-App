import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [value, setValue] = useState(null);

    const check = [];

    return (
        <Autocomplete
            options={check}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label="freesolo"
                    />
                );
            }}
            sx={{
                width: "300px",
            }}
            inputValue={searchInput}
            onInputChange={(e, newValue) => {
                setSearchInput(newValue);
            }}
            value={null}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            blurOnSelect
            clearOnBlur={false}
            autoComplete
            noOptionsText={searchInput ? "No Options" : "Enter Value to Search"}
        />
    );
};

export default SearchBar;
