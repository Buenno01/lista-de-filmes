// eslint-disable-next-line
import logo from '/logo.png';

function Header() {
  return (
    <header
      className="flex items-center justify-between h-24 px-20 py-2
    bg-grey-900 bg-opacity-80"
    >
      <span>
        <img src={ logo } alt="imagem do capitão américa entendendo a referencia" />
      </span>
      <nav>
        <ul className="flex gap-4 text-grey-200 font-semibold">
          <li>Favorites</li>
          <li>Add</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
