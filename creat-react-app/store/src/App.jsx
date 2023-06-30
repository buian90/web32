import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import PrivateRouter from "./auth/PrivateRouter";


function App () {
  
  return (
      <BrowserRouter>
       <Routes>
        {/* Dành cho người dùng */}
        <Route path="/" element={<Layout/>}>

         {/* đường dẫn trang động - products là danh mục mình tự đặt tên */}
        <Route path="products/:id" element={<Detail/>}/>   

        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>

        <Route path="*" element={<NotFound/>}/>
        </Route>
        {/* Dành cho Admin */}
        <Route path="dashboad" element={<PrivateRouter/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
