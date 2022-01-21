export function Sort(props) {
  // eslint-disable-next-line react/prop-types
  const { todoList, putTodoList } = props;

  const handleSortInput = (target) => {
    const sortTodoList = [...todoList].sort((a, b) => new Date(a[target]) - new Date(b[target]));
    putTodoList(sortTodoList);
  };

  return (
    <div className="mt-2 flex flex-row justify-end">
      <button
        onClick={() => handleSortInput('id')}
        className="mt-2 h-10 px-4 rounded bg-white hover:bg-orange-400"
      >
        入力順で並び替え
      </button>
      <button
        onClick={() => handleSortInput('limit')}
        className="mt-2 ml-8 h-10 px-4 rounded bg-white hover:bg-orange-400"
      >
        期限順で並び替え
      </button>
    </div>
  );
}
