import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Add from './components/Add';
import MovieList from './components/MovieList';
import {movies} from './components/movies'
import{useState} from 'react';
import Details from './components/Details';
import {Switch , Route } from 'react-router-dom'

// console.log(movies);

function App() {


 const [movieList,setMvielist] =useState(movies)
 const movieHandler = (newMovie) => {
  setMvielist([...movieList,newMovie])
 }
 console.log(movieList);
 
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/Add" render={(props)=> <Add movieHandler={movieHandler}/>}></Route> 
      <Route path="/" exact render={(props)=> <MovieList movieList={movieList} />}></Route> 
      <Route path="/Details/:id" render={(props)=> <Details {...props} Liste={movieList} />}></Route> 
      </Switch>
      <Filter/>
    </div>
  );
}

export default App;
