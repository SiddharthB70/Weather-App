import { useQuery } from "@tanstack/react-query";
import { weatherAxios } from "@/lib/axios";

const getData = async (coordinates, weatherParameters) => {
    const response = await weatherAxios.get(
        `?latitude=${coordinates.y}&longitude=${coordinates.x}&timezone=auto&` +
            weatherParameters
    );
    return response.data;
};

const useWeatherQuery = (queryKeys, coordinates, weatherParameters) => {
    return useQuery([...queryKeys], () => {
        return getData(coordinates, weatherParameters);
    });
};

export const useCurrentWeather = (coordinates) => {
    const currentParameters = "current_weather=true";
    const queryKeys = ["currentWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, currentParameters);
};

export const useDailyWeather = (coordinates) => {
    const dailyParameters =
        "daily=weathercode,apparent_temperature_max,apparent_temperature_min";
    const queryKeys = ["dailyWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, dailyParameters);
};

export const useHourlyWeather = (coordinates) => {
    const hourlyParameters =
        "hourly=temperature_2m,windspeed_10m,winddirection_10m,weathercode&forecast_days=1";
    const queryKeys = ["hourlyWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, hourlyParameters);
};
