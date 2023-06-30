import { useReducer } from "react"

const reducer = (state, action) => {
// thực hiện logic để cập nhật xử lý hành động todos
switch (action.type) {
    case "ADD TODO":
      return [...state, action.payload]
}

}
const ToDos = () => {
const [todos, dispatch] = useReducer(reducer,[]);
const handleClick = () => {
    const newToDos = 'Công việc mới';
   dispatch ({type : 'ADD TODO', payload: newToDos});
}
return (
    <>
   <button 
   style={{
    background :     "green",
    padding: "5px 23px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer"
   }}
//    thêm sự kiện click :
onClick = {handleClick}
   > 
   Thêm công việc </button>

{/* //    hiển thị nội dung ra ngoài */}

{todos.map((value,index)=>{
    return (
        <h2 key={index}>{value}</h2>
    )
})} 
</>
)
}
export default ToDos

// 1. khai báo reducer
// 2. todo  nhận giá trị ban đầu là 1 mảng rỗng []
// 3. reducer là 1 function xử lý và cập nhật todo