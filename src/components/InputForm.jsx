import dayjs from 'dayjs';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function InputForm(props) {
  const { todoList, putTodoList } = props;
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const getInputDay = () => {
    const inputDay = dayjs().format('YYYY-MM-DD HH:mm:ss');
    return inputDay;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoList = [
      ...todoList,
      {
        id: getInputDay(),
        text,
        limit,
        complete: false,
      },
    ];
    putTodoList(newTodoList);
    toast.success(`Todoを登録しました`);
    setText('');
    setLimit('');
    setSubmitDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-end justify-center text-white">
      <label className="block grow">
        新規Todo
        <input
          type="text"
          placeholder="Todoを入力"
          className="text-m placeholder-blueGray-300 h-10 w-full rounded border-0 px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
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
          className="text-m placeholder-blueGray-300 h-10 w-full rounded border-0 bg-white px-2 text-gray-600 shadow outline-none focus:outline-none focus:ring"
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
      <Toaster position="top-right" />
    </form>
  );
}
