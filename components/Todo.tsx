import { Todo } from '../features/todo/todoSlice';
import { TiDelete } from 'react-icons/ti';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';

interface Props {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggleDone: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, onDelete, onToggleDone }) => {
    return (
        <div className="flex justify-between items-center w-full max-w-xs bg-teal-500/30 p-2 rounded-md">
            <div className="flex gap-5">
                <button onClick={() => onToggleDone(todo.id)}>
                    {todo.isDone ? <FiCheckSquare /> : <FiSquare />}
                </button>
                <p className="tex-left">
                    <span
                        className={`${
                            todo.isDone ? 'line-through text-gray-400' : ''
                        }`}
                    >
                        {todo.description}
                    </span>
                </p>
            </div>
            <button onClick={() => onDelete(todo.id)}>
                <TiDelete />
            </button>
        </div>
    );
};

export default Todo;
