import './App.css'
import './styles/global.css'
import Login from './components/Login'
import ProdutoP from './components/ProdutoP'
import{Route, BrowserRouter as Router, Routes} from 'react-router-dom'
//import { Produto } from './components/Produto'

// componente funcional
function App(): any {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<ProdutoP />} />
      </Routes>
    </Router>
  )
}

export default App