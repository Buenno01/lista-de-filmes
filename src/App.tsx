import Header from './components/Header';
import QuickAction from './components/QuickAction';
import data from './data';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <Header />
      <QuickAction />
      <ul>
        { data.map((movie, index) => (
          <li key={ index }>
            {' '}
            <MovieCard { ...movie } />
            {' '}
          </li>))}
      </ul>
    </>
  );
}

export default App;
