import React, { Component } from "react";
import City from "./City";
import Selection from "./Selection";
import axios from "axios";
import dayjs from "dayjs";
import Cookies from "js-cookie";

// import "/Users/jturner/Coding/Projects/react-weather/node_modules/bulma/css/bulma.css"
import "bulma/css/bulma.css";

const querystring = require("querystring");
const api = require("../data/api.json");

class Cities extends Component {
  state = {
    timestamp: "",
    cityData: {
      name: Cookies.getJSON("defaultCity") || "",
      ME: {},
      IM: {},
    },
  };

  fetchWeatherData = (city, units) => {
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
      const city_ME = data_metric.data;
      const city_IM = data_imperial.data;
      let name = "";
      if (!Cookies.getJSON("defaultCity")) {
        name = cityName;
      } else {
        name = Cookies.getJSON("defaultCity");
      }

      const cityData = { name, IM: city_IM, ME: city_ME };
      this.setState({
        timestamp: date,
        cityData,
      });
    }
  };

  setDefaultCity = (cityName) => {
    Cookies.set("defaultCity", JSON.stringify(cityName), { expires: 24 });
  };

  renderCity = () => {
    if (this.state.cityData.IM.main) {
      return <City city={this.state.cityData} />;
    }
  };

  componentDidMount = () => {
    if (this.state.cityData.name === "") {
      this.getData("New York");
    } else {
      this.getData(this.state.cityData.name);
    }
  };

  render() {
    const { timestamp } = this.state;
    return (
      <React.Fragment>
        <div className="content">
          {timestamp.length > 0 ? (
            <h3 style={{ margin: "2%" }}>{this.state.timestamp}</h3>
          ) : null}
          <Selection getData={this.getData} />
        </div>
        {this.renderCity()}
      </React.Fragment>
    );
  }
}

export default Cities;
