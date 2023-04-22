import { locationAxios } from "@/lib/axios";

const getLocationData = async (location) => {
    const response = await locationAxios.get(
        `/findAddressCandidates?singleLine=${location.text}&magicKey=${location.magicKey}&category=Populated Place,Address,POI&outFields=District,City,Region,Cntryname,Location&langCode=EN&f=json`
    );
    return response.data;
};

export default getLocationData;
