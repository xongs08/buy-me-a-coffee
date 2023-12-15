import './HomePage.css';

export default function HomePage () {
    return (
      <div className="App">
        <div className="paymentOptions">
          <h2>Me pague um café ☕</h2>
          <a href="/buy-me-a-coffee/pix">
            <img src="https://www.imagensempng.com.br/wp-content/uploads/2023/06/logo-pix-icone-1024.png" />  
          </a>
        </div>
        <a href="https://github.com/xongs08/buy-me-a-coffee" id="github-anchor">
          <img id="github-anchor-img" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
        </a>
      </div>
    );
}
