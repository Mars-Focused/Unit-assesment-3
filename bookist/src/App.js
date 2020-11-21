import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Books from './Components/Books';

class App extends Component {
  constructor(){
    super()
    this.state = {
      Books: Books
    }
  }

  render() {
    return <div classname="App">
    {/* <h1>I'm The App</h1> */}
    <Header />
    <SearchBar />
    <BookList />
    <Shelf/>
  </div>
  }
}

export default App;