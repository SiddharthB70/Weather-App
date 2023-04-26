import { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import LocationSection from "./components/LocationSection/LocationSection";
import WeatherTab from "./components/WeatherSection/WeatherTab";
import CurrentWeather from "./components/WeatherSection/CurrentWeather";
import { useLocationDetails } from "./api/locationDetails";
import { DEFAULT_LOCATION } from "./config";

import { Grid, CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const App = () => {
    const [location, setLocation] = useState(JSON.parse(DEFAULT_LOCATION));
    const locationData = useLocationDetails(location);
    let locationRegions, locationCoordinates;

    if (locationData.isSuccess) {
        locationRegions = locationData.data.attributes;
        locationCoordinates = locationData.data.location;
    }

    const theme = createTheme({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        padding: "30px",
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Grid
                    container
                    justifyContent="space-between"
                >
                    <Grid
                        item
                        xs="auto"
                        container
                        flexDirection="column"
                        gap="10px"
                    >
                        <Grid
                            item
                            alignSelf="flex-end"
                        >
                            <SearchBar
                                setLocation={setLocation}
                                location={location.text}
                            />
                        </Grid>
                        <Grid item>
                            {locationData.isSuccess && (
                                <div>
                                    <LocationSection
                                        regions={locationRegions}
                                    />

                                    <CurrentWeather
                                        coordinates={locationCoordinates}
                                    />
                                </div>
                            )}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs="auto"
                        container
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <Grid item>
                            {locationData.isSuccess && (
                                <WeatherTab coordinates={locationCoordinates} />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default App;
