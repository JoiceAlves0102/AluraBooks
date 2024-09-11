import './App.css';
import Logo from "./componentes/Logo";
import OpcoesHeader from './componentes/opcoesHeader';
import opcoes from './componentes/opcoesHeader';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';



const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
      </header>
    </div>
  );
}

export default App;
