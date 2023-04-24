import { useWeatherQuery } from "../api/weather";

export const useCurrentWeather = (coordinates) => {
    const currentParameters = "current_weather=true";
    const queryKeys = ["currentWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, currentParameters);
};
