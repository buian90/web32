import { Button } from "react-bootstrap"
import '../assests/style.css'
import { useDispatch, useSelector } from "react-redux"
// useSelector là function react-redux return trả về 1 tham số nó trả về đúng tham số đó
// useSelector để lấy giá trị trong store
// useDispath để cập nhật giá trị trong store
import {Giam , Tang } from "../action/counterAction"


const Display = () => {
    
   const count =  useSelector (state => state.count)
   // useSelector : là hook lấy cho mình những state ở store
   const dispath = useDispatch();
   // usedispath là hook gửi đi những action
   const handleGiam = () => {
    dispath(Giam())
   }
   const handleTang = () => {
    dispath(Tang())
   }
  return (
    <>
        <div className="wrap-counter">
           <h1>App Counter</h1> 
          <Button variant="danger"
          onClick={handleGiam}
          
          
          >Giảm -</Button>{count}
          
          <Button variant="primary"
          
          onClick={handleTang}
          >Tăng +</Button>

          </div>
    </>
  )
}

export default Display