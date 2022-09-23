import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './component/Dashboardteachinglist';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route ,  Redirect } from 'react-router-dom'
import Dashboardhomepage from './component/Dashboardhomepage';
import TrailDone from './component/TrailDone';
import Calendar from 'react-calendar'; 
import { useState } from 'react';
import Bookdate from './component/Bookdate';
import BookingSummary from './component/BookingSummary';
import Classhistory from './component/Classhistory';
import Videolearn from './component/Videolearn';





function App() {

  return (
    <>
    <div>
    <Navbar/>
  
      <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
      <Sidebar/>
      <Dashboard/>
      </div>
      </div>
</div>   
   <div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <Dashboardhomepage/>
     </div>
     </div>
</div>  
<div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <TrailDone/>
     </div>
     </div>
</div>  
<div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <Bookdate/>
     </div>
     </div>
</div>  
<div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <BookingSummary/>
     </div>
     </div>
</div>  
<div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <Classhistory/>
     </div>
     </div>
</div> 
<div>
   <Navbar/>
     <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     <Sidebar/>
     <Videolearn/>
     </div>
     </div>
</div> 

</>
  );
}

export default App;
