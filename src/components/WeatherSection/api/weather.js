import { useQuery } from "@tanstack/react-query";
import { weatherAxios } from "@/lib/axios";

const getData = async (coordinates, weatherParameters) => {
    const response = await weatherAxios.get(
        `?latitude=${coordinates.y}&longitude=${coordinates.x}&timezone=auto&` +
            weatherParameters
    );
    return response.data;
};

export const useWeatherQuery = (queryKeys, coordinates, weatherParameters) => {
    return useQuery([...queryKeys], () => {
        return getData(coordinates, weatherParameters);
    });
};

export const useHourlyWeather = (coordinates) => {
    const hourlyParameters =
        "hourly=temperature_2m,windspeed_10m,winddirection_10m,weathercode&forecast_days=1";
    const queryKeys = ["hourlyWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, hourlyParameters);
};
