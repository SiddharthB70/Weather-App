import { getDescription } from "./getDescription";

export const formatDailyWeather = (dailyWeather) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const { weathercode } = dailyWeather.data.daily;
    const descriptors = weathercode.map((wc) => getDescription(wc));

    const weatherDetails = days.map((day, index) => {
        return {
            heading: day,
            descriptionText: descriptors[index].descriptionText,
            descriptionIcon: descriptors[index].descriptionIcon,
        };
    });

    return weatherDetails;
};
