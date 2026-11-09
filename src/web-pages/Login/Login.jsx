import { Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Images from "../../Components/Images"
import ButtonComp from "../../Components/ButtonComp"
import LoginImg from "../../assets/login-pic.png"
import loginLogo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

const Login = () => {

        // const formHeader = {
        //     fontSize: 12,
        //     fontWeight: 500
        // }

        const formPlaceholder = {
            fontSize: 12,
            fontWeight: 500,
        }

  return (
    <>
      <Container className="py-md-0 py-5">
        <Row className="align-items-center g-0">

          <Col md={6} className="d-flex align-items-center justify-content-center ">
            <div className="login-left-holder">
              <Images src={LoginImg} className="img-background p-4"/>
              <Images src={loginLogo} className="logo-img"/>
            </div>
          </Col>

          <Col md={6} className="pe-md-5">

            <h3 className="mb-4" style={{fontWeight: "500", fontSize: "24px", textAlign: "center"}}>Staff Portal Login</h3>

            <Form className="">
                <Row className="gap-md-4 gap-3 g-0">
                    <Col md={12} className="">
                        <Form.Group controlId="formGroupUserName"/>
                        <Form.Control type="text" placeholder="Username" style={formPlaceholder} className="L1"/>
                    </Col>

                    <Col md={12} className="mb-1">
                        <Form.Group controlId="formGroupPassword"/>
                        <Form.Control type="password" placeholder="Password" style={formPlaceholder} className="L2"/>
                    </Col>   
                </Row>

                <Row className="g-0">
                  <Col md={6} xs={6} className="">
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" className="text-muted login-form-check" label="Remember me" style={{fontWeight: "600", fontSize: "12px"}}/>
                    </Form.Group>
                  </Col>

                  <Col md={6} xs={6}>
                    <p className="mb-0 text-end" style={{fontWeight: "600", fontSize: "12px"}}><Link to="" className="links-login text-muted">Forget Password?</Link></p>
                  </Col>
                </Row>
            </Form>
            
            <ButtonComp address="/Staff" buttonClass="butBrownClass mb-4 d-block" buttonText="Sign in"/>

            <ButtonComp address="/" buttonClass="butBrownClass-Login mb-1 d-block" buttonText={
              <span className="d-flex align-items-center justify-content-center gap-2">
                <FcGoogle size={18}/>
                <span className="text-muted" style={{fontWeight: "600", fontSize: "12px", fontFamily: "Nunito"}}>Continue with Google</span>
              </span>}
            />

            <p className="text-center" style={{fontWeight: "600", fontSize: "12px", fontFamily: "Nunito"}}>Don't Have An Account? <Link to="/Signup" className="text-decoration-none" style={{fontWeight: "500", fontSize: "12px", fontFamily: "Nunito", color: "#A44730"}}>Sign Up</Link></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login