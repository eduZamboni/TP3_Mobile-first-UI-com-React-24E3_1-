import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h2 className="titulo-h2">Desenvolvimento Front-End com Frameworks</h2>
      <h3 className="titulo-h3">Mobile-First UI com React</h3>
      <h4 className="titulo-h4">Conceitos de Usabilidade</h4>
      <p className="paragrafo">
        A usabilidade é um aspecto fundamental no desenvolvimento de interfaces,
        garantindo que os usuários possam interagir com um produto de forma eficiente
        e satisfatória. Ela engloba princípios como facilidade de aprendizado,
        eficiência de uso, memorização, prevenção de erros e satisfação do usuário.
      </p>
      <p className="paragrafo">
        Ao projetar interfaces responsivas, é importante considerar como os elementos
        se adaptam a diferentes tamanhos de tela, mantendo a usabilidade em diversos
        dispositivos. Isso inclui ajustar tamanhos de fontes, espaçamentos e a
        disposição dos componentes para melhorar a experiência do usuário.
      </p>
      <p className="paragrafo">
        Com o Mobile-First, priorizamos o design para dispositivos móveis, onde o
        espaço é limitado. Isso nos obriga a focar no essencial, garantindo que as
        funcionalidades principais sejam acessíveis e fáceis de usar, antes de
        expandir para telas maiores.
      </p>
    </div>
  );
}

export default App;