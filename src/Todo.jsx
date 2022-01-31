import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { Modal } from './components/Modal';
import { Sort } from './components/Sort';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';
import { useStorage } from './hooks/useStorage';
import './style.css';

export function Todo() {
  const [todoList, putTodoList] = useStorage();
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState('');

  return (
    <div className="h-screen bg-gradient-to-l from-green-500 to-green-700 pt-4 pl-4">
      <Header />
      <Title />
      <div className="mt-4 ml-auto mr-auto flex w-[80%] flex-col justify-center">
        <InputForm todoList={todoList} putTodoList={putTodoList} />
        <Sort todoList={todoList} putTodoList={putTodoList} />
        <TodoList
          todoList={todoList}
          putTodoList={putTodoList}
          modal={modal}
          setModal={setModal}
          setEditIndex={setEditIndex}
        />
      </div>
      <Modal
        todoList={todoList}
        putTodoList={putTodoList}
        modal={modal}
        setModal={setModal}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
    </div>
  );
}
