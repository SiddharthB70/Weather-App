import { useHourlyWeather } from "./api/weather";

import CurrentWeather from "./CurrentWeather";
import WeatherTab from "./WeatherTab";

import { Grid } from "@mui/material";

const WeatherSection = ({ coordinates }) => {
    const hourlyWeather = useHourlyWeather(coordinates);

    if (hourlyWeather.isLoading) {
        return null;
    }

    return (
        <Grid container>
            <Grid item>
                <CurrentWeather coordinates={coordinates} />
            </Grid>
            <Grid item>
                <WeatherTab coordinates={coordinates} />
            </Grid>
        </Grid>
    );
};

export default WeatherSection;
