import React from 'react';
import "../SignUpPage/SignUpPage.styles.scss";
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
            <div className='signup-page'>
                <div className='social-auth'>
                    <div className='google'>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/2702/2702602.png' alt='google sign in' />
                        <span>Google</span>
                    </div>
                    <div className='github'>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/919/919847.png' alt='github sign in' />
                        <span>Github</span>
                    </div>
                    <div className='microsoft'>
                        <img className='auth-img' src='https://cdn-icons-png.flaticon.com/128/732/732221.png' alt='microsoft sign in' />
                        <span>Microsoft</span>
                    </div>
                </div>
                <SignInForm />
                <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
            </div>
        </>
    )
}

export default SignInPage;