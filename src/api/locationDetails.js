import { useQuery } from "@tanstack/react-query";

import { locationAxios } from "@/lib/axios";

export const getLocationDetails = async (location) => {
    const response = await locationAxios.get(
        `/findAddressCandidates?singleLine=${location.text}&magicKey=${location.magicKey}&category=Populated Place,Address,POI&outFields=District,City,Region,Cntryname,Location&langCode=EN&f=json`
    );
    return response.data;
};

export const useLocationDetails = (location) => {
    return useQuery(
        ["locationData", location],
        () => getLocationDetails(location),
        {
            staleTime: Infinity,
            select: (data) => {
                return data.candidates[0];
            },
            enabled: Boolean(location),
        }
    );
};
