

export default function WeatherCard({ weather }) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
        <p className="text-lg text-gray-600 mb-4">{weather.weather[0].description}</p>
        <p className="text-4xl font-bold mb-4">🌡 {weather.main.temp}°C</p>
        <div className="space-y-2">
          <p className="text-gray-700">💨 Wind: {weather.wind.speed} m/s</p>
          <p className="text-gray-700">💧 Humidity: {weather.main.humidity}%</p>
        </div>
      </div>
    );
  }
  