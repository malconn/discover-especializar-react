import React from "react";
import './style.css';
import { Card } from "../../components/Card";
export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome ..."></input>
      <button type="button">Adicionar</button>
      <Card name='Malcon' time='10:55:25'/>
      <Card name='João' time='11:00:15'/>
    </div>
  );
}

