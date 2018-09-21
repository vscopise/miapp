import React from 'react';

const Cell = (props) => {
    return(
        <div className='cell' onClick={() => {props.onUpdate(props.data[1])}}>
            {props.data[0]}
        </div>
    )
}

export default Cell