// eslint-disable-next-line react/function-component-definition
export const ApiButton = (props) => {
  const { onClick, disabled, children } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-2 h-10 cursor-pointer rounded bg-white px-4 hover:bg-orange-400 ${
        disabled && ' cursor-not-allowed text-slate-400 hover:bg-white'
      }`}
    >
      {children}
    </button>
  );
};
