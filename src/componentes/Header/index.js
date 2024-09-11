import './style.css';
import Logo from "../Logo";
import OpcoesHeader from '../opcoesHeader';


function Header () {
    return (
        <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
      </header>
    )
}

export default Header;