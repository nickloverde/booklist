import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Shelf from './Components/Shelf'
import Booklist from './Components/Booklist'
import SearchBar from './Components/SearchBar'
import books from './data'

class App extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
    render(){
    return (
      <div className="App">
        <div>
          <Header/>
        </div>

        <div>
          <SearchBar/>
        </div>

        <div class="App-body">
          <Booklist />
          <Shelf/>
        </div>
      </div>
    );
  }
}

export default App;
