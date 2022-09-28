import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Todo List</title>
                <meta name="description" content="Create a basic todo list." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-start items-center gap-5 min-h-screen min-w-screen bg-slate-800 text-sky-100">
                <TodoList />
            </main>
        </div>
    );
};

export default Home;
