export const getDescription = (weatherCode, isDay) => {
    const descriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Drizzle",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Dense drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Heavy freezing drizzle",
        61: "Slight Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        66: "Light freezing drizzle",
        67: "Heavy freezing drizzle",
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

    let iconFolder = isDay ? "day" : "night";
    const descriptionIcon = `/weatherIcons/${iconFolder}/${weatherCode}.png`;

    return {
        descriptionText: descriptions[weatherCode] || descriptions["default"],
        descriptionIcon,
    };
};
