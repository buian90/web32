import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Browse from "./Pages/Browse"
import Details from "./Pages/Details"
import Streams from "./Pages/Streams"
import Profile from "./Pages/Profile"
import Layout from "./Components/Layout"
import NotFound from "./Pages/NotFound"

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Browse" element={<Browse/>}/>
    <Route path="Details" element={<Details/>}/>
    <Route path="Streams" element={<Streams/>}/>
    <Route path="Profile" element={<Profile/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
