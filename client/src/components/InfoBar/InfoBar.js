import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './InfoBar.css';

const InfoBar = ({ room }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="infobar">
            <div className="infobar__left">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
            <h3>Channel_{room}</h3>
            </div>
            <div className="infobar__right">
                <Link to="/" className="infobar__link">
                    <ExitToAppIcon className="infobar__icon" style={{ fontSize: 30 }}  />
                </Link>
            </div>
            
        </div>
    )
}

export default InfoBar;
