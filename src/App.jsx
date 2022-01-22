import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { Modal } from './components/Modal';
import { Sort } from './components/Sort';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { useStorage } from './hooks/useStorage';
import './style.css';

export function App() {
  const [todoList, putTodoList] = useStorage('my-todo');
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState('');

  return (
    <div className="h-screen bg-gradient-to-l from-green-500 to-green-700">
      <Title />
      <div className="flex flex-col justify-center mt-4 ml-auto mr-auto w-[80%]">
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
      />
    </div>
  );
}
