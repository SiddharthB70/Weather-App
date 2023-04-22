import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const AppProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {" "}
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
