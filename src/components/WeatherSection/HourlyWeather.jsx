import { useHourlyWeather } from "./hooks/useHourlyWeather";
import { getDescription } from "./utils/getDescription";
import UnitDataLayout from "./UnitDataLayout";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Grid } from "@mui/material";
import chunk from "lodash.chunk";

const HourlyWeather = ({ coordinates }) => {
    const hourlyWeather = useHourlyWeather(coordinates);
    if (hourlyWeather.isLoading) {
        return null;
    }

    const { is_day: isDay, time, weathercode } = hourlyWeather.data.hourly;

    const formattedTime = time.map((t) => {
        return format(parseISO(t), "p");
    });

    const weatherDetails = formattedTime.map((ft, index) => {
        let { descriptionText, descriptionIcon } = getDescription(
            weathercode[index],
            isDay[index]
        );
        return {
            heading: ft,
            descriptionText,
            descriptionIcon,
        };
    });

    const COLUMNS = 6;
    const chunkWeatherDetails = chunk(weatherDetails, COLUMNS);

    return (
        <Grid
            container
            flexDirection="column"
            spacing={2}
            sx={{
                gap: "10px",
            }}
        >
            {chunkWeatherDetails.map((chunk, index) => {
                return (
                    <Grid
                        key={index}
                        container
                        justifyContent="center"
                    >
                        {chunk.map((dailyWeather) => {
                            return (
                                <UnitDataLayout
                                    data={dailyWeather}
                                    key={dailyWeather.heading}
                                />
                            );
                        })}
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default HourlyWeather;
