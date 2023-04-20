import axios from "axios";

const searchLocations = async (location) => {
    const response = await axios.get(
        `https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${location}&f=json&token=${
            import.meta.env.VITE_ARC_API_KEY
        }`
    );
    return response.data;
};

export default searchLocations;
