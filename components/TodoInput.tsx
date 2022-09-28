import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

import { AppDispatch } from '../store/store';
import Button from './Button';

const TodoInput: React.FC = () => {
    const [input, setInput] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const onAddTodo = () => {
        if (input.length > 0){
            dispatch(addTodo(input))
            setInput('')
        }    
    };

    return (
        <div className="flex gap-2">
            <input
                type="text"
                name="todoInput"
                value={input}
                onChange={onChange}
                placeholder="Input here..."
                className="  bg-transparent px-4 py-2 focus:outline-none border-b-2 border-sky-300"
            />
            <Button element="Add Todo" onClick={onAddTodo} />
        </div>
    );
};

export default TodoInput;
