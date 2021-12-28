import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Add from './components/Add';
import MovieList from './components/MovieList';
import {movies} from './components/movies'
import{useState} from 'react';

// console.log(movies);

function App() {


 const [movieList,setmovielist] =useState(movies)
 console.log(movieList);
 
  return (
    <div className="App">
      <Navbar />
      <Add/>
      <MovieList movieList={movieList} />
      
    </div>
  );
}

export default App;
