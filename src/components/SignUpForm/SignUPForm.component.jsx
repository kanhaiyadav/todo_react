import React from 'react'
import './SignUpForm.styles.scss';
import Main from '../main/main.component';
import SignInUpInput from '../SignInUP-input/SignInUp-input.component';
import { setName, setEmail, setPassword, setConfirmPassword } from '../../Redux/SignInUp-form/SignInUp-form.slice';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton.component';
import { register } from '../../Redux/user/user.slice';
import { selectEmail, selectName, selectPassword, selectConfirmPassword } from '../../Redux/SignInUp-form/SignInUp-selector';
import { reset } from '../../Redux/SignInUp-form/SignInUp-form.slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import noti_audio from "../../assets/mixkit-message-pop-alert-2354 (1).mp3"
import error_audio from "../../assets/error.wav"



const SignUPForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const notification = new Audio(noti_audio);
    const errorSound = new Audio(error_audio);

    const handleNameChange = (event) => {
        dispatch(setName(event.target.value));
    }

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    }

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    }

    const handleConfirmPasswordChange = (event) => {
        dispatch(setConfirmPassword(event.target.value));
    }

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const confirmPassword = useSelector(selectConfirmPassword);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const signupPromise =
            dispatch(register({
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })).unwrap();
        toast.promise(signupPromise, {
            pending: 'Signing up...',
            success: {
                render({ data }) {
                    notification.play();
                    dispatch(reset());
                    navigate('/login');
                    return data.message;
                },
            },
            error: {
                render({ data }) {
                    navigate('/signup');
                    errorSound.play();
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
                <SignInUpInput type={'text'} name={'name'} required={true} onChange={handleNameChange} value={name} label={'Enter your name'} autoFocus />
                <SignInUpInput type={'email'} name={'email'} required={true} onChange={handleEmailChange} value={email} label={'Enter your email'} />
                <SignInUpInput type={'password'} name={'password'} required={true} onChange={handlePasswordChange} value={password} label={'Enter your password'} />
                <SignInUpInput type={'password'} name={'confirmPassword'} required={true} onChange={handleConfirmPasswordChange} value={confirmPassword} label={'Confirm your password'} />
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
                >Sign Up</CustomButton>
            </form>
        </Main>

    )
}

export default SignUPForm;