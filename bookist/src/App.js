import './App.css';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'

function App() {
  return <div classname="App">
    {/* <h1>I'm The App</h1> */}
    <Header />
    <SearchBar />
    <BookList />
    <Shelf/>
  </div>
}

export default App;
