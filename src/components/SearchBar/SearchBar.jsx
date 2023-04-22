import { useState } from "react";

import { Autocomplete, TextField } from "@mui/material";

import { useSuggestions } from "./api/suggestions";

const SearchBar = ({ setLocation, location }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const suggestions = useSuggestions(searchQuery, location);

    return (
        <Autocomplete
            options={suggestions.data.map((location) => location.text)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                />
            )}
            inputValue={searchQuery}
            onInputChange={(event, newSearchQuery) => {
                setSearchQuery(newSearchQuery);
            }}
            sx={{
                width: "400px",
            }}
            onChange={(event, newLocation, reason) => {
                if (reason === "selectOption")
                    setLocation(
                        suggestions.data.find((s) => s.text === newLocation)
                    );
            }}
            autoComplete
            freeSolo
            blurOnSelect
        />
    );
};

export default SearchBar;
