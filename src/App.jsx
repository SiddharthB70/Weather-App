import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import getLocationData from "./services/axiosCalls/getLocationData";

import SearchBar from "./components/SearchForm/SearchBar";
import LocationSection from "./components/LocationSection/LocationSection";
import WeatherSection from "./components/WeatherSection/WeatherSection";

const App = () => {
    const [location, setLocation] = useState("");

    const locationData = useQuery(
        ["locationData", location],
        () => {
            return getLocationData(location);
        },
        {
            retry: false,
            enabled: Boolean(location),
            staleTime: Infinity,
        }
    );

    return (
        <div>
            <SearchBar
                setLocation={setLocation}
                location={location}
            />
            {locationData.data && (
                <div>
                    <LocationSection location={location} />
                    <WeatherSection location={location} />
                </div>
            )}
        </div>
    );
};

export default App;
