import { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import LocationSection from "./components/LocationSection/LocationSection";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import { useLocationDetails } from "./api/locationDetails";

import { Grid } from "@mui/material";

const App = () => {
    const [location, setLocation] = useState("");
    const locationData = useLocationDetails(location);
    let locationRegions, locationCoordinates;

    if (locationData.isSuccess) {
        locationRegions = locationData.data.attributes;
        locationCoordinates = locationData.data.location;
    }

    return (
        <Grid
            container
            height="100vh"
        >
            <Grid
                item
                xs="auto"
                container
                direction="column"
                spacing={3}
                sx={{
                    marginTop: "8rem",
                }}
            >
                <Grid item>
                    <SearchBar
                        setLocation={setLocation}
                        location={location.text}
                    />
                </Grid>
                <Grid item>
                    {locationData.isSuccess && (
                        <LocationSection regions={locationRegions} />
                    )}
                </Grid>
            </Grid>
            <Grid
                item
                xs={true}
                sx={{
                    marginTop: "8rem",
                }}
            >
                {locationData.isSuccess && (
                    <WeatherSection coordinates={locationCoordinates} />
                )}
            </Grid>
        </Grid>
    );
};

export default App;
