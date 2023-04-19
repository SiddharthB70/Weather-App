import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import searchLocations from "../../services/searchLocations";

import SearchBar from "./SearchBar";

const SearchForm = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const fetchedLocations = useQuery(
        ["locations", searchQuery],
        () => searchLocations(searchQuery),
        {
            refetchOnWindowFocus: false,
            retry: false,
            enabled: Boolean(searchQuery),
            initialData: [],
        }
    );

    const onSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(searchInput);
    };

    return (
        <form onSubmit={onSubmit}>
            <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                fetchedLocations={fetchedLocations.data}
            />
        </form>
    );
};

export default SearchForm;
