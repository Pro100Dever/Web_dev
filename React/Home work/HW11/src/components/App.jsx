import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import State from './State'
import StateList from './StateList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stateList' element={<StateList />} />
        <Route path='/stateList/:id' element={<State />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
