import React, { useEffect } from "react";
import { useContext } from "react";
import Title from "../Title";
import WeatherContext from "../../context/weather/weatherContext";

const Main = () => {
  const weatherContext = useContext(WeatherContext);
  const { getAllWeather, savedWeather } = weatherContext;

  useEffect(() => {
    getAllWeather();
  }, []);

  return (
    <div>
      <Title title="Dashboard" />

      <div className="space-y-4">
        <Title title="My List" />
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer hover:transform w-64 rounded-md p-4 sm:p-8 border-gray-400 border border-opacity-10">
            <h1>27</h1>
            <p>Clody</p>
            <p>Lagos</p>
          </div>

          <div className="cursor-pointer hover:transform w-64 rounded-md p-4 sm:p-8 border-gray-400 border border-opacity-10">
            <h1>27</h1>
            <p>Clody</p>
            <p>Lagos</p>
          </div>

          <div className="cursor-pointer hover:transform w-64 rounded-md p-4 sm:p-8 border-gray-400 border border-opacity-10">
            <h1>27</h1>
            <p>Clody</p>
            <p>Lagos</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Title title="Search History" />
        <table className="w-full text-left border-gray-400 border border-opacity-10">
          <thead className="border-gray-400 border-b border-opacity-10">
            <tr>
              <th className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                Location
              </th>
              <th className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                Weather
              </th>
              <th className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                Degree
              </th>
              <th className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                Time
              </th>
            </tr>
          </thead>

          <tbody>
            {savedWeather.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                    {item.location}
                  </td>
                  <td className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                    {item.weather_desc}
                  </td>
                  <td className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                    {item.temperature}
                  </td>
                  <td className="p-4 sm:p-8 border-gray-400 border-r border-opacity-10">
                    {`${new Date(
                      item.createdAt
                    ).toLocaleDateString()}  ${new Date(
                      item.createdAt
                    ).toLocaleTimeString()}`}
                    {/* {item.createdAt} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {savedWeather.length === 0 ? (
          <p className="flex space-x-4 justify-center items-center p-4 sm:p-8  border-gray-400 border border-opacity-10">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span> No search history found</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
