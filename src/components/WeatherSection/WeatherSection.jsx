import { useDailyWeather } from "./api/weather";
import { useHourlyWeather } from "./api/weather";
import { useCurrentWeather } from "./api/weather";

const WeatherSection = ({ coordinates }) => {
    const dailyWeather = useDailyWeather(coordinates);
    const hourlyWeather = useHourlyWeather(coordinates);
    const currentWeather = useCurrentWeather(coordinates);

    if (
        dailyWeather.isLoading ||
        hourlyWeather.isLoading ||
        currentWeather.isLoading
    ) {
        return null;
    }
};

export default WeatherSection;
