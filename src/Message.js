import React,{ forwardRef } from 'react';
import './Message.css';
import { Card, CardContent, Typography, } from '@material-ui/core'

const Message = forwardRef(({message, userName}, ref) => {

    const isUserTheSender = userName === message.userName;

    // if isUserTheSender is true, `message__user is added`
    // `message ${isUserTheSender && `message__user`}`

    return (
        <div ref={ref} className={`message ${isUserTheSender && `message__user`}`}>
            <Card className={isUserTheSender ? "message__userCard" : "message__guestCard"} >
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {/*Hide the name if it is you */}
                        {!isUserTheSender &&  `${message.userName || 'Unknown User'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
