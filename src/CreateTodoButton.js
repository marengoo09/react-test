import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = () =>{
        alert('aqui se deberia abrir el modal');
    }

    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};