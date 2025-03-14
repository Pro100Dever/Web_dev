import store from './redux/store'
import {Provider} from 'react-redux'
import './App.css'
import Player from './components/Player/Player';

function App() {

  return (
    <Provider store={store}>
      <Player />
    </Provider>
  )
}

export default App
