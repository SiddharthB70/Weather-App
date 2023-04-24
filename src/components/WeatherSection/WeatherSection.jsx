import { useDailyWeather } from "./api/weather";
import { useHourlyWeather } from "./api/weather";

import CurrentWeather from "./CurrentWeather";

import { Grid } from "@mui/material";

const WeatherSection = ({ coordinates }) => {
    const dailyWeather = useDailyWeather(coordinates);
    const hourlyWeather = useHourlyWeather(coordinates);

    if (dailyWeather.isLoading || hourlyWeather.isLoading) {
        return null;
    }

    return (
        <Grid>
            <Grid item>
                <CurrentWeather coordinates={coordinates} />
            </Grid>
        </Grid>
    );
};

export default WeatherSection;
