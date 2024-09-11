import './style.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';


const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const icones = [perfil, sacola];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textOpcoes.map((texto, index) => (
                <li key={index}><p>{texto}</p></li>
            ))}
            {icones.map((icone, index) => (
                <li key={index}><img src={icone} alt="icone" /></li>
            ))}
        </ul>
    );
}

export default OpcoesHeader;
