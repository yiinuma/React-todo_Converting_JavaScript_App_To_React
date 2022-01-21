/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState } from 'react';
import { Form } from './components/Form';
import { Modal } from './components/Modal';
import { Sort } from './components/Sort';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import useStorage from './hooks/storage';
import './style.css';

export function App() {
  const [todoList, setTodoList] = useStorage();

  // const [todoList, setTodoList] = useState([
  //   {
  //     id: '2022-1-18-7:26:52',
  //     text: 'やることリスト',
  //     limit: '2022-01-25',
  //     complete: false,
  //   },
  //   { id: '2022-1-18-7:27:3', text: '雪かき', limit: '2022-02-05', complete: false },
  //   { id: '2022-1-18-7:27:20', text: 'ぱんを焼く', limit: '2021-01-27', complete: false },
  // ]);

  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState('');

  return (
    <div className="h-screen bg-gradient-to-l from-green-500 to-green-700">
      <Title />
      <div className="flex flex-col justify-center mt-4 ml-auto mr-auto w-[80%]">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <Sort todoList={todoList} setTodoList={setTodoList} />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          modal={modal}
          setModal={setModal}
          setEditIndex={setEditIndex}
        />
      </div>
      <Modal
        todoList={todoList}
        setTodoList={setTodoList}
        modal={modal}
        setModal={setModal}
        editIndex={editIndex}
      />
    </div>
  );
}
