import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodosNotFound } from "../TodosNotFound";

function AppUI() {
    const {
        error,
        loading,
        searchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <TodosError/>}
                {loading && <TodosLoading/>}
                {!loading && !searchedTodos.length && !!searchValue.length && (
                    <TodosNotFound/>
                )}

                {!loading && !searchedTodos.length && !searchValue.length && (
                    <EmptyTodos/>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        completed={todo.completed}
                    >
                    </TodoItem>
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };
