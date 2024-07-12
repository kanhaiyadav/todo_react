import React from 'react'
import '../SignUpForm/SignUpForm.styles.scss';
import Main from '../main/main.component';
import SignInUpInput from '../SignInUP-input/SignInUp-input.component';
import {setEmail, setPassword} from '../../Redux/SignInUp-form/SignInUp-form.slice';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton.component';
import { createSession } from '../../Redux/user/user.slice';
import { selectEmail, selectPassword } from '../../Redux/SignInUp-form/SignInUp-selector';
import { reset } from '../../Redux/SignInUp-form/SignInUp-form.slice';
import { useNavigate } from 'react-router-dom';
import { selectJwt } from '../../Redux/user/user.selector';
import { toast } from 'react-toastify';

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    }

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    }

    const jwt = useSelector(selectJwt);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginPromise =
            dispatch(createSession({
                email: email,
                password: password,
            })).unwrap();
        
        toast.promise(loginPromise, {
            pending: 'Logging in...',
            success: {
                render({ data }) {
                    return data.message
                },
            },
            error: {
                render({ data }) {
                    return data.message
                },
            }
        })
        dispatch(reset());
    }

    if (jwt) {
        navigate('/home');
    }
    return (
        <Main
            style={{
                width: "430px",
                padding: "35px",
                zIndex: "1"
            }}
        >
            <form
                onSubmit={handleSubmit}
            >
                <SignInUpInput type={'email'} name={'email'} required={true} onChange={handleEmailChange} value={email} label={'Enter your email'} autoFocus/>
                <SignInUpInput type={'password'} name={'password'} required={true} onChange={handlePasswordChange} value={password} label={'Enter your password'} />
                <CustomButton type={'submit'}
                    style={{
                        width: "40%",
                        marginTop: "10px",
                    }}
                    buttonStyle={{
                        fontSize: "1.1rem",
                        width: "100%",
                        padding: '8px 10px'
                    }}
                >Sign In</CustomButton>
            </form>
        </Main>

    )
}

export default SignInForm;