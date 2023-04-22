import axios from "axios";

const getWeatherData = async (coordinates) => {
    const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.y}&longitude=${coordinates.x}&current_weather=true&hourly=temperature_2m,weathercode&forecast_days=1&timezone=auto&daily=weathercode`
    );
    return response.data;
};

export default getWeatherData;
