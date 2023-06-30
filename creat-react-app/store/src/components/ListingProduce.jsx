import axios from "axios"
import { useEffect, useState } from 'react';
import  {Card, Col, Row ,Container,  Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ListingProduce = () => {
    const [ data , setData] = useState([]) //1.Để đổ API về ta tạo State : const [data , setData] = useState([]) trong đó State là mảng rỗng  
    useEffect ( () => {   
          const getApi = async () => {    //3. tạo const getApi async () => nhận res await là để đợi res gọi Api về đủ dữ liệu mới trả về getApi
            const res = await axios({
                method : "get",

                url: "https://fakestoreapi.com/products"

               }) 
               return setData(res.data)  //7.return là trả về - setdata là hook của useState nó lưu lại giá trị mới cho state 
          }                 
                                         //2.Dùng useEffect để load trang chỉ load
                                         //2. ở useEffect nhận 2 giá trị : 1 là arrow function () => 
                                          //    arrow function để call api. Khi để () => rỗng thì sẽ call api liên tục về máy
                                          //                                2 là mảng rỗng để call api 1 lần
                                          //4. trong () => có const res = axios ({})
                                          //    trong axios có phương thức method : "get" để lấy api về
                                          //    trong axios có url:".copy đường link api vào." - url là đường link để lấy api
           getApi()                       //5. getApi() là tên function gọi lại vì ở dòng8 getApi là 1 function nên phải gọi lại để trả ra kết quả 
                                          //6. phải ipmort axios và useState useEffect
    },[])


  return (
    <div className="wrap-listing">
        <Container>
      <Row>
        <Col xs={12} sm={12} md={12}> 
        <h2 className='tittle'>Sản phẩm nổi bật</h2>
        </Col>
      </Row>

      <Row>
        { data.length > 0 && data.map(item => {       //1. đổ api vào bằng { data.length > 0 && data.map(item =>{...copy nội dung vào })
                                                      //1. data.map là phải có (item => {}) - data.map này là kết hợp data ở dòng 6 lúc lấy api về
                                                      //1. console.log (item,'item') để lấy các giá trị : id , image, title, description...
              console.log(item, 'item');              //2. return (trả về .. nội dung)
                                                      //3. tạo thêm key={item.id} ở Col để tạo thêm cột , mỗi cột 1 id khác nhau
                                                      //4. đổi src sang src={item.image} để đổ ảnh vào mỗi sản phẩm
                                                      //5. thêm {item.title} ở thẻ <Card.Title>..Card Title..</Card.Title> để đổ tên sản phẩm 
                                                      //6. đổi nội dung text là {item.description}
            return (
                 <Col xs={12} sm={6} md={3} key={item.id}>       
                <Card>
                  <Link to={`products/${item.id}`}>   
                  <Card.Img variant="top" src={item.image} />
                  </Link>
                                                      {/* 7. thêm thẻ <Link></Link> để chuyển từ trang listting sang trang detail */}
                                                      {/* 7. tạo trang detail xong quay lại sửa lại trang listting và nhớ cú pháp {`products/${item.id}`} */}
                  <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="primary">Mua Ngay</Button>
              </Card.Body>
            </Card>
                </Col> 
                )
        }) }
      
      </Row>
    </Container>
        </div>
  )
}

export default ListingProduce

// xs là mobile
// sm là table
// md là destop (PC)
