import CurrentWeather from "./CurrentWeather";
import WeatherTab from "./WeatherTab";

import { Grid } from "@mui/material";

const WeatherSection = ({ coordinates }) => {
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
