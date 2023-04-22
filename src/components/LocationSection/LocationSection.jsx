import { Stack, Typography } from "@mui/material";

const LocationSection = ({ regions }) => {
    const locationRegions = Object.values(regions).filter(
        (location) => location !== ""
    );

    return (
        <Stack
            display="block"
            width="max-content"
        >
            {locationRegions.map((location, index) => {
                if (!location) return null;
                return (
                    <Typography
                        key={location}
                        variant={`h${index + 3}`}
                    >
                        {location}
                    </Typography>
                );
            })}
        </Stack>
    );
};

export default LocationSection;
