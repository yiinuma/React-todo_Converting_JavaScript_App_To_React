import { memo } from 'react';
import toast from 'react-hot-toast';

export const ClearList = memo((props) => {
  const { todoList, clearTodoList } = props;

  const onClickClearTask = () => {
    toast(() => (
      <span>
        本当に削除しますか？
        <input
          type="button"
          value="削除!"
          className="ml-2 cursor-pointer rounded bg-red-300 bg-white px-4 py-2 font-bold"
          onClick={() => toast.dismiss(clearTodoList())}
        />
      </span>
    ));
  };

  return (
    <input
      type="button"
      value="全てのTodoListを削除"
      disabled={!todoList.length}
      onClick={onClickClearTask}
      className={`hover:bg-orange-400" mt-2 h-10 cursor-pointer rounded bg-white px-4 ${
        !todoList.length && 'cursor-not-allowed text-slate-400'
      }`}
    />
  );
});
