import UnitDataLayout from "./UnitDataLayout";

import { Grid } from "@mui/material";
import chunk from "lodash.chunk";

const GridWeatherLayout = ({ weatherDetails, columns }) => {
    const chunkWeatherDetails = chunk(weatherDetails, columns);

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

export default GridWeatherLayout;
