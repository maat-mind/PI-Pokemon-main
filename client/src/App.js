import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx'
import DetailPokemon from './components/DetailPokemon/DetailPokemon.jsx'
import Home from './components/Home.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route path='/create' component={CreatePokemon} />
          <Route path='/home/:id' component={DetailPokemon} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
