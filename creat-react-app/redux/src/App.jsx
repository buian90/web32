import Display from "./components/Display"
import store from "./store/store"
import { Provider } from "react-redux"
//import provider từ react-redux
//import store
// provider để phân phối các state trong store

function App() {
  

  return (
    <>
    
    <Provider store={store}>
      
    <Display/>
    </Provider>
    </>
  )
}

export default App
