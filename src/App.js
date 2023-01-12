import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from `react-router-dom`
import Navbar from './componentes/navegacion/Navbar'
import Inicio from './componentes/paginas/Inicio'
import Pokemon from './componentes/paginas/Pokemon'
import Items from './componentes/paginas/Items'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/pokemon' component={Pokemon}/>
          <Route path='/items' components={Items}/>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
