import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
  
        <Form className='wrap-form'>
         <h1>Form Đăng Nhập</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email :</Form.Label>
        <Form.Control type="email" placeholder="Nhập email của bạn" />
        <Form.Text className="text-muted">
          Chúng tôi sẽ tuyệt đối bảo mật thông tin của bạn
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mật khẩu :</Form.Label>
        <Form.Control type="password" placeholder="Nhập mật khẩu của bạn" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  )
}

export default Login