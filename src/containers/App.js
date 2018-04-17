import React, { Component } from 'react';

import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll';

import './App.css';

import {ventaZ} from '../components/ventaZ';



class App extends Component {

  constructor() {

    super()

    this.state = {

      robots: ventaZ,

      searchfield: ''

    }

  }




  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })

  }



  render() {

    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot =>{

      return robot.name.toLowerCase().includes(searchfield.toLowerCase());

    })

    return !robots.length ?

      <h1>Loading</h1> :

      (

        <div className='tc'>

          <h1 className='f1'>RoboFriends</h1>

          <SearchBox searchChange={this.onSearchChange}/>

          <Scroll>

            <CardList robots={filteredRobots} />

          </Scroll>

        </div>

      );

  }

}



export default App;