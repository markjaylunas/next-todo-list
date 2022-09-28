import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    description: string;
    isDone: boolean;
}

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: Date.now(),
                description: action.payload,
                isDone: false,
            });
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleDoneTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id !== action.payload) return todo;
                return {
                    ...todo,
                    isDone: !todo.isDone,
                };
            });
        },
    },
});

export const { addTodo, removeTodo, toggleDoneTodo } = todosSlice.actions;

export default todosSlice.reducer;
