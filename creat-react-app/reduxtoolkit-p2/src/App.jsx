import { useDispatch, useSelector } from "react-redux"
import { actionGiam, actionTang } from "./slice/CaculatorSlice"


function App() {
  // lấy trạng thái state từ store về
   const counter = useSelector(state => state.caculator.count)
  // gửi 1 hành động về reducer
  const dispatch = useDispatch ()
  const handleTang = () => {
    dispatch(actionTang(1))
  }
  const handleGiam = () => {
    dispatch(actionGiam(1))
  }
  
  return (
    <div className="container">
            <h1>Ứng dụng số đếm</h1>
            <button onClick={handleTang}>Tăng + </button> <span>{counter}</span> <button onClick={handleGiam}>Giảm - </button>
           
    </div>
  )
}

export default App

// nhớ phải import actionTang,actionGiam
