import {useState} from 'react';

import '../css/ReorderCss.css';

function Reorder({onReorder}) {
    return (
        <button className='fade-in-button' onClick={onReorder}>Reorder</button>
    );
}

export default Reorder; 