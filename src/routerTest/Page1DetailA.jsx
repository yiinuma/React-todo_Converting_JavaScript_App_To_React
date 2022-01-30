import { useNavigate } from 'react-router-dom';

export function Page1DetailA() {
  const navigate = useNavigate();
  return (
    <div className="mt-4 ml-4">
      <h1 className="text-xl">Page1DetailAページです</h1>
      <button
        onClick={() => {
          navigate('/Page1');
        }}
        type="button"
        className="rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Page1に戻る
      </button>
    </div>
  );
}
