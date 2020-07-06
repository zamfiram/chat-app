import React from 'react';
import './Contact.css';

const name="Adam Shelton";
const status = true;
function Contact(){
    return(
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/70.jpg" class="avatar" />
            <div>
                <h4 class="name">{name}</h4>
                <div class="status">
                <p class="status-online"></p>
                <p class="status-text">{status?"online": "offline"}</p>
            </div>
            </div>
        </div>
);
};

export default Contact;