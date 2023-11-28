import React, { useState } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import ReceitasComponent from './components/Receita/ReceitaComponent';
import DespesasComponent from './components/Despesa/DespesaComponent';
import './App.css'; // Importe o arquivo de estilo

const App = () => {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  const adicionarReceita = (novaReceita) => {
    setReceitas([...receitas, novaReceita]);
  };

  const adicionarDespesa = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };

  return (
    <div className="app">
      <SideMenu adicionarReceita={adicionarReceita} adicionarDespesa={adicionarDespesa} />
      <div className='despesas_receitas'>
          <ReceitasComponent receitas={receitas.reduce((total, item) => total + item.valor, 0)} itensReceitas={receitas} />
          <DespesasComponent despesas={despesas.reduce((total, item) => total + item.valor, 0)} itensDespesas={despesas} />
      </div>
    </div>
  );
};

export default App;
