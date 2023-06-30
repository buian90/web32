import { Link } from "react-router-dom"

const Header = () => {
    return (
       
   <div className = "header">
    <ul>
      <li>
        <Link to ="/">Trang chủ</Link>
      </li>
      <li>
        <Link to ="about">Giới thiệu</Link>
      </li>
      <li>
        <Link to="contact">Liên hệ</Link>
      </li>
    </ul>
   </div>

    )
}
export default Header