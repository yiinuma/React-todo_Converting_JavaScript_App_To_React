import { memo, useEffect } from 'react';
import { useGetUserData } from '../hooks/useGetUserData';
import { ApiButton } from './button/ApiButton';

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
    <ApiButton disabled={todoList.length} onClick={handleGetUserData}>
      jsonplaceholderからuserデータを取得
    </ApiButton>
  );
});
