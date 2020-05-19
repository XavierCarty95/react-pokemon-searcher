import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    let collectionOfPokemon = this.props.pokemons.map(pokemon => {
       return <PokemonCard key={pokemon.id} pokemon={pokemon} />

    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>{collectionOfPokemon}</h1>

      </Card.Group>
    )
  }
}

export default PokemonCollection
