import { useDailyWeather } from "./hooks/useDailyWeather";

import { getDescription } from "./utils/getDescription";

import { Stack } from "@mui/material";

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
            description: descriptors[index].descriptionText,
            descriptionIcon: descriptors[index].descriptionIcon,
        };
    });

    return (
        <Stack>
            {weatherDetails.map((wd) => {
                return (
                    <div key={wd.heading}>
                        <h1>{wd.heading}</h1>
                        <div
                            style={{
                                background: `no-repeat url(${wd.descriptionIcon}) center/80%`,
                                height: "100px",
                                width: "100px",
                            }}
                        ></div>
                        <p>{wd.description}</p>
                    </div>
                );
            })}
        </Stack>
    );
};

export default DailyWeather;
