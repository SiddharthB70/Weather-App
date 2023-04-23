import { useDailyWeather } from "./api/weather";
import { useHourlyWeather } from "./api/weather";
import { useCurrentWeather } from "./api/weather";

import CurrentWeather from "./CurrentWeather";

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

    return (
        <div>
            <CurrentWeather currentWeather={currentWeather.data} />
        </div>
    );
};

export default WeatherSection;
