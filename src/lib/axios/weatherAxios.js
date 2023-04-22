import axios from "axios";

import { WEATHER_API } from "@/config";

export const weatherAxios = axios.create({
    baseURL: WEATHER_API,
});
