import React, { useState } from 'react';

export function InputForm(props) {
  const { todoList, putTodoList } = props;
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const getInputDay = () => {
    const now = new Date();
    const inputDay = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
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
    setText('');
    setLimit('');
    setSubmitDisabled(true);
  };

  return (
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
  );
}
