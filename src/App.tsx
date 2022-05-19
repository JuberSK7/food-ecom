import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/navbar';
import { Hero } from './Component/HeroSection/hero';
import { Product } from './Component/Product/product';
import { productdata, productdataTwo } from './Component/Product/data';
import { Feature } from './Component/Feature/feature';
import { Footer } from './Component/Footer/Footer';

function App() {
  return (
    <div>
     
      <Hero isOpen={false} toggle={undefined} />
      <Product image={undefined} alt={''} name={''} desc={''} price={''} button={''} {...productdata}/>
      <Feature/>
      <Product image={undefined} alt={''} name={''} desc={''} price={''} button={''} {...productdataTwo}/>
      <Footer/>
    </div>
  );
}

export default App;
