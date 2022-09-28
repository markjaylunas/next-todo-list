import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { removeTodo, toggleDoneTodo } from '../features/todo/todoSlice';

const Todos: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch: AppDispatch = useDispatch();

    const onToggleDone = (id: number) => {
        dispatch(toggleDoneTodo(id));
    };

    const onDelete = (id: number) => {
        dispatch(removeTodo(id));
    };

    return (
        <>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        onDelete={onDelete}
                        onToggleDone={onToggleDone}
                        key={todo.id}
                    />
                ))
            ) : (
                <span className="text-2xl font-medium text-white/50 ">
                    No Todos
                </span>
            )}
        </>
    );
};

export default Todos;
