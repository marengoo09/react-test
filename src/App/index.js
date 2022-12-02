import React from "react";

import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaulTodos = [
//     { text: "Cortar cebolla", completed: false },
//     { text: "Tomar curso introductorio a react", completed: false },
//     { text: "Llorar con la llorona", completed: true },
//     { text: "prueba", completed: true },
// ];

function App(props) {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
