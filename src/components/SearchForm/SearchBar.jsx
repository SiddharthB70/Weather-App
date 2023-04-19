import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

import uniq from "lodash.uniq";

const SearchBar = ({ searchInput, setSearchInput, fetchedLocations }) => {
    const [value, setValue] = useState(null);

    return (
        <Autocomplete
            options={uniq(
                fetchedLocations.map((location) => location.display_name)
            )}
            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label="freesolo"
                    />
                );
            }}
            sx={{
                width: "600px",
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
