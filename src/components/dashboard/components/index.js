import React from 'react';
import '../index.css'

function Card(props) {
    return (

            <div className='card p-10 flex justify-between items-center'>
                <div className="card-content flex-col">
                    <h1 className=' text-xl font-bold'>{props.title}</h1>
                    <h2 className='card-num text-3xl'>{props.num}</h2>
                </div>
                <div className="card-icon">
                    <img src={props.icon} alt="" />
                    
                </div>
            </div>
    );
}

export default Card;