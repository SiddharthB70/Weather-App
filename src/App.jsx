import { useState } from "react";

import SearchBar from "./components/SearchForm/SearchBar";
import LocationSection from "./components/LocationSection/LocationSection";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import { useLocationDetails } from "./components/LocationSection/api/locationDetails";

const App = () => {
    const [location, setLocation] = useState("");
    return (
        <div>
            <SearchBar setLocation={setLocation} />
            {location && (
                <div>
                    <LocationSection location={location} />
                    {/* <WeatherSection location={location} /> */}
                </div>
            )}
        </div>
    );
};

export default App;
