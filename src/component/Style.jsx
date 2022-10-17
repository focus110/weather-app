export const style1 = () => {
  return (
    <div className="flex flex-col justify-center space-y-8 bg-white bg-opacity-10 rounded-lg p-8">
      <Title title="Current Weather" />
      <div className="flex flex-col sm:flex-row justify-between items-center space-x-4">
        <img className="object-contain w-16 h-16 " src={cloudy} alt="" />
        <h2 className="sm:hidden sm:text-left font-semibold text-white text-3xl">
          18°C
        </h2>
        <div>
          <h2 className="flex space-x-2 font-medium text-white text-xl">
            {/* <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg> */}
            <span className="text-sm">
              {current?.name + ", "}
              <span>{current?.countryCode?.toUpperCase() + ", "}</span>
              <span>{current?.country}</span>
            </span>
          </h2>
          <p className="text-gray-400 font-light sm:text-left">
            {`${date}`} | <span>{weather?.weather[0]?.description}</span>
          </p>
        </div>
        <div>
          <h2 className="hidden sm:block sm:text-left font-semibold text-white text-3xl">
            {weather?.main?.temp.toString().split(".")[0]}
            <span>
              {current.unit === "metric"
                ? "°C"
                : current.unit === "standard"
                ? "°F"
                : null}
            </span>
          </h2>
          {/* <h2 className="sm:text-left ml-1 font-medium text-white text-2xl">
      Cloudy
    </h2> */}
        </div>
      </div>
      <p className="text-white">
        The skies will be mostly cloudy. The high will be 30°.
      </p>
    </div>
  );
};

export const style2 = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 bg-white bg-opacity-10 rounded-lg py-8">
      <h2 className="flex space-x-2 font-medium text-white text-xl">
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
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span>Boston, MA, United State</span>
      </h2>
      <div className="flex flex-col sm:flex-row items-center space-x-4">
        <img className="w-32 h-32" src={cloudy} alt="" />
        <div>
          <h2 className="sm:text-left font-bold text-white text-6xl">18°C</h2>
          <h2 className="sm:text-left ml-1 font-medium text-white text-2xl">
            Cloudy
          </h2>
        </div>
      </div>
    </div>
  );
};
