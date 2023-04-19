import axios from "axios";

const searchLocations = async (location) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/?addressdetails&q=${location}&format=json&limit=5`
    );
    return response.data;
};

export default searchLocations;
