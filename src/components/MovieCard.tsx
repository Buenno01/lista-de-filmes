import Title from './Title';

type MovieCardProps = {
  titulo: string;
  ano: number;
  nota: number;
  genero: string[];
  favorito: boolean;
  assistido: boolean;
  icon: string;
};

function MovieCard({ titulo, ano, nota, genero, favorito, assistido, icon }: MovieCardProps) {
  retun(
    <Title headline="Todas as Obras" />,
  );
}

export default MovieCard;
