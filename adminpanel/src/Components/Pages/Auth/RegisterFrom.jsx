// import React, { Fragment, useState } from 'react';
// import { Facebook, Linkedin, Twitter } from 'react-feather';
// import { Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
// import { Btn, H4, P, H6, Image } from '../../../AbstractElements';
// import { Link } from 'react-router-dom';
// import logoWhite from '../../../assets/images/logo/logo.png';
// import logoDark from '../../../assets/images/logo/logo_dark.png';

// const RegisterFrom = ({ logoClassMain }) => {
//   const [togglePassword, setTogglePassword] = useState(false);
//   return (
//     <Fragment>
//       <div className='login-card'>
//         <div>
//           <div>
//             <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
//               <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'looginpage' }} />
//               <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'looginpage' }} />
//             </Link>
//           </div>
//           <div className='login-main'>
//             <Form className='theme-form login-form'>
//               <H4>Create your account</H4>
//               <P>Enter your personal details to create account</P>
//               <FormGroup>
//                 <Label className='col-form-label m-0 pt-0'>Your Name</Label>
//                 <Row className='g-2'>
//                   <Col xs='6'>
//                     <Input className='form-control' type='text' required='' placeholder='Fist Name' />
//                   </Col>
//                   <Col xs='6'>
//                     <Input className='form-control' type='email' required='' placeholder='Last Name' />
//                   </Col>
//                 </Row>
//               </FormGroup>
//               <FormGroup>
//                 <Label className='col-form-label m-0 pt-0'>Email Address</Label>
//                 <Input className='form-control' type='email' required='' placeholder='Test@gmail.com' />
//               </FormGroup>
//               <FormGroup className='position-relative'>
//                 <Label className='col-form-label m-0 pt-0'>Password</Label>
//                 <div className='position-relative'>
//                   <Input className='form-control' type={togglePassword ? 'text' : 'password'} name='login[password]' required placeholder='*********' />
//                   <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
//                     <span className={togglePassword ? '' : 'show'}></span>
//                   </div>
//                 </div>
//               </FormGroup>
//               <FormGroup className='m-0'>
//                 <div className='checkbox'>
//                   <Input id='checkbox1' type='checkbox' />
//                   <Label className='text-muted' for='checkbox1'>
//                     Agree with <span>Privacy Policy</span>
//                   </Label>
//                 </div>
//               </FormGroup>
//               <FormGroup>
//                 <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Create Account</Btn>
//               </FormGroup>
//               <div className='login-social-title'>
//                 <H6 attrH6={{ className: 'text-muted or mt-4' }}>Or Sign up with</H6>
//               </div>
//               <div className='social my-4 '>
//                 <div className='btn-showcase'>
//                   <a className='btn btn-light' href='https://www.linkedin.com/login' rel='noreferrer' target='_blank'>
//                     <Linkedin className='txt-linkedin' /> LinkedIn
//                   </a>
//                   <a className='btn btn-light' href='https://twitter.com/login?lang=en' rel='noreferrer' target='_blank'>
//                     <Twitter className='txt-twitter' />
//                     twitter
//                   </a>
//                   <a className='btn btn-light' href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
//                     <Facebook className='txt-fb' />
//                     facebook
//                   </a>
//                 </div>
//               </div>
//               <P attrPara={{ className: 'mb-0 text-start' }}>
//                 Already have an account?
//                 <Link className='ms-2' to={`${process.env.PUBLIC_URL}/pages/authentication/login-simple`}>
//                   Sign in
//                 </Link>
//               </P>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default RegisterFrom;
import React, { useState, Fragment } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P, H6, Image } from '../../../AbstractElements';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';
import logoWhite from '../../../assets/images/login/logo.jpg';
import logoDark from '../../../assets/images/logo/logo_dark.png';
import { indiaData } from '../../Common/Data/India-states-districts';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterFrom = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const states = indiaData.map((item) => item.state);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    const stateData = indiaData.find((item) => item.state === stateName);
    setDistricts(stateData ? stateData.districts : []);
    setSelectedDistrict('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name,
    email,
    password,
    state: selectedState,
    district: selectedDistrict,
  };

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rhythm/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Registered!',
        text: 'User registered successfully!',
        confirmButtonText: 'Go to Dashboard',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/dashboard/Dubai'); // Change to your dashboard route
        }
      });

      // Clear form
      setName('');
      setEmail('');
      setPassword('');
      setSelectedState('');
      setSelectedDistrict('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: data.message || 'Something went wrong!',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong! Please try again.',
    });
  }
};


  return (
    <Fragment>
      <div className='login-card'>
        <div>
          <div>
            <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
              <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'loginpage' }} />
              <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'loginpage' }} />
            </Link>
          </div>
          <div className='login-main'>
            <Form className='theme-form login-form' onSubmit={handleSubmit}>
              <H4>Create your account</H4>
              <P>Enter your personal details to create account</P>

              {/* State Dropdown */}
              <FormGroup>
                <Label className='col-form-label m-0 pt-0'>State</Label>
                <Input type='select' value={selectedState} onChange={handleStateChange}>
                  <option value=''>Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              {/* District Dropdown */}
              <FormGroup>
                <Label className='col-form-label m-0 pt-0'>District</Label>
                <Input
                  type='select'
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={!selectedState}
                >
                  <option value=''>Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              {/* Name */}
              <FormGroup>
                <Label className='col-form-label m-0 pt-0'>Your Name</Label>
                <Input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder='Your Name'
                />
              </FormGroup>

              {/* Email */}
              <FormGroup>
                <Label className='col-form-label m-0 pt-0'>Email Address</Label>
                <Input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='test@gmail.com'
                />
              </FormGroup>

              {/* Password */}
              <FormGroup className='position-relative'>
                <Label className='col-form-label m-0 pt-0'>Password</Label>
                <div className='position-relative'>
                  <Input
                    type={togglePassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='*********'
                  />
                  <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                    <span className={togglePassword ? '' : 'show'}></span>
                  </div>
                </div>
              </FormGroup>

              {/* Terms Checkbox */}
              <FormGroup className='m-0'>
                <div className='checkbox'>
                  <Input id='checkbox1' type='checkbox' required />
                  <Label className='text-muted' for='checkbox1'>
                    Agree with <span>Privacy Policy</span>
                  </Label>
                </div>
              </FormGroup>

              {/* Submit Button */}
              <FormGroup>
                <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>
                  Create Account
                </Btn>
              </FormGroup>
               {/* Social login */}
               <div className='login-social-title'>
                <H6 attrH6={{ className: 'text-muted or mt-4' }}>Or Sign up with</H6>
               </div>
              <div className='social my-4 '>
                 <div className='btn-showcase'>
                   <a className='btn btn-light' href='https://www.linkedin.com/login' rel='noreferrer' target='_blank'>
                     <Linkedin className='txt-linkedin' /> LinkedIn
                   </a>
                   <a className='btn btn-light' href='https://twitter.com/login?lang=en' rel='noreferrer' target='_blank'>
                     <Twitter className='txt-twitter' />
                     twitter
                   </a>
                   <a className='btn btn-light' href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                     <Facebook className='txt-fb' />
                    facebook
                  </a>
                </div>
               </div>

              {/* Redirect to login */}
              <P attrPara={{ className: 'mb-0 text-start' }}>
                Already have an account?
                <Link className='ms-2' to={`/login/Dubai`}>
                  Sign in
                </Link>
              </P>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterFrom;
