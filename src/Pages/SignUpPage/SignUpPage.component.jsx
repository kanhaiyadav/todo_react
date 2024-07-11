import React from 'react'
import './SignUpPage.styles.scss'
import SignUPForm from '../../components/SignUpForm/SignUPForm.component'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <div className='signup-page'>
            <div className='social-auth'>
                <div className='google'>
                    <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png' alt='google sign in'/>
                    <span>Google</span>
                </div>
                <div className='github'>
                    <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/919/919847.png' alt='github sign in'/>
                    <span>Github</span>
                </div>
                <div className='microsoft'>
                    <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/732/732221.png' alt='microsoft sign in'/>
                    <span>Microsoft</span>
                </div>
            </div>
            <SignUPForm />
            <p> Already have an account?<Link to='/login'>Sign in</Link></p>
        </div>
    )
}

export default SignUpPage;