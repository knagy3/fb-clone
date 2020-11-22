import React, {useEffect, useState} from 'react';
import "./Messanger.css";
import { IconButton, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import database from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Messanger() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // const userName = prompt('Please enter your name here!')
        setUserName(user.displayName);
      }, [] /*condition*/);
    
    useEffect(() => {
        // It is called listener:
        // takes a picture of the db every time that changes
        // docs is the message column in the firebase
        // doc is every sigle data in forEach
        // doc.data returns the message stuct as an object
        database.collection('messages').orderBy('timeStamp', 'desc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
        });
    }, [] );

    const sendMessage = (event) => {
        // all the logic to send the msg goes here
        // it does not allow to refresh the page on an event
        event.preventDefault();
        database.collection('messages').add({
          message: input,
          userName: userName,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // ...messages (keep all the already existed msgs)
        // and add the object at the end of the array
        // setMessages([...messages, {userName: userName, message: input}]);
        setInput(''); //Reinit the input
    }

    return (
        <div className="messanger">
            <div className="messanger__header">
                <div className="messanger__backButton">
                    <Link to="/"> 
                        <IconButton>
                            <ArrowBackIosIcon/>
                        </IconButton>
                    </Link>
                </div>
                <div className="messanger__headerImg">
                    <img className="image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
                </div>
            </div>
            <h1>Hello Nagy Family!</h1>
            <h2>Welcome {userName}</h2>
            <form className="messanger__form"> {/*Forms refresh after submitting*/}
                <FormControl className="messanger__formControl">
                    <Input className="messanger__input" placeholder="Enter a message..." type="text" value={input} onChange={
                        event => setInput(event.target.value)}>
                    </Input>

                    <IconButton className="messanger__iconButton" disabled={!input} 
                        variant="contained" 
                        type="submit" 
                        color="primary" 
                        onClick={sendMessage}>
                        <SendIcon>{/*No txt is needed*/}</SendIcon>
                    </IconButton>
                </FormControl>
            </form>

            <FlipMove>
                <div className="messanger__container">
                    {
                    // loop throug the messages and display themlike a for loop
                    // for map arrow function has () instead of {}
                    // id: due to does not refresh the whole list
                    messages.map(({id, message}) => (
                        <Message key={id} userName={userName}  message={message} />
                    )) }
                </div>
            </FlipMove> 
        </div>
    )
}

export default Messanger;
