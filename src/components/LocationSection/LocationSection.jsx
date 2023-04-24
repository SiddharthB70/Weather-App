import { Stack, Typography } from "@mui/material";
import uniq from "lodash.uniq";

const LocationSection = ({ regions }) => {
    const locationRegions = uniq(
        Object.values(regions).filter((location) => location !== "")
    );

    return (
        <Stack
            display="block"
            width="400px"
        >
            {locationRegions.map((location, index) => {
                if (!location) return null;
                return (
                    <Typography
                        key={location}
                        variant={`h${index + 3}`}
                        sx={{ overflowWrap: "break-word" }}
                    >
                        {location}
                    </Typography>
                );
            })}
        </Stack>
    );
};

export default LocationSection;
