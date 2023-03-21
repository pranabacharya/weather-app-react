import React from "react";
import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const foreCastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label htmlFor="" className="day">
                    {foreCastDays[index]}
                  </label>
                  <label htmlFor="" className="description">
                    {item.weather[0].description}
                  </label>
                  <label htmlFor="" className="min-max">
                    {Math.round(item.main.temp_min)}&deg;C /{" "}
                    {Math.round(item.main.temp_max)}&deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="pressure">Pressure:</label>
                  <label htmlFor="">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="humidity">Humidity:</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="clouds">Clouds:</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="windspeed">Wind speed:</label>
                  <label htmlFor="">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="sealevel">Sea Level:</label>
                  <label htmlFor="">{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="feelslike">Feels Like:</label>
                  <label htmlFor="">
                    {Math.round(item.main.feels_like)}&deg;C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
