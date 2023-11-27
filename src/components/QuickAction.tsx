import Title from './Title';
import Button from './Button';

function QuickAction() {
  const mockUp = [{
    titulo: '13',
    descricao: 'assistidos',
  },
  { titulo: '50',
    descricao: 'Filmes e Séries',
  },
  { titulo: '8',
    descricao: 'Favoritos',
  },
  { titulo: 'Add Novo Item' }];
  return (
    <section className="">
      <Title headline="Ações Rápidas" />
      <ul className="flex justify-between mb-20">
        { mockUp.map((botao, index) => (
          <li
            key={ index }
            className="bg-grey-900 w-72 h-36 flex
            flex-col items-center justify-center rounded-2xl"
          >
            <Button titulo={ botao.titulo } descricao={ botao.descricao } />
          </li>
        )) }

      </ul>

    </section>
  );
}

export default QuickAction;
