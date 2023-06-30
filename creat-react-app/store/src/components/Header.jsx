import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="wrap-header">
       <div className="logo">Logo</div>

       <ul>
        <li>
            <Link to="/">
                Trang chủ
            </Link>
        </li>
        <li>
        <Link to="login">
                Đăng nhập
            </Link>
        </li>
        <li>
        <Link to="#">
                Đăng xuất
            </Link>
        </li>
       </ul>
    </div>
  )
}

export default Header