import data from '../../data';
import MovieCard from './MovieCard';
import Title from '../Title';

export default function MultimediaList() {
  return (
    <section>
      <Title headline="Todas as Obras" />
      <ul className="flex flex-wrap gap-3 justify-between">
        { data.map((movie, index) => (
          <li key={ index }>
            {' '}
            <MovieCard { ...movie } />
            {' '}
          </li>))}
      </ul>
    </section>
  );
}
