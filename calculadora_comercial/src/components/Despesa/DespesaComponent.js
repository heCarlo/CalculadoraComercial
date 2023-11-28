import React from 'react';
import './DespesaComponent.css';

const DespesasComponent = ({ despesas, itensDespesas }) => {
  return (
    <div className="despesas-component">
      <h2>Despesas</h2>
      <p>Total Gasto: R$ {despesas.toFixed(2)}</p>
      <ul>
        {itensDespesas.map((item) => (
          <li key={item.id}>{`${item.nome}: R$ ${item.valor.toFixed(2)}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DespesasComponent;
