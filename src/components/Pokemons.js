import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon/`
})

class Pokemons extends React.Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        api.get(`?limit=151`)
            .then(res => {
                const pokemons = res.data.results;
                this.setState({ pokemons });
            })
    }

    render() {
        return (
            <ul>
                { this.state.pokemons.map(pokemons => <li>{pokemons.name}</li>)}
            </ul>
        )
    }
}
export default Pokemons;