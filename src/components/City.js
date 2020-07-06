import React, { Component } from "react";
import dayjs from "dayjs";

class City extends Component {
  state = {};

  renderCity = () => {
    const { city } = this.props;
    const { IM, ME } = city;

    const sunrise = dayjs(IM.sys.sunrise).format("h:mma");
    const sunset = dayjs(IM.sys.sunset).format("h:mma");
    const iconURL = `http://openweathermap.org/img/w/${IM.weather[0].icon}.png`;

    return (
      <div className="card bg-primary container" style={{ width: "40rem" }}>
        <div className="card-header">
          <h1 className="card-title text-left">{city.name}</h1>
          <div className="d-flex">
            <img
              src={iconURL}
              className="img-fluid"
              alt="Responsive image"
            ></img>
            <h2 className="card-text text-left">{IM.weather[0].description}</h2>
          </div>

          <div className="d-flex flex-wrap">
            <h1 className="card-text text-left">{IM.main.temp}</h1>
            <p className="card-text text-left">˚F</p>

            <h1 className="card-text text-left"> / {ME.main.temp}</h1>
            <p className="card-text text-left">˚C</p>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h4 className="card-text text-left">Feels like:</h4>
              <div className="d-flex flex-wrap">
                <h4>{IM.main.feels_like}</h4>
                <p className="card-text text-left">˚F</p>
                <h4>/ {ME.main.feels_like}</h4>
                <p className="card-text text-left">˚C</p>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex justify-content-center flex-column flex-wrap">
                <div className="p-2">
                  <h5 className="card-text text-left">Humidity:</h5>
                  <h5 className="card-text text-left">{IM.main.humidity}%</h5>
                </div>
                <div className="p-2">
                  <h5 className="card-text text-left">Wind:</h5>
                  <div className="d-flex flex-wrap">
                    <h5 className="card-text text-left">{IM.wind.speed}</h5>
                    <p className="card-text text-left">mph</p>
                    <h5 className="card-text text-left">/ {ME.wind.speed}</h5>
                    <p className="card-text text-left">kmh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer row">
          <div className="col sm-6 text-left">
            <h5 className="card-text text-left">Low:</h5>
            <div className="d-flex flex-wrap">
              <h5>{IM.main.temp_min}</h5>
              <p className="card-text text-left">˚F</p>
              <h5>/ {ME.main.temp_min}</h5>
              <p className="card-text text-left">˚C</p>
            </div>
          </div>
          <div className="col sm-6 text-left">
            <h5 className="card-text text-left">High:</h5>
            <div className="d-flex flex-wrap">
              <h5>{IM.main.temp_max}</h5>
              <p className="card-text text-left">˚F</p>
              <h5>/ {ME.main.temp_max}</h5>
              <p className="card-text text-left">˚C</p>
            </div>
          </div>
        </div>
        <div className="card-footer row">
          <div className="col sm-6 text-left">
            <h4 className="card-text">Sunrise: {sunrise}</h4>
          </div>
          <div className="col sm-6 text-left">
            <h4 className="card-text">Sunset: {sunset}</h4>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.renderCity()}</React.Fragment>;
  }
}

export default City;

// <div className="card-body row">
//           <div className="col sm-6 text-left">
//             <div className="d-flex flex-wrap">
//               <div className="p-2">
//                 <h1 className="card-text">{IM.main.temp}˚F</h1>
//               </div>
//               <div className="p-2">
//                 <h1 className="card-text">{ME.main.temp}˚C</h1>
//               </div>
//             </div>

//             <p className="card-text">
//               Feels like: {IM.main.feels_like}˚F / {ME.main.feels_like}˚C
//             </p>
//           </div>
//           <div className="col sm-6 text-left">
//             <p className="card-text">
//               Precipitation: {IM.main.pressure}˚F / {ME.main.temp}˚C
//             </p>
//             <p className="card-text">Humidity: {IM.main.humidity}%</p>
//             <p className="card-text">
//               Wind: {IM.wind.speed}mph / {IM.wind.speed}km/h
//             </p>
//           </div>
//         </div>
