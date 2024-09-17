import Card from './Components/Card';

export default function App() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Card
        image="https://via.placeholder.com/120"
        title="Notebook"
        description="Notebook de alta performance."
        footer="Preço: R$ 3500,00"
      />
      <Card
        image="https://via.placeholder.com/120"
        title="Video Game"
        description="Nintendo Switch com excelente tela OLED."
        footer="Preço: R$ 1200,00"
      />
    </div>
  );
}