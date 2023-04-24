import { useWeatherQuery } from "../api/weather";

import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns-tz/format";

export const useDailyWeather = (coordinates) => {
    const presentDate = new Date();
    const startDate = startOfWeek(presentDate, { weekStartsOn: 1 });
    const endDate = endOfWeek(presentDate, { weekStartsOn: 1 });

    const formattedStartDate = format(startDate, "yyyy-MM-dd");
    const formattedEndDate = format(endDate, "yyyy-MM-dd");

    const dailyParameters = `daily=weathercode&start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
    const queryKeys = ["dailyWeather", coordinates];
    return useWeatherQuery(queryKeys, coordinates, dailyParameters);
};
