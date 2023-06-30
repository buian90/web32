
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Layout from "./components/LayOut"
import Contact from "./components/Contact";

function App() {
  
  return (
  <BrowserRouter>

  <Routes>

    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="contact" element={<Contact/>}/>

    </Route>

    

  </Routes>

  </BrowserRouter>
  )
}

export default App
