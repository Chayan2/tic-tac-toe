import React from 'react';





function Square(props) {
    return (
        <>
            <div className="square" onClick={props.onClick}>
                {props.user}
            </div>
        </>
    )

}



export default Square;