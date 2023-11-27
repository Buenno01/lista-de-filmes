import logo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <span> <img src={ logo } alt="imagem do capitão américa entendendo a referencia" /> </span>
            <nav>
                <ul>
                    <li>Favorites</li>
                    <li>Add</li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;