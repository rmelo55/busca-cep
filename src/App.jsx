import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './App.css'
import apiLepuLepu from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({}) // armazena o retorno da nossa chamada

  async function handleSearch() {
    
    if(input === '') {
      alert('Digite algum cep')
      return
    }

    try {
      const response = await apiLepuLepu.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    }catch{
      alert('Oops!! Erro ao buscar')
      setInput('')
    }

  }

  return (
    <div className='container'>

      <h1 className='title'>Busca CEP</h1>

      <div className='containerInput'>
        <input 
        type='text' 
        placeholder='Digite seu CEP...' 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color={'#fff'} />
        </button>
      </div>

      {/* usando renderização condicional */}
      {Object.keys(cep).length > 0 && (
          
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro} </span>
          {cep.complemento && <span>Complemento: {cep.complemento}</span>}
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} / {cep.uf} </span>
        </main>

      )}

    </div>
  );
}

export default App;
