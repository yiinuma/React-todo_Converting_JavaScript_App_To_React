import axios from 'axios';
import dayjs from 'dayjs';
import { memo } from 'react';
import toast from 'react-hot-toast';

export const GetWebApi = memo((props) => {
  const { putTodoList, todoList } = props;

  const getLimitDay = () => {
    const limitDay = dayjs().format('YYYY-MM-DD');
    return limitDay;
  };

  const getUserData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then((res) => {
        const newArray = [...res.data];
        const newTodoList = newArray.map((list) => ({
          id: list.id,
          text: list.title,
          limit: getLimitDay(),
          complete: list.completed,
        }));
        putTodoList(...todoList, newTodoList);
        toast.success('dataを取得しました');
      })

      .catch(() => {
        toast.error('dataを取得できませんでした');
      });
  };
  return (
    <input
      type="button"
      value="jsonplaceholderからuserデータを取得"
      disabled={todoList.length}
      onClick={getUserData}
      className={`hover:bg-orange-400" mt-2 h-10 cursor-pointer rounded bg-white px-4 ${
        todoList.length && 'cursor-not-allowed text-slate-400'
      }`}
    />
  );
});
