import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
    return (
        <div className=' mt-10 text-lg'>
            <Link className={props.className} to={props.url}> {props.title} </Link>
        </div>
    );
}

export default Links;