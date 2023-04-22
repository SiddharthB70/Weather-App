import { locationAxios } from "@/lib/axios";

const searchLocations = async (location) => {
    const response = await locationAxios.get(
        `/suggest?text=${location}&f=json`
    );
    return response.data;
};

export default searchLocations;
