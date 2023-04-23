import formatInTimeZone from "date-fns-tz/formatInTimeZone";

import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import DescriptionIcon from "@mui/icons-material/Description";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const CurrentWeather = ({ currentWeather }) => {
    const { timezone, current_weather: weather } = currentWeather;
    const { temperature, windspeed, weathercode } = weather;

    const presentDate = new Date();
    const formattedDate = formatInTimeZone(presentDate, timezone, "PPP");
    const formattedTime = formatInTimeZone(presentDate, timezone, "p");

    return (
        <List>
            <ListItem>
                <ListItemIcon
                    sx={{
                        flex: "0 0 50px",
                    }}
                >
                    <TodayIcon />
                </ListItemIcon>
                <ListItemText primary={formattedDate} />
            </ListItem>
            <ListItem>
                <ListItemIcon
                    sx={{
                        flex: "0 0 50px",
                    }}
                >
                    <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary={formattedTime} />
            </ListItem>
            <ListItem>
                <ListItemIcon
                    sx={{
                        flex: "0 0 50px",
                    }}
                >
                    <DeviceThermostatIcon />
                </ListItemIcon>
                <ListItemText primary={`${temperature} \u00b0C`} />
            </ListItem>
            <ListItem>
                <ListItemIcon
                    sx={{
                        flex: "0 0 50px",
                    }}
                >
                    <AirIcon />
                </ListItemIcon>
                <ListItemText primary={`${windspeed}`} />
            </ListItem>
            <ListItem>
                <ListItemIcon
                    sx={{
                        flex: "0 0 50px",
                    }}
                >
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={`${weathercode}`} />
            </ListItem>
        </List>
    );
};

export default CurrentWeather;
