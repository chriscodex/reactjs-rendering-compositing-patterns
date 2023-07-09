import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span 
                className={`Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
            </span>

            {/* Condicional, si el TodoItem recibe una props que se llama completed, entonces se agrega la clase del costado*/}
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>

            <span 
                className="Icon-delete"
                onClick={props.onDelete}
            >
            </span>
        </li>
    );
}

export { TodoItem };