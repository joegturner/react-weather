import React, { Component } from "react";
import City from "./City";
import axios from "axios";
import dayjs from "dayjs";
import Cookies from "js-cookie";

const querystring = require("querystring");
const api = require("../data//api.json");

class Cities extends Component {
  state = {
    timestamp: "",
    city: Cookies.getJSON("defaultCity") || "",
    cities: [
      {
        name: "New York",
        ME: {},
        IM: {},
      },
      {
        name: "Portland",
        ME: {},
        IM: {},
      },
    ],
  };

  fetchWeatherData = (city, units) => {
    // const city = this.state.cities[0].name;
    // http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric

    // let query = "";
    // cities.map((city, index) => {
    //   query = query + city.name;
    //   if (index !== cities.length - 1) {
    //     query = query + ",";
    //   }
    // });
    const parameters = {
      appid: api.key,
      units: units,
      q: city,
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(
      parameters
    )}`;

    return axios.get(url);
  };

  // call fetch data and persist response data
  getData = async (cityName) => {
    this.setDefaultCity(cityName);

    const data_metric = await this.fetchWeatherData(cityName, "metric");
    const data_imperial = await this.fetchWeatherData(cityName, "imperial");

    const date = dayjs().format("MM-DD-YY h:mma");

    if (data_metric && data_imperial) {
      //
      let cities = [...this.state.cities];
      let city = { ...cities[0] };
      let city_ME = { ...cities[0].ME };
      let city_IM = { ...cities[0].IM };

      city_ME = data_metric.data;
      city_IM = data_imperial.data;

      city = { name: cityName, IM: city_IM, ME: city_ME };
      cities[0] = city;
      this.setState({
        timestamp: date,
        city: cityName,
        cities,
      });
    }
  };

  setDefaultCity = (cityName) => {
    Cookies.set("defaultCity", JSON.stringify(cityName), { expires: 24 });
  };

  renderCities = () => {
    // console.log("Cities state:", this.state.cities[0].main);

    let jsx = [];
    for (let i = 0; i < this.state.cities.length; i++) {
      if (this.state.cities[i].IM.main)
        jsx.push(<City key={i} city={this.state.cities[i]} />);
    }
    return jsx;
  };

  componentDidMount = () => {
    if (this.state.city === "") {
      this.getData("New York");
    } else {
      this.getData(this.state.city);
    }
  };

  render() {
    const { timestamp } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          {timestamp.length > 0 ? (
            <h3 style={{ margin: "2%" }}>{this.state.timestamp}</h3>
          ) : null}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.getData("New York")}
            style={{ margin: "2%" }}
          >
            New York
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.getData("Portland")}
            style={{ margin: "2%" }}
          >
            Portland
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => this.getData("Tokyo")}
            style={{ margin: "2%" }}
          >
            Tokyo
          </button>
        </div>
        {this.renderCities()}
      </React.Fragment>
    );
  }
}

export default Cities;
