import { weatherAxios } from "@/lib/axios";

const getWeatherData = async (coordinates) => {
    const response = await weatherAxios.get(
        `/forecast?latitude=${coordinates.y}&longitude=${coordinates.x}&current_weather=true&hourly=temperature_2m,weathercode&forecast_days=1&timezone=auto&daily=weathercode`
    );
    return response.data;
};

export default getWeatherData;
