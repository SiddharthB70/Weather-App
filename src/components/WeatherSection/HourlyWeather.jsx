import { useHourlyWeather } from "./hooks/useHourlyWeather";
import GridWeatherLayout from "./GridWeatherLayout";
import { formatHourlyWeather } from "./utils/formatHourlyWeather";

const HourlyWeather = ({ coordinates }) => {
    const hourlyWeather = useHourlyWeather(coordinates);
    if (hourlyWeather.isLoading) {
        return null;
    }

    const weatherDetails = formatHourlyWeather(hourlyWeather);

    return (
        <GridWeatherLayout
            weatherDetails={weatherDetails}
            columns={6}
        />
    );
};

export default HourlyWeather;
