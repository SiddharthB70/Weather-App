import { useQueryClient, useQuery } from "@tanstack/react-query";

import getWeatherData from "../../services/axiosCalls/getWeatherData";

const WeatherSection = ({ location }) => {
    const queryClient = useQueryClient();

    const locationData = queryClient.getQueryData(["locationData", location]);
    const locationCoordinates = locationData.candidates[0].location;
    const weather = useQuery(
        ["weather", locationCoordinates],
        () => {
            return getWeatherData(locationCoordinates);
        },
        {
            retry: false,
            staleTime: Infinity,
        }
    );
};

export default WeatherSection;
