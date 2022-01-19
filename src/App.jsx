/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState } from 'react';
import { FaEdit, FaCheck, FaTrashAlt } from 'react-icons/fa';
import { Form } from './components/Form';
import { Sort } from './components/Sort';
import { Title } from './components/Title';
import './style.css';

export function App() {
  const [todoList, setTodoList] = useState([
    {
      id: '2022-1-18-7:26:52',
      text: 'やることリスト',
      limit: '2022-01-25',
      complete: false,
    },
    { id: '2022-1-18-7:27:3', text: '雪かき', limit: '2022-02-05', complete: false },
    { id: '2022-1-18-7:27:20', text: 'ぱんを焼く', limit: '2021-01-27', complete: false },
  ]);
  const [modal, setModal] = useState(false);
  function checkLimit(todoLimit) {
    const now = new Date();
    const formatNow = `${now.getFullYear()}-${`0${now.getMonth() + 1}`.slice(-2)}-${now.getDate()}`;

    const keepTheDeliveryDate = new Date(todoLimit) - new Date(formatNow) >= 0;
    return keepTheDeliveryDate;
  }

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((list) => {
        if (id === list.id) {
          return {
            ...list,
            complete: !list.complete,
          };
        }
        return list;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  function handleModal() {
    setModal(true);
    // const wrapper = document.querySelector('#modal');
    // const bg = wrapper.querySelector('.modal-bg');
    // const closeButton = wrapper.querySelector('.modal-close');
    // const form = document.forms['js-editform'];
    // const inputText = form.querySelector('textarea');
    // const inputLimit = form.querySelector('input[type="date"]');
    // const clearButton = form.querySelector('.modal-clear');
    // const submitButton = form.querySelector('.modal-submit');
    // bg.addEventListener('click', close);
    // closeButton.addEventListener('click', close);
    // clearButton.addEventListener('click', clear);
    // submitButton.addEventListener('click', submit);
    // inputText.value = todos[index].todo;
    // inputLimit.value = todos[index].limit;
    // wrapper.classList.add('is-open');
    // function close() {
    //   wrapper.classList.remove('is-open');
    // }
    // function clear() {
    //   inputText.value = '';
    // }
    // function submit() {
    //   const newTodo = {
    //     inputDate: todos[index].inputDate,
    //     todo: inputText.value,
    //     limit: inputLimit.value,
    //     complete: todos[index].complete,
    //   };
    //   todos.splice(index, 1, newTodo);
    //   localStorage.setItem('todos', JSON.stringify(todos));
    // }
  }

  return (
    <div className="h-screen bg-gradient-to-l from-green-500 to-green-700">
      <Title />
      <div className="flex flex-col justify-center mt-4 ml-auto mr-auto w-[80%]">
        <Form todoList={todoList} setTodoList={setTodoList} />
        <Sort todoList={todoList} setTodoList={setTodoList} />

        <ul className="todo-list mt-8 w-full">
          {todoList &&
            todoList.map((list) => (
              <li
                className={`todo-item ${list.complete ? 'completed' : ''}`}
                key={list.id}
                data-limit={checkLimit(list.limit)}
              >
                <div className="todo-div">
                  <p className="todo-todo">{list.text}</p>
                  <div className="todo-task">
                    <p className="todo-date">
                      期限:{list.limit}
                      {checkLimit(list.limit) ? (
                        ''
                      ) : (
                        <span className="limit-over">期限が過ぎています！！</span>
                      )}
                    </p>
                    <div>
                      <button onClick={() => handleModal(list.id)} className="edit-btn">
                        <i className="pointer-events-none">
                          <FaEdit />
                        </i>
                      </button>
                      <button onClick={() => handleComplete(list.id)} className="complete-btn">
                        <i className="pointer-events-none">
                          <FaCheck />
                        </i>
                      </button>
                      <button onClick={() => handleDelete(list.id)} className="trash-btn">
                        <i className="pointer-events-none">
                          <FaTrashAlt />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div
        id="modal"
        className={`transition duration-300 ease-in-out fixed top-0 left-0 opacity-0 invisible w-screen flex justify-center h-screen items-center bg-slate-500 bg-opacity-75 antialiased ${
          modal ? `is-open` : ''
        }`}
      >
        <div className="modal-bg z-10 absolute top-0 left-0 w-full h-full"> </div>
        <div className="z-20 flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">Todo 編集</p>
            <button className="modal-close">
              <svg
                className="w-6 h-6 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                >
                  {' '}
                </path>
              </svg>
            </button>
          </div>
          <form id="js-editform">
            <div className="flex flex-col px-6 py-5 bg-gray-50">
              <label className="mb-2 font-semibold text-gray-700">
                Todo
                <textarea
                  rows="4"
                  type="text"
                  className="px-2 w-full rounded text-m text-gray-600 placeholder-blueGray-300 border-0 shadow outline-none focus:outline-none focus:ring"
                  required
                />
              </label>
              <label className="mt-4 mb-2 font-semibold text-gray-700">
                期限{' '}
                <input
                  type="date"
                  className="px-2 w-full h-10 rounded text-m placeholder-blueGray-300 text-gray-600 border-0 shadow outline-none focus:outline-none focus:ring"
                  required
                />
              </label>
            </div>
            <div className="flex flex-row sitems-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <button className="modal-clear px-4 py-2 text-white font-semibold bg-slate-400 rounded">
                クリア
              </button>
              <button className="modal-submit px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
