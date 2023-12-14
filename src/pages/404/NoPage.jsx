import './NoPage.css';

export default function NoPage() {
    return (
      <div className="notfound">
        <div className="container">
          <div className="error-container">
            <h1>404</h1>
            <p>Página não encontrada</p>
            <p>Desculpe, a página que você procura pode ter sido removida, renomeada ou está temporariamente indisponível.</p>
            <a href="/">Voltar para a página inicial</a>
          </div>
        </div>
      </div>
    );
}
