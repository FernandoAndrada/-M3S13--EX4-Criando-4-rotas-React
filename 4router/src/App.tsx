import "./index.css"
import { Link } from 'react-router-dom'

export function App() {

  return (
    <div className="App">
      <Link to={`/`}>Profile</Link><br></br>
      <Link to={`Config`}>Configurações</Link><br></br>
      <Link to={`Index`}>Index</Link><br></br>
      <Link to={`List`}>Lista</Link><br></br>
      <Link to={`List/Id`}>Itens</Link><br></br>
    </div>
  )
}

export default App
