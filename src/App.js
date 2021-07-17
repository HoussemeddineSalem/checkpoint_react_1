
import './App.css';
import {Form , FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Form className="login-form">
     <h1><span className="font-weight-bold">MyWebsite</span>.com</h1>
     <h2 className='text-center'>Welcome</h2>
     <FormGroup >
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" className="mt-3" />
        <Label for="examplePassword" className='mt-3'>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" className='mt-3' />
     </FormGroup>
      <div className='d-grid gap-2 mt-3'>
      <Button className="btn btn-lg btn-dark btn-block">Log in</Button>
      </div>
      <div className='text-center p-3'>
        Or continue with your social account
      </div>
      <FacebookLoginButton />
      <div className='text-center'>
        <a href="#" >Sign Up</a>
        <span className="p-2">|</span>
        <a href="#" >Forgot Password</a>

      </div>
      <div className="text-center mt-5">
        <h5 >Created by Houssem</h5>
      </div>
      
    </Form>
  );
}

export default App;
