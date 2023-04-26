import { useState } from "react";

import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Tab, Grid } from "@mui/material";

import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";

const WeatherTab = ({ coordinates }) => {
    const [tab, setTab] = useState("1");
    return (
        <Grid
            container
            flexDirection="column"
            alignItems="flex-end"
        >
            <TabContext value={tab}>
                <TabList
                    onChange={(e, newValue) => {
                        setTab(newValue);
                    }}
                >
                    <Tab
                        label="daily"
                        value="1"
                    />
                    <Tab
                        label="hourly"
                        value="2"
                    />
                </TabList>
                <TabPanel value="1">
                    <DailyWeather coordinates={coordinates} />
                </TabPanel>
                <TabPanel value="2">
                    <HourlyWeather coordinates={coordinates} />
                </TabPanel>
            </TabContext>
        </Grid>
    );
};

export default WeatherTab;
