import { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import LocationSection from "./components/LocationSection/LocationSection";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import { useLocationDetails } from "./api/locationDetails";

const App = () => {
    const [location, setLocation] = useState("");
    const locationData = useLocationDetails(location);
    let locationRegions, locationCoordinates;

    if (locationData.isSuccess) {
        locationRegions = locationData.data.attributes;
        locationCoordinates = locationData.data.location;
    }

    return (
        <div>
            <SearchBar
                setLocation={setLocation}
                location={location.text}
            />
            {locationData.isSuccess && (
                <div>
                    <LocationSection regions={locationRegions} />
                    <WeatherSection coordinates={locationCoordinates} />
                </div>
            )}
        </div>
    );
};

export default App;
