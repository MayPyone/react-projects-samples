import logo from './logo.svg';
import Accordian from "./components/accordian";
import './App.css';
import RandomColor from './components/accordian/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
     {/* <Accordian/> */}
     {/* <RandomColor /> */}
     {/* <StarRating /> */}
     <ImageSlider url={"https://dummyjson.com/products"}/>
    </div>
  );
}

export default App;
