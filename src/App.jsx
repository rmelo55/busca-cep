
import { FiSearch } from 'react-icons/fi'
import './App.css'

function App() {
  return (
    <div className='container'>

      <h1 className='title'>Busca CEP</h1>

      <div className='containerInput'>
        <input 
        type='text' 
        placeholder='Digite seu CEP...' 
        />

        <button className='buttonSearch'>
          <FiSearch size={25} color={'#fff'} />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 24904100</h2>
        <span>Complemento: Algum Complemento</span>
        <span>Flamengo</span>
        <span>Maricá - RJ</span>
      </main>

    </div>
  );
}

export default App;
