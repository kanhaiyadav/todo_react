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
import noti_audio from "../../assets/mixkit-message-pop-alert-2354 (1).mp3"
import error_audio from "../../assets/error.wav"

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    }

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    }

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const notification = new Audio(noti_audio);
    const error_notification = new Audio(error_audio);


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
                    navigate('/home');
                    dispatch(reset());
                    notification.play();
                    return data.message
                },
            },
            error: {
                render({ data }) {
                    error_notification.play();
                    navigate('/login');
                    return data.message
                },
            }
        })
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
                <CustomButton type={'submit'} shape='regular' effect='scale'
                    style={{
                        width: "40%",
                        marginTop: "10px",
                        fontSize: '1.2rem'
                    }}
                >Sign In</CustomButton>
            </form>
        </Main>

    )
}

export default SignInForm;