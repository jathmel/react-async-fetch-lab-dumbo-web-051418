// create your App component here
import React from 'react'
import Button from './components/Button'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'

class App extends React.Component{
  state = {
    plpArray: []
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(({people}) => this.setState({plpArray: people}))
  }



  render(){
    return (
      <div>
        {this.state.plpArray.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }


}
export default App
