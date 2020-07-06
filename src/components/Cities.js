import React, { Component } from "react";
import City from "./City";
import axios from "axios";
import dayjs from "dayjs";
const querystring = require("querystring");
const api = require("../data//api.json");

class Cities extends Component {
  state = {
    timestamp: "",
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

  fetchWeatherData = (cities, units) => {
    // const city = this.state.cities[0].name;
    // http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric
    const date = new Date();

    let query = "";
    cities.map((city, index) => {
      query = query + city.name;
      if (index !== cities.length - 1) {
        query = query + ",";
      }
    });
    const parameters = {
      appid: api.key,
      units: units,
      q: cities[0].name,
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(
      parameters
    )}`;

    return axios.get(url);
  };

  // call fetch data and persist response data
  getData = async () => {
    const data_metric = await this.fetchWeatherData(
      this.state.cities,
      "metric"
    );
    const data_imperial = await this.fetchWeatherData(
      this.state.cities,
      "imperial"
    );

    const date = dayjs().format("MM-DD-YY h:mma");

    if (data_metric && data_imperial) {
      let cities = [...this.state.cities];
      let city = { ...cities[0] };
      let city_ME = { ...cities[0].ME };
      let city_IM = { ...cities[0].IM };

      city_ME = data_metric.data;
      city_IM = data_imperial.data;

      city = { name: city.name, IM: city_IM, ME: city_ME };
      cities[0] = city;
      console.log(cities);
      this.setState({
        timestamp: date,
        cities,
      });
    }
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
    this.getData();
  };

  render() {
    const { timestamp } = this.state;
    return (
      <div>
        {/* <button onClick={this.getData}>Update weather</button> */}

        {timestamp.length > 0 ? <h3>{this.state.timestamp}</h3> : null}

        {this.renderCities()}
      </div>
    );
  }
}

export default Cities;
