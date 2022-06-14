import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './main-components/Nav.js';

import DamageVis from './damage-visualizer/DamageVis';
//import WeaponList from './damage-visualizer/WeaponList';
////import Weapon from './damage-visualizer/Weapon';
//import WeaponInfo from './damage-visualizer/WeaponInfo';
//import Bar from './main-components/Bar.js';

import LoadoutMain from './loadout-randomizer/LoadoutMain';
import Credits from './Credits';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<DamageVis />}></Route>
        <Route path='/loadouts' element={<LoadoutMain />}></Route>
        <Route path='/damage-visualizer' element={<DamageVis />}></Route>
        <Route path='/credits' element={<Credits />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);