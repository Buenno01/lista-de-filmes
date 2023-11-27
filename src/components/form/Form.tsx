import Title from '../Title';
import Input from './Input';

export default function Form() {
  return (
    <section>
      <Title headline="Adicionar Novo Item" />
      <form action="#" className="flex flex-col gap-2">
        <Input type="text" id="movieTitle" placeholder="MOVIE TITLE" />
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input type="number" id="rate" placeholder="RATE" />
          <Input type="number" id="year" placeholder="RELEASE YEAR" />
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Input type="text" id="image" placeholder="IMAGE URL" />
          <Input type="text" id="categories" placeholder="CATEGORIES" />
        </div>
        <button
          className="self-start bg-primary-400 w-72 h-14 rounded-lg font-bold"
        >
          Adicionar
        </button>
      </form>
    </section>
  );
}
