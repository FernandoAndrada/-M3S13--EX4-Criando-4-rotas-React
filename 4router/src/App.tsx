import "./index.css"
import { Link } from 'react-router-dom'

export function App() {

  return (
    <div className="App">
      <Link style={{ textDecoration:'', color:'black'}} to={`/`}>Profile</Link>
      <Link style={{ textDecoration:'', color:'black'}} to={`Config`}>Configurações</Link>
      <Link style={{ textDecoration:'', color:'black'}} to={`Index`}>Index</Link>
      <Link style={{ textDecoration:'', color:'black'}} to={`List`}>Lista</Link>
      <Link style={{ textDecoration:'', color:'black'}} to={`List/Id`}>Itens </Link>
    </div>
  )
}

export default App
