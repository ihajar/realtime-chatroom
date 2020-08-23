import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';
import './MessagesBody.css';

const MessagesBody = ({ messages, name}) => {

    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>      
    )
}

export default MessagesBody;
