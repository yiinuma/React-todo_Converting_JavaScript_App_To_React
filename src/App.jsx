/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState } from 'react';
import { FaEdit, FaCheck, FaTrashAlt } from 'react-icons/fa';
import './style.css';

export function App() {
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('');
  const [todos, setTodos] = useState([
    {
      inputDate: '2022-1-18-7:26:52',
      text: 'やることリスト',
      limit: '2022-01-25',
      complete: false,
    },
    { inputDate: '2022-1-18-7:27:3', text: '雪かき', limit: '2022-01-05', complete: false },
    { inputDate: '2022-1-18-7:27:20', text: 'ぱんを焼く', limit: '2022-01-27', complete: false },
  ]);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function getInputDay() {
    const now = new Date();
    const inputDay = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    return inputDay;
  }

  const addTodo = (newTodo, newLimit) => {
    const inputDate = getInputDay();
    const newTodos = [
      ...todos,
      {
        inputDate,
        text: newTodo,
        limit: newLimit,
        complete: false,
      },
    ];
    setTodos(newTodos);
    setText('');
    setLimit('');
    setSubmitDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text, limit);
  };

  const handleComplete = (completeIndex) => {
    todos[completeIndex].complete = !todos[completeIndex].complete;
    setTodos(todos);
  };
  return (
    <div className="h-screen bg-gradient-to-l from-green-500 to-green-700">
      <h1 className="pt-12 text-center text-5xl text-yellow-400">
        TO DO APP <small>(React Ver)</small>
      </h1>

      <div className="flex flex-col justify-center mt-4 ml-auto mr-auto w-[80%]">
        <form onSubmit={handleSubmit} className="flex flex-row justify-center items-end text-white">
          <label className="block grow">
            新規Todo
            <input
              type="text"
              placeholder="Todoを入力"
              className="px-2 w-full h-10 rounded text-m text-gray-600 placeholder-blueGray-300 border-0 shadow outline-none focus:outline-none focus:ring"
              required
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setSubmitDisabled(limit === '');
              }}
            />
          </label>
          <label className="ml-2 block">
            期限{' '}
            <input
              type="date"
              className="px-2 w-full h-10 rounded text-m placeholder-blueGray-300 text-gray-600 border-0 shadow outline-none focus:outline-none focus:ring"
              required
              value={limit}
              onChange={(e) => {
                setLimit(e.target.value);
                setSubmitDisabled(text === '');
              }}
            />
          </label>

          <input
            id="submit"
            type="submit"
            className={submitDisabled ? `submit-disabled` : `submit-enabled`}
            value="登録"
          />
        </form>

        <div className="mt-2 flex flex-row justify-end">
          <button id="sort-date" className="mt-2 h-10 px-4 rounded bg-white hover:bg-orange-400">
            入力順で並び替え
          </button>
          <button
            id="sort-limit"
            className="mt-2 ml-8 h-10 px-4 rounded bg-white hover:bg-orange-400"
          >
            期限順で並び替え
          </button>
        </div>

        <ul className="todo-list mt-8 w-full">
          {todos &&
            todos.map((list, index) => (
              <li className="todo-item" key={list.inputDate}>
                <div className="todo-div">
                  <p className="todo-todo">{list.text}</p>
                  <div className="todo-task">
                    <p className="todo-date">
                      期限:{list.limit}
                      <span className="limit-over">期限が過ぎています！！</span>
                    </p>
                    <div>
                      <button className={`list${index} edit-btn`}>
                        <i className="pointer-events-none">
                          <FaEdit />
                        </i>
                      </button>
                      <button
                        onClick={() => handleComplete(index)}
                        className={`list${index} complete-btn`}
                      >
                        <i className="pointer-events-none">
                          <FaCheck />
                        </i>
                      </button>
                      <button className={`list${index} trash-btn`}>
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
        className="transition duration-300 ease-in-out fixed top-0 left-0 opacity-0 invisible w-screen flex justify-center h-screen items-center bg-slate-500 bg-opacity-75 antialiased"
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
