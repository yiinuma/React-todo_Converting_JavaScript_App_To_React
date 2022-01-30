import { Link, useNavigate } from 'react-router-dom';

export function Page1() {
  const navigate = useNavigate();

  return (
    <div className="mt-4 ml-4">
      <h1 className="mb-8 text-xl">Page1ページです</h1>
      <Link to="/page1/detailA" className="text-blue-300 hover:text-blue-800">
        DetailAに移動
      </Link>
      <br />
      <Link to="/page1/detailB" className="text-blue-300 hover:text-blue-800">
        DetailBに移動
      </Link>
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
        type="button"
        className="mt-8 rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Homeに移動
      </button>
    </div>
  );
}
