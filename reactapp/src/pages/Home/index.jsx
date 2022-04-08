import React, { useState } from "react";
import './style.css';
import { Card } from "../../components/Card";
export function Home() {
  const [studentName,setStudentName] = useState('Malcon');
  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o nome ..."
        onChange={event => setStudentName(event.target.value)}
      />
      <button type="button">Adicionar</button>
      <Card name='Malcon' time='10:55:25'/>
      <Card name='João' time='11:00:15'/>
    </div>
  );
}

