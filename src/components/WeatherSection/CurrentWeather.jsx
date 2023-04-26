import { useCurrentWeather } from "./hooks/useCurrentWeather";

import formatInTimeZone from "date-fns-tz/formatInTimeZone";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import DescriptionIcon from "@mui/icons-material/Description";

import { getDescription } from "./utils/getDescription";

const CurrentWeather = ({ coordinates }) => {
    const currentWeather = useCurrentWeather(coordinates);

    if (currentWeather.isLoading) {
        return null;
    }

    const { timezone, current_weather: weather } = currentWeather.data;
    const { temperature, windspeed, weathercode, is_day: isDay } = weather;

    const { descriptionText, descriptionIcon } = getDescription(
        weathercode,
        isDay
    );

    const presentDate = new Date();

    const formattedDate = formatInTimeZone(presentDate, timezone, "PPPP");
    const formattedTime = formatInTimeZone(presentDate, timezone, "p");

    const theme = createTheme({
        components: {
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        minWidth: 0,
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        gap: "10px",
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <TodayIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={formattedDate} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccessTimeIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={formattedTime} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DeviceThermostatIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={`${temperature} \u00b0C`} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AirIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={`${windspeed} km/h`} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DescriptionIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary={`${descriptionText}`} />
                </ListItem>
                <ListItem
                    sx={{
                        height: "150px",
                        width: "160px",
                        background: `no-repeat url(${descriptionIcon}) center/110%`,
                    }}
                ></ListItem>
            </List>
        </ThemeProvider>
    );
};

export default CurrentWeather;
