import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  state = {

    isClicked: false

  }
  handleClick = () => {
    
    this.setState(prevState => {
    
      return { 
      isClicked: !prevState.isClicked
      }

    })
       


  }
  render() {


    console.log(this.props.pokemon)
    const { name , sprites , stats} = this.props.pokemon
    const hp = stats.find(stat => stat.name === "hp").value || 50
    const isClickedChange = this.state.isClicked? sprites.back : sprites.front
     
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick = {this.handleClick} src = {isClickedChange} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
