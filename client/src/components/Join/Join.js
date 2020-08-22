import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join">
            <div className="join__body">
                <div className="join__right">
                    <h1 className="join__heading">Online channels for <span>Realtime Chat</span></h1>
                    
                    <div><input placeholder="Your name" className="join__input" type="text" onChange={(event) => setName(event.target.value)} /></div>
                    <div><input placeholder="Channel" className="join__input" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                    
                    <Link 
                        onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chatroom?name=${name}&room=${room}`}>
                        <button className="join__button" type="submit">Join </button>
                    </Link>
                </div>
                <div className="join__left">

                </div>
            </div>
        </div>
    )
}

export default Join;
