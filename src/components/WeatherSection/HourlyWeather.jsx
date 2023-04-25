import { useHourlyWeather } from "./hooks/useHourlyWeather";
import { getDescription } from "./utils/getDescription";
import GridWeatherLayout from "./GridWeatherLayou";

import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
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

    return <GridWeatherLayout chunkWeatherDetails={chunkWeatherDetails} />;
};

export default HourlyWeather;
