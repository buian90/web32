import { Link } from "react-router-dom"

const Footer = () => {
  return (
   <>
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>Copyright © 2036 <Link to="/">Cyborg Gaming</Link> Company. All rights reserved. 
          
          <br/>Design: Convert Web Tĩnh</p>
        </div>
      </div>
    </div>
  </footer>
   </>
  )
}

export default Footer