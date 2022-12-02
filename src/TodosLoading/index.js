import React from "react";
import Skeleton from "react-loading-skeleton";
import "./TodosLoading.css";

function TodosLoading() {
    return(
        <div className='LoadingTodo-container'>
            <div className="LoadingTodo-p"> Cargando TODOS... </div>
        </div>
    )
}
export { TodosLoading };
