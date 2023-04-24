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
