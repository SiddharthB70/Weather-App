import axios from "axios";

import { LOCATION_API, LOCATION_API_KEY } from "@/config";

export const locationAxios = axios.create({
    baseURL: LOCATION_API,
});

locationAxios.interceptors.request.use((req) => {
    req.url += `&token=${LOCATION_API_KEY}`;
    return req;
});
