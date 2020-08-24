import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

import './SideBar.css';

const SideBar = ({ users }) => {
    // const [seed, setSeed] = useState("");

    // useEffect(() => {
    //     setSeed(Math.floor(Math.random() * 5000));
    // }, []);

   

    return (
        
        <div className="sidebar">
            <h2>Recently joined</h2>
            <div className="sidebar__joined">
            
            {  
                users
                ? (                     
                    <div className="activeContainer">
                        
                        
                        
                            {users.map(({name}) => (
                                
                            <div key={name} className="activeItem">
                                <h3>{name}</h3>
                                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`} />    
                            </div>
                            
                            ))}
                        
                    </div>
     
                )
                : null
            }
        </div>
    </div>

        
        
    )
}

export default SideBar;
