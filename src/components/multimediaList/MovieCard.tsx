import { Rating } from '@mui/material';

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
    <div className="flex h-60 bg-grey-900 p-5 rounded-xl items-center">
      <span className="w-32">
        <span>{favorite}</span>
        <img src={ image } alt={ title } />
      </span>
      <div className="text-center w-48 flex flex-col justify-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>
          <Rating defaultValue={ rate / 2 } precision={ 0.25 } readOnly />
        </p>
        <p>{genres.join(' - ')}</p>
        <h2>{year}</h2>
        <button>{watched ? 'Assistido' : 'Não assistido'}</button>
      </div>
    </div>
  );
}

export default MovieCard;
