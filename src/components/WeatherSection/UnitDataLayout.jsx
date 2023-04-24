import { Grid, Typography } from "@mui/material";

const UnitDataLayout = ({ data }) => {
    return (
        <Grid
            item
            width="150px"
        >
            <Typography variant="h5">{data.heading}</Typography>
            <div
                style={{
                    background: `no-repeat url(${data.descriptionIcon}) left/80%`,
                    height: "80px",
                    width: "100%",
                }}
            ></div>
            <Typography>{data.description}</Typography>
        </Grid>
    );
};

export default UnitDataLayout;
