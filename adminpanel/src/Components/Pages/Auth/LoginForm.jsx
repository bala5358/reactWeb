
import React, { Fragment, useState } from 'react';
import { Btn, H4, P, H6, Image } from '../../../AbstractElements';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';
import logoWhite from '../../../assets/images/login/logo.jpg';
import logoDark from '../../../assets/images/logo/logo_dark.png';

const LoginForm = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


const dispatch = useDispatch();
const handleLogin = async (e) => {
  e.preventDefault();

  const payload = { email, password };

  try {
    const response = await fetch('https://rthythm-backend.vercel.app/api/rhythm/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);

      dispatch(setUser({
        userId: data.id, // ✅ from API response
        name: data.name,
        email: data.email,
        address: {
          state: data.address?.state || '',
          district: data.address?.district || '',
        },
        image: data.image || '', // optional
      }));

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Redirecting to dashboard...',
        timer: 1500,
        showConfirmButton: false,
      });

      navigate('/dashboard/Dubai');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: data.message || 'Invalid email or password',
      });
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong. Please try again later.',
    });
  }
};


  return (
    <Fragment>
      <div className='login-card'>
        <div>
          <Link className={`logo ${logoClassMain || ''}`} to='/'>
            <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'logo' }} />
            <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'logo' }} />
          </Link>

          <div className='login-main'>
            <Form className='theme-form login-form' onSubmit={handleLogin}>
              <H4>Sign in to account</H4>
              <P>Enter your email & password to login</P>
              <FormGroup>
                <Label className='col-form-label m-0'>Email Address</Label>
                <Input
                  type='email'
                  className='form-control'
                  required
                  placeholder='test@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup className='position-relative'>
                <Label className='col-form-label m-0'>Password</Label>
                <div className='position-relative'>
                  <Input
                    type={togglePassword ? 'text' : 'password'}
                    className='form-control'
                    required
                    placeholder='********'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                    <span className={togglePassword ? '' : 'show'}></span>
                  </div>
                </div>
              </FormGroup>

              <FormGroup className='position-relative'>
                <div className='checkbox'>
                  <Input id='checkbox1' type='checkbox' />
                  <Label className='text-muted' for='checkbox1'>
                    Remember password
                  </Label>
                </div>
                <Link className='link' to='/pages/authentication/forget-pwd'>
                  Forgot password?
                </Link>
              </FormGroup>

              <FormGroup>
                <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }}>
                  Sign in
                </Btn>
              </FormGroup>

              <div className='login-social-title'>
                <H6 attrH6={{ className: 'text-muted mt-4 or' }}>Or Sign in with</H6>
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

              <P attrPara={{ className: 'text-center mb-0' }}>
                Don't have an account?
                <Link className='ms-2' to='/pages/authentication/register/Dubai'>
                  Create Account
                </Link>
              </P>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
