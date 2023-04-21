import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import getLocationData from "./services/getLocationData";

import SearchBar from "./components/SearchForm/SearchBar";

const App = () => {
    const [location, setLocation] = useState({});

    const locationData = useQuery(
        ["locationData", location],
        () => {
            return getLocationData(location);
        },
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
            initialData: {},
        }
    );

    return (
        <div>
            <SearchBar
                setLocation={setLocation}
                location={location}
            />
        </div>
    );
};

export default App;
