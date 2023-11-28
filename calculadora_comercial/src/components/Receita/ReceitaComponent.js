import React from 'react';
import './ReceitaComponent.css';

const ReceitasComponent = ({ receitas, itensReceitas }) => {
  return (
    <div className="receitas-component">
      <h2>Receitas</h2>
      <p>Total Recebido: R$ {receitas.toFixed(2)}</p>
      <ul>
        {itensReceitas.map((item) => (
          <li key={item.id}>{`${item.nome}: R$ ${item.valor.toFixed(2)}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReceitasComponent;
