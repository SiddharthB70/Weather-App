import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../hooks/useDebounce";

import { locationAxios } from "@/lib/axios";

export const searchLocation = async (location) => {
    const response = await locationAxios.get(
        `/suggest?text=${location}&f=json`
    );
    return response.data;
};

export const useSuggestions = (searchQuery) => {
    const debouncedQuery = useDebounce(searchQuery, 500);
    const MIN_QUERY_LENGTH = 3;

    return useQuery(
        ["suggestions", debouncedQuery],
        () => {
            return searchLocation(debouncedQuery);
        },
        {
            enabled: Boolean(debouncedQuery.length > MIN_QUERY_LENGTH),
            initialData: {
                suggestions: [],
            },
            select: (data) => {
                return data.suggestions;
            },
        }
    );
};
