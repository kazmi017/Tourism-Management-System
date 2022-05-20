
import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

import axios from 'axios';

export default () => {

  const [fileName, setFileName] = useState("Upload Boundary File");

  const [user , setUser] = useState( {
    fName:'',
    lName:'',
    email:'',
    dob:'',
    password:''
})
const [photo,setphoto]=useState(null);

const handleImage= (e) =>{
  setphoto(
    e.target.files[0]

  )
  console.log(e.target.files[0])
 
}


const handleChange= e =>{
    const { name , value } = e.target;
    console.log(user);
    setUser({
        ...user,
        [name]:value
    })
   
}

const register = async (e) =>{
  e.preventDefault();
    const {fName , lName , email ,dob , password,photo}= user
    const data = new FormData()
    data.append('fName', user.fName)
    data.append('lName', user.lName)
    data.append('email', user.email)
    data.append('dob', user.dob)
    data.append('password', user.password)
    data.append('photo', photo)
    console.log("User",data)
    try {
      const res = await axios({
          method: "post",
          baseURL: `http://localhost:5001/SignUp`,
          headers: { 'Content-Type': 'multipart/form-data' },
          data: data,
      });
      console.log('File uploaded', res.data);
  } catch (err) {
      console.error('Failed to upload file', err);
  }
}
 
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form onSubmit={register} className="mt-4">
                <input type="file" name="file" onChange={handleImage}/>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control name="email" onChange={handleChange} autoFocus required type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="name" className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control name="fName" onChange={handleChange} autoFocus required type="text" placeholder="Hamza" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="namel" className="mb-4">
                    <Form.Label>Your Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control name="lName" onChange={handleChange} required type="text" placeholder="Shah" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="dob" className="mb-4">
                    <Form.Label>Your DOB</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control name="dob" onChange={handleChange} required type="text" placeholder="2018-07-22" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control name="password" onChange={handleChange} required type="password" placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to <Card >Surf and Enjoy</Card>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="order" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
