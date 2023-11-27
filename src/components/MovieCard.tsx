import Title from './Title';

type MovieCardProps = {
  title: string;
  year: number;
  rate: number;
  genres: string[];
  favorite: boolean;
  watched: boolean;
  image: string;
};

function MovieCard({ title, year, rate, genres,
  favorite, watched, image }: MovieCardProps) {
  return (
    <div>
      <span>
        <span>{favorite}</span>
        <img src={ image } alt={ title } />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{rate}</p>
        <p>{genres.join(' - ')}</p>
        <h2>{year}</h2>
        <button>{watched ? 'Assistido' : 'Não assistido'}</button>
      </div>
    </div>
  );
}

export default MovieCard;
