import React, { useState } from 'react'
import { Form } from './UsernameForm.styles'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsername } from '../../../../Redux/user/user.slice'
import { selectJwt } from '../../../../Redux/user/user.selector'
import { toast } from 'react-toastify'
import audio from "../../../../assets/mixkit-message-pop-alert-2354 (1).mp3";
import error_audio from "../../../../assets/error.wav";

const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const jwt = useSelector(selectJwt);
    const dispatch = useDispatch();
    const notification = new Audio(audio);
    const error_notification = new Audio(error_audio);

    const handleSubmit = (e) => {
        e.preventDefault();
        const changeUsernamePromise = dispatch(changeUsername({
            token: jwt,
            username: username
        })).unwrap();
        setUsername("");
        toast.promise(changeUsernamePromise, {
            pending: 'Changing username...',
            success: {
                render({ data }) {
                    notification.play();
                    return data.message
                },
            },
            erro: {
                render({ data }) {
                    error_notification.play();
                    return data.message
                },
            }
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input type='text' placeholder='New username' onChange={(e) => setUsername(e.target.value)} value={username} required></input>
            <button type={'submit'}>Done</button>
        </Form>
    )
}

export default React.memo(UsernameForm);