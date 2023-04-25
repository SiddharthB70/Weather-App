import format from "date-fns-tz/format";
import parseISO from "date-fns/parseISO";
import { getDescription } from "./getDescription";

export const formatHourlyWeather = (hourlyWeather) => {
    const { is_day: isDay, time, weathercode } = hourlyWeather.data.hourly;

    const formattedTime = time.map((t) => {
        return format(parseISO(t), "p");
    });

    const weatherDetails = formattedTime.map((ft, index) => {
        let { descriptionText, descriptionIcon } = getDescription(
            weathercode[index],
            isDay[index]
        );
        return {
            heading: ft,
            descriptionText,
            descriptionIcon,
        };
    });

    return weatherDetails;
};
