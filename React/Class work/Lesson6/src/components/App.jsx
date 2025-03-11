import { Provider } from 'react-redux'
import store from '../redux/store'
import DogsComponent from './DogsComponent'

function App() {
  // let title = null
  // async function getPost() {
  //   const data = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  //   title = data.data.title
  //   return data.data.title
  // }
  // console.log(getPost())
  // console.log(title)

  return (
    <Provider store={store}>
      <DogsComponent />
    </Provider>
  )
}

export default App
