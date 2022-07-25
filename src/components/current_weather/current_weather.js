import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather_description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-label">
            <span className="parameter-row">Feels like</span>
            <span className="parameter-value">{data.main.feels_like}</span>
          </div>
          <div className="parameter-label">
            <span className="parameter-row">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-label">
            <span className="parameter-row">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-label">
            <span className="parameter-row">Pressure</span>
            <span className="parameter-value">{data.main.pressure} pha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
