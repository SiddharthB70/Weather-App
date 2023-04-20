import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { Autocomplete, TextField, debounce } from "@mui/material";

import searchLocations from "../../services/searchLocations";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const suggestions = useQuery(
        ["suggestions", searchQuery],
        () => {
            return searchLocations(searchQuery);
        },
        {
            retry: false,
            initialData: {
                suggestions: [],
            },
            staleTime: Infinity,
            select: (data) => {
                return data.suggestions;
            },
        }
    );

    const debounceSearch = useCallback(
        debounce(() => {
            suggestions.refetch();
        }, 1000),
        []
    );

    useEffect(() => {
        //prevent unnecessary searches - query length < 4 or upon selecting option
        if (searchQuery.length < 4 || searchQuery === location) {
            debounceSearch.clear();
            return;
        }
        debounceSearch();
    }, [searchQuery, debounceSearch, location]);

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
                width: "500px",
            }}
            value={location}
            onChange={(event, newLocation, reason) => {
                if (reason === "selectOption") setLocation(newLocation);
            }}
            autoComplete
            freeSolo
            blurOnSelect
        />
    );
};

export default SearchBar;
