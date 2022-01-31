import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function Modal(props) {
  const { todoList, putTodoList, modal, setModal, editIndex, setEditIndex } = props;
  const [editText, setEditText] = useState('');
  const [editLimit, setEditLimit] = useState('');

  useEffect(() => {
    if (editIndex !== '') {
      setEditText(todoList[editIndex].text);
      setEditLimit(todoList[editIndex].limit);
    }
  }, [editIndex]);

  const editClear = () => {
    setModal(false);
    setEditText('');
    setEditLimit('');
    setEditIndex('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = {
      id: todoList[editIndex].id,
      text: editText,
      limit: editLimit,
      complete: todoList[editIndex].complete,
    };
    todoList.splice(editIndex, 1, newTodoList);
    putTodoList(todoList);
    toast.success(`Todoを変更しました`);
    editClear();
  };

  return (
    <div
      id="modal"
      className={`invisible fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-500 bg-opacity-75 antialiased opacity-0 transition duration-300 ease-in-out ${
        modal ? `is-open` : ''
      }`}
    >
      <input
        onClick={editClear}
        className="modal-bg absolute top-0 left-0 z-10 h-full w-full opacity-0"
      />
      <div className="z-20 mx-auto flex w-11/12 max-w-2xl flex-col rounded-lg border border-gray-300 shadow-xl sm:w-5/6 lg:w-1/2">
        <div className="flex flex-row justify-between rounded-tl-lg rounded-tr-lg border-b border-gray-200 bg-white p-6">
          <p className="font-semibold text-gray-800">Todo 編集</p>
          <button onClick={editClear} className="modal-close">
            <svg
              className="pointer-events-none h-6 w-6"
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col bg-gray-50 px-6 py-5">
            <label className="mb-2 font-semibold text-gray-700">
              Todo
              <textarea
                value={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                }}
                type="text"
                className="text-m placeholder-blueGray-300 w-full rounded border-0 px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
                required
              />
            </label>
            <label className="mt-4 mb-2 font-semibold text-gray-700">
              期限{' '}
              <input
                value={editLimit}
                onChange={(e) => {
                  setEditLimit(e.target.value);
                }}
                type="date"
                className="text-m placeholder-blueGray-300 h-10 w-full rounded border-0 px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
                required
              />
            </label>
          </div>
          <div className="flex flex-row items-center justify-between rounded-bl-lg rounded-br-lg border-t border-gray-200 bg-white p-5">
            <input
              onClick={() => {
                setEditText('');
              }}
              type="button"
              value="クリア"
              className="rounded bg-slate-400 px-4 py-2 font-semibold text-white"
            />

            <input
              type="submit"
              value="保存"
              className="rounded bg-blue-500 px-4 py-2 font-semibold text-white"
            />
            <Toaster position="top-right" />
          </div>
        </form>
      </div>
    </div>
  );
}
