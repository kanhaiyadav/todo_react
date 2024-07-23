import React from 'react'
import { PageContainer } from './Account.styles'
import PageSection from '../../../components/PageSection/PageSection.component'
import CustomButton from '../../../components/CustomButton/CustomButton.component'
import UsernameForm from './UsernameForm/UsernameForm.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectJwt } from '../../../Redux/user/user.selector'
import { DeleteUser, setJwt } from '../../../Redux/user/user.slice'
import audio from "../../../assets/mixkit-message-pop-alert-2354 (1).mp3";
import error_audio from "../../../assets/error.wav";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Account = () => {
    const jwt = useSelector(selectJwt);
    const dispatch = useDispatch();
    const notification = new Audio(audio);
    const error_notification = new Audio(error_audio);
    const navigate = useNavigate();
    
    const handleDeleteUser = () => {
        const decision = window.confirm('Are you sure you want to delete your account?You will not be able to revert this action');
        if(decision) {
            const deleteUserPromise = dispatch(DeleteUser({ token: jwt })).unwrap();
            dispatch(setJwt(''));
            toast.promise(deleteUserPromise, {
                pending: 'Deleting user...',
                success: {
                    render({ data }) {
                        notification.play();
                        return data.message
                    }
                },
                error: {
                    render({ data }) {
                        error_notification.play();
                        return data.message
                    }
                }
            })
            navigate('/login');
        }
        else {
            console.log('keep user');
            return;
        }
    }
    return (
        <PageContainer>
            <PageSection title={'Edit Profile'}>
                <div style={{ width: '100%' }}>
                    <p>Change Your username: </p>
                    <UsernameForm />
                </div>
            </PageSection>
            <PageSection title={'Delete Your Account'}>
                <p>Once you delete your account you won't be able to recover it</p>
                <CustomButton effect={'scale'} style={{ backgroundColor: 'red' }} onClick={handleDeleteUser}>Delete Account</CustomButton>
            </PageSection>
        </PageContainer>
    )
}

export default React.memo(Account);