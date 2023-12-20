import React from 'react';
import './App.css';
type PropsType = {
    count: number
    addCount: () => void
    resetCount: () => void
    max: number
}

function Display(props: PropsType) {
    return (
        <div className='conteiner' >
            <div className='display'><span className={props.count === props.max ? "dangerous" : ""}> {props.count}</span></div>
            <div className="button">
                <button className='i' disabled={props.count === props.max} onClick={props.addCount}>INC</button>
                <button className='r' disabled={props.count === 0} onClick={props.resetCount}>RESET</button>
            </div>
        </div>
    );
}
export default Display;
