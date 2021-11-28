import './App.css'
import changeColor from './components/changeColor'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <div className="App">
      <Profile />
      <Login />
      <changeColor />
    </div>
  )
}

export default App
