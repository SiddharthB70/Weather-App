import { useQuery } from "@tanstack/react-query";

import { weatherAxios } from "@/lib/axios";

export const getDailyWeather = async (coordinates) => {
    const response = await weatherAxios.get(
        `?latitude=${coordinates.y}&longitude=${coordinates.x}&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=auto`
    );
    return response.data;
};

export const useDailyWeather = (coordinates) => {
    return useQuery(["dailyWeather", coordinates], () => {
        return getDailyWeather(coordinates);
    });
};
//reference - &daily=weathercode, &hourly=temperature_2m,weathercode&forecast_days=1&
