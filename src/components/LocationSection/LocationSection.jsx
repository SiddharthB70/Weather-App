import { useLocationDetails } from "./api/locationDetails";
import { Stack, Typography } from "@mui/material";

const LocationSection = ({ location }) => {
    const locationData = useLocationDetails(location);
    if (locationData.isLoading) {
        return null;
    }

    const locationRegions = Object.values(
        locationData.data.candidates[0].attributes
    );

    return (
        <Stack>
            {locationRegions.map((location, index) => {
                if (!location) return null;
                return (
                    <Typography
                        key={location}
                        variant={"h4"}
                    >
                        {location}
                    </Typography>
                );
            })}
        </Stack>
    );
};

export default LocationSection;
