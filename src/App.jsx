function App() {
  return (
    <div className="container">

      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP..." 
        />

        <button className="buttonSearch">
          Procurar
        </button>
      </div>


    </div>
  );
}

export default App;
