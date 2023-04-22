import { QueryClient } from "@tanstack/react-query";

const queryConfig = {
    queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    },
};

export const queryClient = new QueryClient({
    defaultOptions: queryConfig,
});
