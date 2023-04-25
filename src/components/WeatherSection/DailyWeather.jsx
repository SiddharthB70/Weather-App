import { useDailyWeather } from "./hooks/useDailyWeather";
import { formatDailyWeather } from "./utils/formatDailyWeather";
import GridWeatherLayout from "./GridWeatherLayout";

const DailyWeather = ({ coordinates }) => {
    const dailyWeather = useDailyWeather(coordinates);

    if (dailyWeather.isLoading) {
        return null;
    }

    const weatherDetails = formatDailyWeather(dailyWeather);

    return (
        <GridWeatherLayout
            weatherDetails={weatherDetails}
            columns={3}
        />
    );
};

export default DailyWeather;
