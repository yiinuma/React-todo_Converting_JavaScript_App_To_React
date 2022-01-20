/* eslint-disable react/prop-types */
/* eslint-disable no-console */

// import { useState } from 'react';

export function Modal(props) {
  const { modal, setModal } = props;

  // function handleModal() {
  //   setModal(!modal);
  // }

  return (
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
          <button onClick={() => setModal(!modal)} className="modal-close">
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
  );
}
