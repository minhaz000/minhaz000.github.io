import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Navigation';

function Main(props) {
  return (
    <div>
    <Header></Header> 
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
}

export default Main;