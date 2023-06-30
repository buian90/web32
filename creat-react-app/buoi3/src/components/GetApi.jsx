import { useEffect, useState } from "react"
import axios from "axios"

const GetApi = () => {
    // bước 1 : tạo 1 statelưu trữ api khi gọi xong
    const [data, setData] = useState(null);
    // bước 2 : gọi API
    useEffect (() => {
        const getApi = async () => {
            const res = await axios({
                // medthor: 'get'  la phuong thuc tao moi hay chinh sua - xoa
                method: 'get',
                url: 'http://localhost:3004/posts'
            });
            const db = res.data
            
            setData(db)
        } 
        getApi();
    },[])
   
    console.log (data, 'data');
    return (
        <h1>Hello World</h1>
    )
}
export default GetApi
// bước 1 : xác định API muốn gọi : http://localhost:3004/posts
// bước 2 : bắt đầu gọi API