import React, { Component } from 'react';
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";
import axios from 'axios';

const App = () => {
    return (
        <div>
            <Header />
            <Pokemons />
        </div>
    )
}

export default App;
