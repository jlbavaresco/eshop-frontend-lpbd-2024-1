import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Produto from './componentes/produto/Produto'

function App() {
  return (
    <div>
      <h1>eShop</h1>
      <Produto/>
    </div>
  );
}

export default App;