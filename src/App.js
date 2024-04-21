import logo from './logo.svg';
import Accordian from "./components/accordian";
import './App.css';
import RandomColor from './components/accordian/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/recursive-menu';
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr';

function App() {
  return (
    <div className="App">
     {/* <Accordian/> */}
     {/* <RandomColor /> */}
     {/* <StarRating /> */}
     {/* <ImageSlider url={"https://dummyjson.com/products"}/> */}
     {/* <LoadMoreData /> */}
     {/* <TreeView menu={menus}/> */}
     <QRCodeGenerator />

    </div>
  );
}

export default App;
