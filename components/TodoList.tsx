import { Provider } from 'react-redux';
import { store } from '../store/store';
import TodoInput from './TodoInput';
import Todos from './Todos';

const TodoList: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="container mx-auto flex flex-col justify-center items-center gap-5 mt-10">
                <h2 className=" text-4xl  font-medium text-sky-400">
                    Todo List
                </h2>
                <TodoInput />
                <Todos />
            </div>
        </Provider>
    );
};

export default TodoList;
