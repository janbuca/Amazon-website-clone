import './App.css';
import Category from './Componets/Category/Category';
import CarouselEffect from './Componets/Header/Carousel/CarouselEffect';
import Header from './Componets/Header/Header';
import Product from './Componets/Product/Product';


function App() {
  return (
    <div className="App">
     <Header />
     <CarouselEffect />
     <Category />
     <Product />
    </div>
  );
}

export default App;
