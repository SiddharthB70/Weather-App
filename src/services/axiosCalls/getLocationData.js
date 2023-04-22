import axios from "axios";

const getLocationData = async (location) => {
    const response = await axios.get(
        `https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=${
            location.text
        }&magicKey=${
            location.magicKey
        }&category=Populated Place,Address,POI&outFields=District,City,Region,Cntryname,Location&langCode=EN&f=json&token=${
            import.meta.env.VITE_ARC_API_KEY
        }`
    );
    return response.data;
};

export default getLocationData;
