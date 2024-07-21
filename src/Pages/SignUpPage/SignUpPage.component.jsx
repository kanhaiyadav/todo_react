import React from 'react';
import { SignupPageContainer, SocailAuthContainer, SocialAuth } from './SignUpPage.styles';
import SignUPForm from '../../components/SignUpForm/SignUPForm.component';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
    return (
        <>
            <SignupPageContainer>
                <SocailAuthContainer>
                    <SocialAuth>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png' alt='google sign in' />
                        <span>Google</span>
                    </SocialAuth>
                    <SocialAuth 
                        style={{
                            backgroundColor: "black"
                        }}
                    >
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/919/919847.png' alt='github sign in' />
                        <span style={{ color: "white" }}>Github</span>
                    </SocialAuth>
                    <SocialAuth>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/732/732221.png' alt='microsoft sign in' />
                        <span>Microsoft</span>
                    </SocialAuth>
                </SocailAuthContainer>
                <SignUPForm />
                <p> Already have an account?<Link to='/login'>Sign in</Link></p>
            </SignupPageContainer>
        </>
    )
}

export default SignUpPage;