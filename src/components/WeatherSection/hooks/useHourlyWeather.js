import { useWeatherQuery } from "../api/weather";

export const useHourlyWeather = (coordinates) => {
    const hourlyParameters = "hourly=weathercode,is_day&forecast_days=1";
    const queryKeys = ["hourlyWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, hourlyParameters);
};
