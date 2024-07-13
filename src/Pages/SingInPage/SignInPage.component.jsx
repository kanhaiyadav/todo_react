import React from 'react';
import { SignupPageContainer, SocailAuthContainer, SocialAuth } from '../SignUpPage/SignUpPage.styles';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import { Link } from 'react-router-dom';
import LinearColor from '../../components/Loader/loader';
import { selectIsLoading } from '../../Redux/user/user.selector';
import { useSelector } from 'react-redux';

const SignInPage = () => {
    return (
        <>
            <div className='loader'>
                {
                    useSelector(selectIsLoading) ? <LinearColor /> : null
                }
            </div>
            <SignupPageContainer>
                <SocailAuthContainer>
                    <SocialAuth>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png' alt='google sign in' />
                        <span>Google</span>
                    </SocialAuth>
                    <SocialAuth style={{ backgroundColor: "black" }}>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/919/919847.png' alt='github sign in' />
                        <span style={{ color: "white" }}>Github</span>
                    </SocialAuth>
                    <SocialAuth>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/732/732221.png' alt='microsoft sign in' />
                        <span>Microsoft</span>
                    </SocialAuth>
                </SocailAuthContainer>
                <SignInForm />
                <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
            </SignupPageContainer>
        </>
    )
}

export default SignInPage;