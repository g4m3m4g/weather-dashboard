
import { useLoaderData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import "dotenv/config";
import WeatherCard from "../components/WeatherCard";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_API_KEY;


export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const city = url.searchParams.get("city") || "Bangkok";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  return json({ weather: data });
};

export default function Index() {
  const { weather } = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-900 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-white ">Weather Dashboard</h1>
      <SearchForm />
      {weather.main ? <WeatherCard weather={weather} /> : <p className="text-red-500">City not found.</p>}
    <Footer/>
    </div>
  );
}


