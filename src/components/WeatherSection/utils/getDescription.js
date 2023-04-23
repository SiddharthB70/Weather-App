export const getDescription = (weatherCode) => {
    switch (weatherCode) {
        case 0:
            return "Clear sky";
        case 1:
            return "Mainly clear";
        case 2:
            return "Partly cloudy";
        case 3:
            return "Overcast";
        case 45:
            return "Drizzle";
        case 48:
            return "Depositing rime fog";
        case 51:
            return "Light drizzle";
        case 53:
            return "Moderate drizzle";
        case 55:
            return "Dense drizzle";
        case 56:
            return "Light freezing drizzle";
        case 57:
            return "Heavy freezing drizzle";
        case 61:
            return "Slight Rain";
        case 63:
            return "Moderate Rain";
        case 65:
            return "Heavy Rain";
        case 66:
            return "Light freezing drizzle";
        case 67:
            return "Heavy freezing drizzle";
        case 71:
            return "Slight snow fall";
        case 73:
            return "Moderate snow fall";
        case 75:
            return "Heavy snow fall";
        case 77:
            return "Snow grains";
        case 80:
            return "Slight rain showers";
        case 81:
            return "Moderate rain showers";
        case 82:
            return "Violent rain showers";
        case 85:
            return "Light snow showers";
        case 86:
            return "Heavy snow showers";
        case 95:
            return "Slight/Moderate thunderstorm";
        case 96:
            return "Thunderstorm with slight hail";
        case 99:
            return "Thunderstorm with moderate hail";
        default:
            return "Unknown Weather";
    }
};
