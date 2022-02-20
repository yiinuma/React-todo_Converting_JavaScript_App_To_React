import { memo, useEffect } from 'react';
import { useGetUserData } from '../hooks/useGetUserData';

export const GetWebApi = memo((props) => {
  const { putTodoList, todoList } = props;
  const [userData, getUserData] = useGetUserData();

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleGetUserData = () => {
    const newUserData = userData;
    putTodoList(...todoList, newUserData);
  };

  return (
    <input
      type="button"
      value="jsonplaceholderからuserデータを取得"
      disabled={todoList.length}
      onClick={handleGetUserData}
      className={`hover:bg-orange-400" mt-2 h-10 cursor-pointer rounded bg-white px-4 ${
        todoList.length && 'cursor-not-allowed text-slate-400'
      }`}
    />
  );
});
