import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Front from './Comp/Front';
import Explore from './Comp/Explore';
import Author from './Comp/Author';
import Create from './Comp/Create';

function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Front />} />
        <Route  path="/explore" element={<Explore/>} />
        <Route  path="/author" element={<Author/>} />
        <Route  path="/create" element={<Create/>} />


        </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
