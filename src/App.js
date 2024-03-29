

import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import{PokeList} from './components/PokeList.jsx';
import  PokeDetail  from './components/PokeDetail.jsx';

function App() {


  return (
  
    <div className="App">


    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={   <PokeList/>}/>
   <Route path='/pokemon/:name' element={<PokeDetail />} />

    
    
    
    </Routes>
    
    
    </BrowserRouter>
    
    
    
    
        </div>
  )
}

export default App
