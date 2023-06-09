export const getDescription = (weatherCode, isDay = 1) => {
    const descriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Drizzle",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Heavy freezing drizzle",
        61: "Slight Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        66: "Light freezing Rain",
        67: "Heavy freezing Rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Light snow showers",
        86: "Heavy snow showers",
        95: "Slight/Moderate thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with moderate hail",
        default: "Unknown Weather",
    };

    const commonIcons = [
        3, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 95, 99,
    ];

    let iconFolder = commonIcons.includes(weatherCode)
        ? "common"
        : isDay
        ? "day"
        : "night";

    const descriptionIcon = `/weatherIcons/${iconFolder}/${weatherCode}.svg`;

    return {
        descriptionText: descriptions[weatherCode] || descriptions["default"],
        descriptionIcon,
    };
};
