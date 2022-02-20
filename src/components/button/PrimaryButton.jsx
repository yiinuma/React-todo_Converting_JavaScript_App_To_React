// eslint-disable-next-line react/function-component-definition
export const PrimaryButton = (props) => {
  const { onClick, target, children } = props;
  return (
    <button
      onClick={() => {
        onClick(`${target}`);
      }}
      className="mt-2 ml-8 h-10 rounded bg-white px-4 hover:bg-orange-400"
    >
      {children}
    </button>
  );
};
