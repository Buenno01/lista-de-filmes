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
    <main>
      <Title headline="Ações Rápidas" />
      <ul>
        { mockUp.map((botao, index) => (
          <li key={ index }>
            <Button titulo={ botao.titulo } descricao={ botao.descricao } />
          </li>
        )) }

      </ul>

    </main>
  );
}

export default QuickAction;
