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
import LightDarkMode from'./components/light-dark-mode';
import ScrollIndicator from'./components/indicator';
import TotalTab from './components/custom-tabs/totalTab';
import Container from './components/modal-popup';

function App() {
  return (
    <div className="App">
     {/* <Accordian/> */}
     {/* <RandomColor /> */}
     {/* <StarRating /> */}
     {/* <ImageSlider url={"https://dummyjson.com/products"}/> */}
     {/* <LoadMoreData /> */}
     {/* <TreeView menu={menus}/> */}
     {/* <QRCodeGenerator /> */}
     {/* <LightDarkMode /> */}
     {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=50"}/> */}
     {/* <TotalTab /> */}
     <Container />

    </div>
  );
}

export default App;
