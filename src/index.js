import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./style.css";


import Service from './Service';
import Homepaint from './pages/services/Homepaint.js';
import Airconditioner from './pages/services/Airconditioner.js';
import LaptopRepair from './pages/services/Laptop_repair.js';
import Microwave from './pages/services/Microwave.js';
import Refrigerator from './pages/services/Refrigerator.js';
import Washing_Machine from './pages/services/Washing_Machine.js';
import Water_Purifier from './pages/services/Water_Purifier.js';
import Chimney from './pages/services/Chimney.js';
import Geyser from './pages/services/Geyser.js';
import Television from './pages/services/Television.js';
import Air_Purifier from './pages/services/Air_Purifier.js';
import Bathroom_and_kitchen_cleaning from './pages/services/Bathroom_and_kitchen_cleaning.js';
import Cockroach_Ant_General_Pest_Control from './pages/services/Cockroach_Ant_General_Pest_Control.js';
import Full_Home_Cleaning from './pages/services/Full_Home_Cleaning.js';
import Sofa_Carpet_Cleaning from './pages/services/Sofa_Carpet_Cleaning.js';
import Disinfection_Services from './pages/services/Disinfection_Services.js';
import Bed_Bugs_Control from './pages/services/Bed_Bugs_Control.js';
import Termite_Control from './pages/services/Termite_Control.js';
import Pepperfry_Installation from './pages/services/Pepperfry_Installation.js';
import Electricians from './pages/services/Electricians.js';
import Laptop_repair_Athome from './pages/services/Laptop_repair_Athome.js';
import Furniture_making from './pages/services/Furniture_making.js';
import Plumber from './pages/services/Plumber.js';
import Carpenters from './pages/services/Carpenters.js';



import ServiceTemplate from './Service_template.js';


import Header from './common/Header';
import Footer from './common/Footer.js';
import App from './App';


import reportWebVitals from './reportWebVitals';
import './vendor/bootstrap/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Body from './Body';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Router>
        <Routes>
          
          <Route exact path='/' element={<Body/>} />
          <Route exact path='/Main' element={<Body/>} />
          <Route exact path='/Service' element={<Service/>} />
          <Route exact path='/Service/Homepaint' element={<Homepaint/>} />
          <Route exact path='/Service/Airconditioner' element={<Airconditioner/>} />
          <Route exact path='/Service/LaptopRepair' element={<LaptopRepair/>} />
          <Route exact path='/Service/Microwave' element={<Microwave/>} />
          <Route exact path='/Service/Refrigerator' element={<Refrigerator/>} />
          <Route exact path='/Service/WashingMachine' element={<Washing_Machine/>} />
          <Route exact path='/Service/Water_Purifier' element={<Water_Purifier/>} />
          <Route exact path='/Service/Chimney' element={<Chimney/>} />
          <Route exact path='/Service/Geyser' element={<Geyser/>} />
          <Route exact path='/Service/Television' element={<Television/>} />
          <Route exact path='/Service/Air_Purifier' element={<Air_Purifier/>} />
          <Route exact path='/Service/Bathroom_and_kitchen_cleaning' element={<Bathroom_and_kitchen_cleaning/>} />
          <Route exact path='/Service/Cockroach_Ant_General_Pest_Control' element={<Cockroach_Ant_General_Pest_Control/>} />
          <Route exact path='/Service/Full_Home_Cleaning' element={<Full_Home_Cleaning/>} />
          <Route exact path='/Service/Sofa_Carpet_Cleaning' element={<Sofa_Carpet_Cleaning/>} />
          <Route exact path='/Service/Disinfection_Services' element={<Disinfection_Services/>} />
          <Route exact path='/Service/Bed_Bugs_Control' element={<Bed_Bugs_Control/>} />
          <Route exact path='/Service/Termite_Control' element={<Termite_Control/>} />

          <Route exact path='/Service/Pepperfry_Installation' element={<Pepperfry_Installation/>} />
          <Route exact path='/Service/Electricians' element={<Electricians/>} />
          <Route exact path='/Service/Laptop_repair_Athome' element={<Laptop_repair_Athome/>} />
          <Route exact path='/Service/Furniture_making' element={<Furniture_making/>} />
          <Route exact path='/Service/Plumber' element={<Plumber/>} />
          <Route exact path='/Service/Carpenters' element={<Carpenters/>} />
          
          
          
          

          <Route exact path='/Template' element={<ServiceTemplate/>} />
        </Routes>
      </Router>
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
