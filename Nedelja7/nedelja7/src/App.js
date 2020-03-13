import React from 'react';
import './App.css';
import Forma from './Forma-funkcije';
import FormaKlase from './Forma-klase';
import CardFje from './Card-funkcije';
import CardKlase from './Card-klase';

function App() {
  return (
    <>
    <Forma string="Dugme"></Forma><br></br>
    <FormaKlase string="Dugme2"></FormaKlase><br></br>
    <CardFje description="Neki opis." url="https://www.pngitem.com/pimgs/m/247-2475683_transparent-smile-emoji-png-you-got-it-emoji.png"></CardFje>
    <CardKlase description="Neki drugi opis." url="https://www.pngitem.com/pimgs/m/10-102631_download-brawl-stars-logo-hd-logotipo-brawl-stars.png"></CardKlase>
    </>
  );
}

export default App;
