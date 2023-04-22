import { useDailyWeather } from "./api/dailyWeather";

const WeatherSection = ({ coordinates }) => {
    const dailyWeather = useDailyWeather(coordinates);
    if (dailyWeather.isLoading) {
        return null;
    }
};

export default WeatherSection;
