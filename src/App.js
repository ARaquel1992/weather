import './App.css';
import Search from "./Search";
import CurrentInformation from "./CurrentInformation";
import Description from "./Description";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
       <div className="WeatherAppWrapper">
        <Search />
        <CurrentInformation />
        <hr />
        <Description />
      </div>
      <Footer />
    </div>
  );
}

export default App;
