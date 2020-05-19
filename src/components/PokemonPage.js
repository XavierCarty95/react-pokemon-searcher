import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
   pokemons: [],
   searchTerm: "Xavier"

  }

  componentDidMount() {
   fetch("http://localhost:3000/pokemon")
   .then(r => r.json())
   .then(pokemonData => {
       console.log(pokemonData)
       this.setState({
         pokemons: pokemonData
       })

   })
  }

   addPokemon = (newPokemon) => {

    const {name , hp , frontUrl , backUrl} = newPokemon
    fetch("http://localhost:3000/pokemon", {
     method: "POST",
     headers: {
      "Content-Type": "Application/json"
    },
    body:JSON.stringify({
      name,
      stats: [
        {
          value: hp,
          name: 'hp'
        }
      ],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    })
  }).then(r => r.json())
    .then(pokemonObj => {
      
      let copyList = [...this.state.pokemons , pokemonObj ]
      this.setState({
         pokemons: copyList
      })


    })


   }


   handleSearchTerm = (newSearchTerm) => {
      
    this.setState({
      
      searchTerm: newSearchTerm

    })


   }

   decideWhatToRender = () => {

      const {pokemons, searchTerm} = this.state

    

      let array = pokemons.filter(pokemon => {
           
         return pokemon.name.toLowerCase().includes(searchTerm)

      })

      return array


   }


  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon ={this.addPokemon} />
        <br />
        <Search handleSearchTerm = {this.handleSearchTerm} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemons = {this.decideWhatToRender()} />
      </Container>
    )
  }
}

export default PokemonPage
