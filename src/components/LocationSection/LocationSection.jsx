import { Stack, Typography } from "@mui/material";

const LocationSection = ({ regions }) => {
    const locationRegions = Object.values(regions);

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
