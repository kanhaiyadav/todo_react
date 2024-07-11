import React from 'react'
import './SignUpForm.styles.scss';
import Main from '../main/main.component';
import SignInUpInput from '../SignInUP-input/SignInUp-input.component';
import { setName, setEmail, setPassword, setConfirmPassword } from '../../Redux/SignInUp-form/SignInUp-form.slice';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton.component';

const SignUPForm = () => {
    const dispatch = useDispatch();
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

    const name = useSelector(state => state.signInUpForm.name);
    const email = useSelector(state => state.signInUpForm.email);
    const password = useSelector(state => state.signInUpForm.password);
    const confirmPassword = useSelector(state => state.signInUpForm.confirmPassword);
    return (
        <Main
            style={{
                width: "430px",
                padding: "35px",
                zIndex: "1"
            }}
        >
            <form>
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