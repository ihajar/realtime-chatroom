import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import InfosideBar from '../InfosideBar/InfosideBar';
import InputBody from '../InputBody/InputBody';


let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
           
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
        
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    // function for sending messages

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);


    return (
        <div className="chat">
            <div className="chat__container">
                <div className="chat__header">
                    <InfosideBar room={room} />
                </div>
                
                <div className="chat__body">

                </div>
                <div className="chat__footer">
                    <InputBody message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
              
            </div> 
        </div>
    )
}

export default Chat;


