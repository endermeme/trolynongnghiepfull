import React from 'react';
import Menu from "./components/Menu";
import WeatherForecast from "./components/WeatherForecast";
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4">
        <WeatherForecast />
        <Menu />
      </div>
    </>
  );
}

export default App;
