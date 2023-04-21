import { useQueryClient } from "@tanstack/react-query";
import { Stack, Typography } from "@mui/material";

const LocationSection = ({ location }) => {
    const queryClient = useQueryClient();

    const locationData = queryClient.getQueryData(["locationData", location]);
    const locationRegions = Object.values(
        locationData.candidates[0].attributes
    );

    return (
        <Stack>
            {locationRegions.map((location, index) => {
                if (!location) return null;
                return (
                    <Typography
                        key={location}
                        variant={`h${index + 2}`}
                    >
                        {location}
                    </Typography>
                );
            })}
        </Stack>
    );
};

export default LocationSection;
