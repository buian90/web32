// state quản lý giá trị trong component
/* hook */
// định nghĩa hook : 1- BẮt đầu bằng từ use
                 //  2- phương thức funtion có sẵn - dùng phải import
// 1. hook useState ()
//  useState : đc gọi 1 hay nhiều lần để hành động thay đổi giá trị của code
import { useEffect, useState } from "react"

        
const Hook = () => {
    const [name, setName] = useState('An');
    const handleClick = () => {
        setName('Abc')
    }
    console.log (name , 'name')
    useEffect (()=>{
        
    })
    return (
        <button onClick={handleClick}>Rename</button>
    )
}
export default Hook
// 2 . hook useEffect
// useEffect là dạng kiểu số lần thực hiện hành động call Api
        // xử lý logic useEffect ở đây 
        // nhận 2 giá trị : 1. arrow function thực hiện logic hành động mình muốn
                    //      2. Deps : Trường hợp 1- không có -- logic được gọi liên tục
                    //                trường hợp 2 -  truyền vào 1 mảng rỗng [] -- logic đc gọi 1 lần
                    //                trường hợp 3 - truyền vào 1 giá trị cụ thể -- logic đc gọi theo giá trị đấy
