import { useDailyWeather } from "./hooks/useDailyWeather";
import { getDescription } from "./utils/getDescription";
import UnitDataLayout from "./UnitDataLayout";

import { Grid } from "@mui/material";
import chunk from "lodash.chunk";

const DailyWeather = ({ coordinates }) => {
    const dailyWeather = useDailyWeather(coordinates);

    if (dailyWeather.isLoading) {
        return null;
    }

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const { weathercode } = dailyWeather.data.daily;
    const descriptors = weathercode.map((wc) => getDescription(wc));

    const weatherDetails = days.map((day, index) => {
        return {
            heading: day,
            descriptionText: descriptors[index].descriptionText,
            descriptionIcon: descriptors[index].descriptionIcon,
        };
    });

    const COLUMNS = 3;
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

export default DailyWeather;
