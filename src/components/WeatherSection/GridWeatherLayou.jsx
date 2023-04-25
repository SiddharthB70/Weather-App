import { Grid } from "@mui/material";
import UnitDataLayout from "./UnitDataLayout";

const GridWeatherLayout = ({ chunkWeatherDetails }) => {
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
