import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './InfosideBar.css';

const InfosideBar = ({ room }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    return (
        <div className="inforsidebar">
            <div className="inforsidebar__left">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
            <h3>Channel_{room}</h3>
            </div>
            <div className="inforsidebar__right">
                <Link to="/" className="inforsidebar__link">
                    <ExitToAppIcon className="inforsidebar__icon" style={{ fontSize: 30 }}  />
                </Link>
            </div>
            
        </div>
    )
}

export default InfosideBar
