const express = require("express");
const https = require("https");
const path = require("path");
const moment = require('moment');
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "/public");


const { latitude, longitude, getLocation } = require(path.join(__dirname, "/public/js/getLocation.js"))

app.set("view engine", "hbs");

app.use(express.static(staticPath));

app.get("/", (req, res) => {

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=74.0060&appid=73ca9c73c01bb3ec9b31fc2e60d9015b&units=metric`
    https.get(url, (response) => {
        let data = '';
        response.on('data', function (chunk) {
            data += chunk;
        });
        response.on('end', () => {
            // Now we got the whole response body
            const weather = JSON.parse(data);
            // console.log(moment.unix(weather.current.dt).format("h:mm a"));

            var hourlyWeather = {
                name: "bharat",
                hourly: [
                    {
                        time: moment.unix(weather.hourly[1].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[1].temp),
                        image: weather.hourly[1].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[2].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[2].temp),
                        image: weather.hourly[2].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[3].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[3].temp),
                        image: weather.hourly[3].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[4].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[4].temp),
                        image: weather.hourly[4].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[5].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[5].temp),
                        image: weather.hourly[5].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[6].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[6].temp),
                        image: weather.hourly[6].weather[0].icon
                    },
                    {
                        time: moment.unix(weather.hourly[7].dt).format("h:mm a"),
                        temparature: Math.round(weather.hourly[7].temp),
                        image: weather.hourly[7].weather[0].icon
                    }
                ]

            };


            console.log(weather.current.weather[0].icon);

            console.log(weather.daily[5].weather[0].icon)

            var dailyWeather = {
                daily: [
                    {
                        day: moment.unix(weather.daily[1].dt).format("ddd"),
                        date: moment.unix(weather.daily[1].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[1].weather[0].icon,
                        min: Math.round(weather.daily[1].temp.min),
                        max: Math.round(weather.daily[1].temp.max),
                        dayTemp: Math.round(weather.daily[1].temp.day),
                        nightTemp: Math.round(weather.daily[1].temp.night),
                        humid: Math.round(weather.daily[1].humidity),
                        wind: Math.round(weather.daily[1].wind_speed * 2.23694)
                    },
                    {
                        day: moment.unix(weather.daily[2].dt).format("ddd"),
                        date: moment.unix(weather.daily[2].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[2].weather[0].icon,
                        min: Math.round(weather.daily[2].temp.min),
                        max: Math.round(weather.daily[2].temp.max),
                        dayTemp: Math.round(weather.daily[2].temp.day),
                        nightTemp: Math.round(weather.daily[2].temp.night),
                        humid: Math.round(weather.daily[2].humidity),
                        wind: Math.round(weather.daily[2].wind_speed * 2.23694)
                    },
                    {
                        day: moment.unix(weather.daily[3].dt).format("ddd"),
                        date: moment.unix(weather.daily[3].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[3].weather[0].icon,
                        min: Math.round(weather.daily[3].temp.min),
                        max: Math.round(weather.daily[3].temp.max),
                        dayTemp: Math.round(weather.daily[3].temp.day),
                        nightTemp: Math.round(weather.daily[3].temp.night),
                        humid: Math.round(weather.daily[3].humidity),
                        wind: Math.round(weather.daily[3].wind_speed * 2.23694)
                    },
                    {
                        day: moment.unix(weather.daily[4].dt).format("ddd"),
                        date: moment.unix(weather.daily[4].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[4].weather[0].icon,
                        min: Math.round(weather.daily[4].temp.min),
                        max: Math.round(weather.daily[4].temp.max),
                        dayTemp: Math.round(weather.daily[4].temp.day),
                        nightTemp: Math.round(weather.daily[4].temp.night),
                        humid: Math.round(weather.daily[4].humidity),
                        wind: Math.round(weather.daily[4].wind_speed * 2.23694)
                    },
                    {
                        day: moment.unix(weather.daily[5].dt).format("ddd"),
                        date: moment.unix(weather.daily[5].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[5].weather[0].icon,
                        min: Math.round(weather.daily[5].temp.min),
                        max: Math.round(weather.daily[5].temp.max),
                        dayTemp: Math.round(weather.daily[5].temp.day),
                        nightTemp: Math.round(weather.daily[5].temp.night),
                        humid: Math.round(weather.daily[5].humidity),
                        wind: Math.round(weather.daily[5].wind_speed * 2.23694)
                    },
                    {
                        day: moment.unix(weather.daily[6].dt).format("ddd"),
                        date: moment.unix(weather.daily[6].dt).format("DD[/]MM[/]YY"),
                        icon: weather.daily[6].weather[0].icon,
                        min: Math.round(weather.daily[6].temp.min),
                        max: Math.round(weather.daily[6].temp.max),
                        dayTemp: Math.round(weather.daily[6].temp.day),
                        nightTemp: Math.round(weather.daily[6].temp.night),
                        humid: Math.round(weather.daily[6].humidity),
                        wind: Math.round(weather.daily[6].wind_speed * 2.23694)
                    },
                ]
            }



            res.render("index", {
                dayAndDate: moment.unix(weather.current.dt).format("dddd, MMMM Do YYYY"),
                temperature: Math.round(weather.current.temp),
                image: weather.current.weather[0].icon,
                description: weather.current.weather[0].description,
                maxTemp: Math.round(weather.daily[0].temp.max),
                minTemp: Math.round(weather.daily[0].temp.min),
                sunriseTime: moment.unix(weather.current.sunrise).format("h:mm a"),
                sunsetTime: moment.unix(weather.current.sunset).format("h:mm a"),
                windSpeed: Math.round(weather.current.wind_speed * 2.23694),
                humid: Math.round(weather.current.humidity),
                hourlyWeather: hourlyWeather,
                dailyWeather: dailyWeather
            });

        });

    })

});

app.listen(port, () => {
    console.log("Server is up and running at port 8000");
});

