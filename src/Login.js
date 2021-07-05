import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import { Button } from '@material-ui/core'

import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    };

    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-256.png" alt="fb circle" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text"/>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
