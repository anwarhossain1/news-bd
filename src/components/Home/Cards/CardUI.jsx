import React from 'react';
import './card-style.css';

const CardUI = () => {
    const im="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80";
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={im} className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">sdfasfdasfas</h4>
            </div>
        </div>
    )
}

export default CardUI
