import { useDailyWeather } from "./hooks/useDailyWeather";
import { getDescription } from "./utils/getDescription";
import GridWeatherLayout from "./GridWeatherLayou";

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

    return <GridWeatherLayout chunkWeatherDetails={chunkWeatherDetails} />;
};

export default DailyWeather;
