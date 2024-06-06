'use client';
import { useEffect, useState } from 'react';

async function getData() {
  const res = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=d428e56a92084f1ba8220559240606&q=New York, New York&aqi=yes',
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function WeatherNYC() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const { location, current } = data;
  const { name, region, country } = location;
  const { wind_mph, temp_f, temp_c, air_quality } = current;

  return (
    <div className="widget">
      <h2 className="widget-h text-xs font-semibold uppercase tracking-wider text-gray-400">
        Current NYC Weather Information
      </h2>
      <p className="monospace-span">
        <u>Location:</u> {name}, {region}, {country}
      </p>
      <p className="monospace-span">
        <u>Wind Speed:</u> {wind_mph} mph
      </p>
      <p className="monospace-span">
        <u>Temperature:</u> {temp_f}°F / {temp_c}°C
      </p>
      <p className="monospace-span">
        <u>AQI:</u> {air_quality['o3']}
      </p>
      {/*<pre className="monospace-span">{JSON.stringify(data, null, 2)}</pre>*/}
    </div>
  );
}
