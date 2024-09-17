import './styles.css';

function App() {
  return (
    <div>
      <h2>Desenvolvimento Front-End com Frameworks</h2>
      <h3>Mobile-First UI com React</h3>
      <h4>Diferença entre responsividade e adaptabilidade</h4>
      <p>
        A responsividade refere-se ao design de interfaces que se adaptam
        fluidamente a diferentes tamanhos de tela, ajustando o layout e o
        conteúdo de acordo com o espaço disponível. Isso é conseguido através de
        layouts flexíveis, media queries e imagens escaláveis, proporcionando uma
        experiência consistente em diversos dispositivos.
      </p>
      <p>
        Já a adaptabilidade envolve a criação de layouts distintos para
        diferentes resoluções ou dispositivos. Em vez de um único layout que se
        ajusta, versões específicas da interface são desenvolvidas para atender
        às características de cada dispositivo, podendo oferecer funcionalidades
        ou conteúdos diferenciados.
      </p>
      <p>
        Em suma, enquanto a responsividade foca em um design único que responde
        às mudanças de tamanho de tela, a adaptabilidade prevê múltiplos designs
        pré-definidos para diferentes contextos de uso.
      </p>
    </div>
  );
}

export default App;