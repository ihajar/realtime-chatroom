import React from 'react'
import SendIcon from '@material-ui/icons/Send';

import './InputBody.css';

const InputBody = ({ message, setMessage, sendMessage }) => {
    return (
        <div className="inputbody">
            <form className="form">
                <input
                    className="input"
                    type="text"
                    placeholder="Type your message here"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                />
                <button 
                    className="sendButton" 
                    onClick={(event) => sendMessage(event)}
                >
                    <SendIcon className="input__icon"/> 
                </button>
            </form>
        </div>
    )
}

export default InputBody;
