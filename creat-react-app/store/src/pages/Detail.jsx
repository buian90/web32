import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detail = () => {
                                //1 lấy id động từ routẻ bằng useParams
    const {id} = useParams();   //1 useParams() là hook react-router-dom chuyên lấy id dynamic
                                //1 {id} viết tắt để gọi luôn id không phải dùng const id.id = use... 

    console.log(id);
                                           //2 Lấy API từ id
    const [data , setData] = useState([])  //2 làm các bước như bên pages listing
    useEffect (() => {
        const getApi = async () => {
            const res = await axios ({
                method : "get",
                url:"https://fakestoreapi.com/products/2"
            })
            
            return setData(res.data)

        }
      getApi()
    },[])              // [ ] là buộc phải có nếu ko nó call api liên tục
    console.log(data); // [ ] có thể truyền [ URL , id] khi url hoặc id thay đổi thì trang sẽ load lại
    return (
       <>
        <h1>{data && data.title}</h1> 
                       {/* 3 trong return cho <></> tạo đơn giản hơn vì đã lấy về data rồi ko như trang listting  */}
        
       </>
  )
}

export default Detail